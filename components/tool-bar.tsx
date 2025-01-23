"use client";

import React from "react";
import { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaUndo,
  FaRedo,
  FaCode,
} from "react-icons/fa";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar: React.FC<Props> = ({ editor, content }) => {
  if (!editor) {
    return null;
  }

  // Function to apply heading levels or reset to paragraph
  const setHeading = (level: number | null) => {
    if (level) {
      editor.chain().focus().setHeading({ level }).run();
    } else {
      editor.chain().focus().setParagraph().run();
    }
  };

  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={editor.isActive("bold") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaBold className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={editor.isActive("italic") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaItalic className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={editor.isActive("strike") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaStrikethrough className="w-5 h-5" />
        </button>

        <select
          onChange={(e) => setHeading(e.target.value ? parseInt(e.target.value) : null)}
          className="p-2 border border-gray-500 rounded-md bg-gray-800 text-white"
        >
          <option value="">Text</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={editor.isActive("bulletList") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaListUl className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={editor.isActive("orderedList") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaListOl className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={editor.isActive("blockquote") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaQuoteLeft className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={editor.isActive("code") ? "bg-sky-700 text-white p-2 rounded-lg" : "text-sky-400"}
        >
          <FaCode className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className="text-sky-400 hover:bg-sky-700 hover:text-white p-1 rounded-lg"
        >
          <FaUndo className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className="text-sky-400 hover:bg-sky-700 hover:text-white p-1 rounded-lg"
        >
          <FaRedo className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
