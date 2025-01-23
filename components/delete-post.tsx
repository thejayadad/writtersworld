"use client";

import React from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "sonner";
import { deleteContact } from "@/lib/actions/delete-post";

const DeletePost = ({ postId }: { postId: string }) => {
  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await deleteContact(postId);
      toast.success("Post deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <input type="hidden" id="id" name="id" defaultValue={postId} />
        <button type="submit" className="text-red-500 hover:text-red-700">
          <FiTrash className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default DeletePost;
