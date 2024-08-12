import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-5xl font-semibold mb-7">Create Post</h1>
      <form action={createPost} className="h-10 space-x-2 my-10 ">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title for your new post"
          className="border rounded px-3 h-full"
          required
        />
        <button
          type="submit"
          className="h-full bg-blue-500 px-5 rounded text-white"
        >
          Submit
        </button>
      </form>
      <LogoutLink className="rounded px-5 py-2 bg-slate-900 text-white">
        Logout
      </LogoutLink>
    </main>
  );
}

export default Page;
