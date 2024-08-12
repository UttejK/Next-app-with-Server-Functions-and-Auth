import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-2">
      <h4>No post found for the id</h4>
      <Link href="/posts" className="bg-slate-900 text-white px-5 py-2 rounded">
        Go back to posts
      </Link>
    </div>
  );
}

export default NotFound;
