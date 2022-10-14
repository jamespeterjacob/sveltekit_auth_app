import type { Actions } from './$types'; 
import { db } from '$lib/database';
import { invalid, redirect } from '@sveltejs/kit';
import { hashSync } from 'bcryptjs';
import { randomUUID } from 'crypto';
import jsonwebtoken from 'jsonwebtoken';

export const actions: Actions = {
    register: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const password_confirmation = data.get('password-confirmation');

        if (!email || !password || !password_confirmation)
            return invalid(400, { required: true })

        if (! await validateEmail(String(email)))
            return invalid(400, { unique: true })

        if (password === password_confirmation) {
            createUser(String(email), String(password));

        /**
         * TO-DO 
         * duplicated code in login +page.server.ts 
         */
        const jwt = jsonwebtoken.sign({username: email}, import.meta.env.VITE_JWT_PRIVATE_KEY, { expiresIn: '3m' });
        
            cookies.set('sveltekit_auth_app', String(jwt), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: false,
                maxAge: 60 * 60 * 35 * 30
            });
        } else {
            return invalid(400, {password, passwordsNotMatch: true});
        }
        
        throw redirect(302, '/dashboard');

    }
}

async function createUser(email: string, password: string) {
    const passwordHash: string = hashSync(password, 14);
    const uuid = randomUUID();
    const refreshToken = String(randomUUID());
    await db.user.create({
        data: {
            email: email,
            password: passwordHash, 
            uuid: uuid,
            refreshToken: refreshToken,
        }
    }) 
}
/**
 * Validate if email is unique
 * @param email
 * @returns {boolean} true if doesn't exists any user with this email
 */
async function validateEmail(email: string) {
    const user = await db.user.findUnique({where: {email: email}});

    if (user) return false; 

    return true;
}