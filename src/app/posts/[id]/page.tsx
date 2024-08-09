import Loading from "../loading";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-2xl mx-auto">{post.body}</p>
    </main>
  );
}
