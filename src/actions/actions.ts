"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function createPost(formData: FormData) {
  // Auth Check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    // throw new Error("User not authenticated")
    redirect("api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  // update the database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  // Revalidate the page
  revalidatePath("/posts");
}
