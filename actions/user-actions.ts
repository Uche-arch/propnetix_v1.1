"use server";

import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";

export async function updatePhone(phone: string) {
  const { getUser } = getKindeServerSession();

  const authUser = await getUser();

  if (!authUser) {
    throw new Error("Unauthorized");
  }

  await connectDB();

  await User.findOneAndUpdate(
    {
      kindeId: authUser.id,
    },
    {
      phone,
    }
  );

  revalidatePath("/dashboard");
}