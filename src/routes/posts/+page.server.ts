import { getAllPosts } from "$lib/services/posts";
import { createNewPost } from "$lib/services/posts";
import { invalid, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from '../$types'; 

export const load = async () => {
  const posts = await getAllPosts();

  return {
    posts,
  };
};

export const actions = {
    default: async ({ request }) => {
      const formData = Object.fromEntries(await request.formData());
      const { title, slug, content } = formData as {
        title: string | undefined;
        slug: string | undefined;
        content: string | undefined;
      };
  
      if (!title || !slug || slug.trim().length === 0) {
        return invalid(400, { message: "Missing required fields" });
      }
  
      const newPost = await createNewPost({
        title,
        slug,
        content,
      });
  
      redirect(302, `/blog/${newPost.slug}`);
    },
  };