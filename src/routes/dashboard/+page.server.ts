import {redirect} from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    
    const sessionId = cookies.get("session-id")

    if (sessionId === undefined) {throw redirect(302, '/login')}

    // const validUser = await fetch("https://www.philippdev.de/")

    return {
        post: {
            session: sessionId,
        }
    }
}) satisfies PageServerLoad
