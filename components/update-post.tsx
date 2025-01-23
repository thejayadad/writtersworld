"use client";

import React, { useState } from "react";
import { updatePost } from "@/lib/actions/update-post";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const UpdatePostForm = ({ post }: { post: { id: number; title: string; content: string } }) => {
  const [title, setTitle] = useState(post.title);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit],
    content: post.content,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updatePost({
        id: post.id.toString(),
        title,
        content: editor?.getHTML() || "",
      });

      toast.success("Post updated successfully!");

      // Redirect to the updated post page or home
      router.push(`/${post.id}`);
    } catch (error) {
      toast.error("Failed to update post. Please try again.");
      console.error("Error updating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full rounded-md"
        required
        disabled={isSubmitting}
      />

      <div className="border p-2 rounded-md">
        {editor ? <EditorContent editor={editor} /> : <p>Loading editor...</p>}
      </div>

      <button
        type="submit"
        className={`bg-blue-500 text-white p-2 rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Updating..." : "Update Post"}
      </button>
    </form>
  );
};

export default UpdatePostForm;
