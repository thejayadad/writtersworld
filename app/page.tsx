import DeletePost from "@/components/delete-post";
import { getPost } from "@/lib/actions/get-post";
import Link from "next/link";

export default async function Home() {
  const posts = await getPost() ?? [];  // Ensure posts is always an array

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="border-b flex items-center justify-between border-gray-300 py-4">
          <Link href={`/${post.id}`} className="text-blue-500 hover:underline text-lg font-semibold">
            {post.title}
          </Link>
          <div className="flex items-center space-x-2">
            <Link href={`/update/${post.id}`}>
              Update
            </Link>
            <div>
            <DeletePost postId={post.id.toString()} />
            </div>
          </div>
         </div>
        ))
      ) : (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
}
