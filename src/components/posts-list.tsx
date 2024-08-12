import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsList() {
  // add additional 3s delay to simulate loading
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
