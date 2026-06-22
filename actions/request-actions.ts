// "use server";

// import { revalidatePath } from "next/cache";

// import { connectDB } from "@/lib/mongodb";
// import Request from "@/models/Request";

// export async function closeRequest(
//   requestId: string
// ) {
//   await connectDB();

//   await Request.findByIdAndUpdate(
//     requestId,
//     {
//       status: "closed",
//     }
//   );

//   revalidatePath("/requests");
// }


"use server";

import { revalidatePath } from "next/cache";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { connectDB } from "@/lib/mongodb";
import Request from "@/models/Request";

export async function closeRequest(
  requestId: string
) {
  const { isAuthenticated } =
    getKindeServerSession();

  const authenticated =
    await isAuthenticated();

  if (!authenticated) {
    throw new Error("Unauthorized");
  }

  await connectDB();

  await Request.findByIdAndUpdate(
    requestId,
    {
      status: "closed",
    }
  );

  revalidatePath("/requests");
}