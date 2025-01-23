'use server'

import { prisma } from "../prisma"

export const getPost = async () => {
    try {
        const posts = await prisma.post.findMany({
            select: {
              id: true,
              title: true,
              content: true,
            },
          });
      
          // Trim content to the first 20 characters and append "..." if content is longer
          const formattedPosts = posts.map((post) => ({
            ...post,
            shortContent: post.content.length > 20 ? `${post.content.slice(0, 20)}...` : post.content,
          }));
      
          return formattedPosts;
    } catch (error) {
        console.log("Error " + error)
    }
}