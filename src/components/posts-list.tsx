import Link from "next/link";

export default async function PostsList() {
  // add additional 3s delay to simulate loading
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();
  return (
    <ul>
      {data.posts.map((post: { id: string; title: string }) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
