import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

const SinglePost = async ({ params }:Props) => {
    // Ensure the id is correctly parsed as a number if needed
    const { id } = await params
 
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  if (!post) {
    redirect('/');
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
    </div>
  );
};

export default SinglePost;
