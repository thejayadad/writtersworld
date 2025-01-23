"use client";
import React, { useState } from "react";
import RichEditor from "./tip-tap";
import { addPost } from "@/lib/actions/add-post";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const postData = { title, content };

      // Call the addPost function to create a new post
      const response = await addPost(postData);

      if (response) {
        // Show success notification
        toast.success("Post added successfully!");

        // Clear the form fields
        setTitle("");
        setContent("");
      } else {
        toast.error("Failed to add post. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.log("Error adding post:" + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          id="title"
          name="title"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded-md"
          disabled={isSubmitting}
        />

        <RichEditor content={content} onChange={setContent} />

        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default NewPost;
