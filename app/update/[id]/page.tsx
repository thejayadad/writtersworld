import UpdatePostForm from '@/components/update-post';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const UpdatePostPage = async ({params}) => {
       const { id } = await params
     
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
      });
      if(!post){
        redirect('/')
      }
  return (
    <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4">Update Post</h1>
    <UpdatePostForm post={post} />
  </div>
  )
}

export default UpdatePostPage