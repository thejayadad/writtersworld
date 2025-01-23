"use client";
import React, { useState } from "react";
import RichEditor from "./tip-tap";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
  
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
        />

        <RichEditor content={content} onChange={setContent} />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
