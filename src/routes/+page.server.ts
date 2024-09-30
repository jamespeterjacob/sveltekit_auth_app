import { redirect } from '@sveltejs/kit'; 
import type { PageServerLoad } from './$types'; 
import db from '$lib/database';

/* export const load: PageServerLoad = () => {
    throw redirect(302, '/');
} */

export function load() {
  // ...
  redirect(302, '/'); // needs `throw` in v1
}

   /*  export const load = (async () => {
    
    const response = await db.user.findMany({
        
      })
    

    return { feed: response };

    })satisfies PageServerLoad; */