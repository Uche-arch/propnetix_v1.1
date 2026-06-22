// "use server";

// import { revalidatePath } from "next/cache";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";
// import Listing from "@/models/Listing";

// export async function createListing(formData: FormData) {
//   const { getUser } = getKindeServerSession();

//   const authUser = await getUser();

//   await connectDB();

//   const dbUser = await User.findOne({
//     kindeId: authUser?.id,
//   });

//   if (!dbUser) {
//     throw new Error("User not found");
//   }

//   await Listing.create({
//     title: formData.get("title"),
//     description: formData.get("description"),
//     price: Number(formData.get("price")),
//     location: formData.get("location"),

//     createdBy: dbUser._id,
//   });

//   revalidatePath("/dashboard/listings");
// }

// "use server";

// import { revalidatePath } from "next/cache";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// import { connectDB } from "@/lib/mongodb";

// import User from "@/models/User";
// import Listing from "@/models/Listing";

// export async function createListing(formData: FormData) {
//   const { getUser } = getKindeServerSession();

//   const authUser = await getUser();

//   await connectDB();

//   const dbUser = await User.findOne({
//     kindeId: authUser?.id,
//   });

//   if (!dbUser) {
//     throw new Error("User not found");
//   }

//   await Listing.create({
//     title: formData.get("title"),

//     description: formData.get("description"),

//     category: formData.get("category"),

//     // amount: Number(formData.get("amount")),

//     duration: formData.get("duration"),

//     price: Number(formData.get("price")),

//     location: formData.get("location"),

//     createdBy: dbUser._id,
//   });

//   revalidatePath("/dashboard");
//   revalidatePath("/listings");
// }

"use server";

import { revalidatePath } from "next/cache";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";
import Listing from "@/models/Listing";

interface CreateListingData {
  title: string;
  description: string;
  category: string;
  duration: "month" | "year";
  price: number;
  location: string;
  images: string[];
}

export async function createListing(data: CreateListingData) {
  const { getUser } = getKindeServerSession();

  const authUser = await getUser();

  if (!authUser) {
    throw new Error("You must be logged in");
  }

  await connectDB();

  const dbUser = await User.findOne({
    kindeId: authUser.id,
  });

  if (!dbUser) {
    throw new Error("User not found");
  }

  await Listing.create({
    title: data.title,

    description: data.description,

    category: data.category,

    duration: data.duration,

    price: data.price,

    location: data.location,

    images: data.images,

    createdBy: dbUser._id,
  });

  revalidatePath("/dashboard");
  revalidatePath("/listings");
}

export async function deleteListing(listingId: string) {
  const { getUser } = getKindeServerSession();

  await connectDB();


  const authUser = await getUser();

  const dbUser = await User.findOne({
    kindeId: authUser?.id,
  });

  await Listing.findOneAndDelete({
    _id: listingId,
    createdBy: dbUser._id,
  });

  revalidatePath("/dashboard");
  revalidatePath("/listings");
}
