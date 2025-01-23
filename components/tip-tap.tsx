"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { FC } from "react";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

const RichEditor: FC<Props> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="border p-4 rounded-lg">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichEditor;
