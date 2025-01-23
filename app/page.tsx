import DeletePost from "@/components/delete-post";
import { getPost } from "@/lib/actions/get-post";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

export default async function Home() {
  const posts = await getPost() ?? []; // Ensure posts is always an array

  return (
    <div className="mx-auto max-w-screen-lg px-4 pt-4">
      {posts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
              <Link
                href={`/${post.id}`}
                className="text-gray-700 hover:underline text-lg font-semibold block mb-2"
              >
                {post.title}
              </Link>
              <div className="flex justify-between items-center mt-4">
                <Link href={`/update/${post.id}`} className="text-purple-500">
                  <FiEdit className="h-5 w-5" />
                </Link>
                <DeletePost postId={post.id.toString()} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">No posts available.</p>
      )}
    </div>
  );
}
