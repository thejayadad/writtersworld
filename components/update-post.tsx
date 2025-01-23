"use client";

import React, { useState } from "react";
import { updatePost } from "@/lib/actions/update-post";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./tool-bar";

const UpdatePostForm = ({ post }: { post: { id: string; title: string; content: string } }) => {
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
        id: post.id,
        title,
        content: editor?.getHTML() || "",
      });

      toast.success("Post updated successfully!");

    } catch (error) {
      console.log("Error updating post:" + error);
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

      <div className="border rounded-md">
        {editor ? (
          <>
            <Toolbar editor={editor} content={post.content} />
            <EditorContent editor={editor} className="p-4" />
          </>
        ) : (
          <p>Loading editor...</p>
        )}
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
