import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-5xl font-semibold mb-7">Create Post</h1>
      <Form />
      <LogoutLink className="rounded px-5 py-2 bg-slate-900 text-white">
        Log out
      </LogoutLink>
    </main>
  );
}

export default Page;
