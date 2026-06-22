// import Link from "next/link";
// import { redirect } from "next/navigation";

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// // import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

// import { connectDB } from "@/lib/mongodb";

// import User from "@/models/User";
// import Listing from "@/models/Listing";
// import ListingImageCarousel from "@/components/listing-image-carousel";
// import ListingCard from "@/components/listing-card";
// import ListingGrid from "@/components/listing-grid";
// import EmptyListings from "@/components/empty-listings";
// import DashboardProfileCard from "@/components/dashboard-profile-card";
// import LogoutButton from "@/components/logout-button";

// export default async function DashboardPage() {
//   const { getUser, isAuthenticated } = getKindeServerSession();

//   const authenticated = await isAuthenticated();

//   if (!authenticated) {
//     redirect("/");
//   }

//   const authUser = await getUser();

//   await connectDB();

//   // FIND USER IN DATABASE
//   let dbUser = await User.findOne({
//     kindeId: authUser?.id,
//   });

//   // CREATE USER IF NOT EXISTS
//   if (!dbUser) {
//     const baseUsername = authUser?.email
//       ?.split("@")[0]
//       .toLowerCase()
//       .replace(/\s+/g, "");

//     const randomSuffix = Math.floor(1000 + Math.random() * 9000);

//     const username = `${baseUsername}${randomSuffix}`;

//     dbUser = await User.create({
//       kindeId: authUser?.id,

//       name: `${authUser?.given_name || ""} ${authUser?.family_name || ""}`,

//       email: authUser?.email,

//       username,

//       avatar: authUser?.picture || "",
//     });
//   }

//   if (authUser?.picture && dbUser.avatar !== authUser.picture) {
//     dbUser.avatar = authUser.picture;
//     await dbUser.save();
//   }

//   // GET USER LISTINGS
//   const listings = await Listing.find({
//     createdBy: dbUser._id,
//   })
//     .populate("createdBy")
//     .sort({
//       createdAt: -1,
//     });

//   return (
//     <main className="min-h-screen p-6">
//       {/* TOP BAR */}
//       <div className="flex items-center justify-between mb-10">
//         <div>
//           <h1 className="text-3xl font-bold">Dashboard</h1>

//           <p className="text-gray-500 mt-1">
//             Welcome back {authUser?.given_name}
//           </p>
//         </div>

//         {/* <LogoutLink className="border px-4 py-2 rounded-lg">Logout</LogoutLink> */}
//         <LogoutButton />
//       </div>

//       {/* ACTIONS */}
//       {/* <div className="flex gap-4 mb-10">
//         <Link
//           href="/dashboard/create"
//           className="bg-black text-white px-5 py-3 rounded-lg"
//         >
//           Create Listing
//         </Link>

//         <Link href="/listings" className="border px-5 py-3 rounded-lg">
//           View Public Listings
//         </Link>

//         <Link
//           href={`/profile/${dbUser.username}`}
//           className="border px-5 py-3 rounded-lg"
//         >
//           View Public Profile
//         </Link>
//       </div> */}

//       <DashboardProfileCard
//         // user={{
//         //   name: dbUser.name,
//         //   email: dbUser.email,
//         //   username: dbUser.username,
//         // }}
//         user={{
//           name: dbUser.name,
//           email: dbUser.email,
//           username: dbUser.username,
//           phone: dbUser.phone,
//         }}
//         avatar={authUser?.picture}
//         listingCount={listings.length}
//       />

//       {/* USER LISTINGS */}
//       <div>
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold">My Listings</h2>

//           <p className="text-gray-500">
//             {listings.length} Listing
//             {listings.length !== 1 && "s"}
//           </p>
//         </div>

//         {listings.length === 0 ? (
//           <EmptyListings
//             title="No listings yet"
//             description="Create your first property listing and start receiving requests."
//             buttonText="Create Listing"
//             buttonHref="/dashboard/create"
//           />
//         ) : (
//           <ListingGrid>
//             {/* // <div className="grid gap-4"> */}
//             {listings.map((listing: any) => (
//               <ListingCard key={listing._id} listing={listing} showDelete />
//             ))}
//             {/* </div> */}
//           </ListingGrid>
//         )}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Listing from "@/models/Listing";
import ListingCard from "@/components/listing-card";
import ListingGrid from "@/components/listing-grid";
import EmptyListings from "@/components/empty-listings";
import DashboardProfileCard from "@/components/dashboard-profile-card";
import LogoutButton from "@/components/logout-button";
import { Badge } from "@/components/ui/badge";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your property listings and account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/auth");
  }

  const authUser = await getUser();
  await connectDB();

  let dbUser = await User.findOne({ kindeId: authUser?.id });

  if (!dbUser) {
    const baseUsername = authUser?.email
      ?.split("@")[0]
      .toLowerCase()
      .replace(/\s+/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const username = `${baseUsername}${randomSuffix}`;

    dbUser = await User.create({
      kindeId: authUser?.id,
      name: `${authUser?.given_name || ""} ${authUser?.family_name || ""}`,
      email: authUser?.email,
      username,
      avatar: authUser?.picture || "",
    });
  }

  if (authUser?.picture && dbUser.avatar !== authUser.picture) {
    dbUser.avatar = authUser.picture;
    await dbUser.save();
  }

  const listings = await Listing.find({ createdBy: dbUser._id })
    .populate("createdBy")
    .sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-background antialiased py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6 md:space-y-8">
        {/* TOP BAR */}
        <div className="flex items-center justify-between pb-4 border-b">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Welcome back, {authUser?.given_name}
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* PROFILE PROFILE HEADER CARD */}
        <DashboardProfileCard
          user={{
            name: dbUser.name,
            email: dbUser.email,
            username: dbUser.username,
            phone: dbUser.phone,
          }}
          avatar={authUser?.picture}
          listingCount={listings.length}
        />

        {/* USER LISTINGS TRACK */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              My Listings
            </h2>
            <Badge
              variant="secondary"
              className="px-2.5 py-0.5 text-xs font-medium"
            >
              {listings.length}{" "}
              {listings.length === 1 ? "Property" : "Properties"}
            </Badge>
          </div>

          {listings.length === 0 ? (
            <EmptyListings
              title="No listings yet"
              description="Create your first property listing and start receiving requests."
              buttonText="Create Listing"
              buttonHref="/dashboard/create"
            />
          ) : (
            <ListingGrid>
              {listings.map((listing: any) => (
                <ListingCard key={listing._id} listing={listing} showDelete />
              ))}
            </ListingGrid>
          )}
        </div>
      </div>
    </main>
  );
}
