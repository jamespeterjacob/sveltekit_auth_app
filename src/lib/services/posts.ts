import { DATABASE_URL } from '$env/static/private';
import prisma from '$lib/database';
import { Prisma } from '@prisma/client';

const createNewPost = async (post: Prisma.PostCreateInput) => {
  return await prisma.post.create({
    data: post,
  });
};

const getPostBySlug = async (slug: string) => {
  return await prisma.post.findUnique({
    where: {
      slug,
    },
  });
};

const getAllPosts = async () => {
  return await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export { createNewPost, getPostBySlug, getAllPosts };