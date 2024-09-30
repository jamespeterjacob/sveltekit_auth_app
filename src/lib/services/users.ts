import { DATABASE_URL } from '$env/static/private';
import prisma from '$lib/database';

/**
 * Get user by uuid 
 * 
 * @param uuid 
 * @returns 
 */
export const findByUuid = async (uuid: string) => {
    return await prisma.user.findUnique({
        where: {
            uuid: uuid,
        },
        select: {
            email: true,
        }
    })
}

/**
 * Get user by email
 * 
 * @param email 
 * @returns 
 */
export const findByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email: email }})
}

export const allUsers = async () => {
    return await prisma.user.findMany()
}



