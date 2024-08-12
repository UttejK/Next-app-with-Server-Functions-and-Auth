import { createPost } from "@/actions/actions";
import React from "react";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-md gap-2 my-10 mx-auto"
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title for your new post"
        className="border rounded px-3 h-10"
        required
      />
      <textarea
        name="body"
        id="body"
        placeholder="Body content for your new post"
        rows={6}
        className="border rounded px-3 py-2"
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
}
