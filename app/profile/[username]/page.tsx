// import { notFound } from "next/navigation";

// import { connectDB } from "@/lib/mongodb";

// import User from "@/models/User";
// import Listing from "@/models/Listing";
// import ListingImageCarousel from "@/components/listing-image-carousel";
// import ListingCard from "@/components/listing-card";
// import ListingGrid from "@/components/listing-grid";
// import EmptyListings from "@/components/empty-listings";
// import ProfileCard from "@/components/public-profile-card";

// export default async function UserProfilePage({
//   params,
// }: {
//   params: Promise<{
//     username: string;
//   }>;
// }) {
//   const { username } = await params;

//   await connectDB();

//   // FIND USER
//   const user = await User.findOne({
//     username,
//   });

//   if (!user) {
//     notFound();
//   }

//   // FIND USER LISTINGS
//   const listings = await Listing.find({
//     createdBy: user._id,
//   })
//     .populate("createdBy")
//     .sort({
//       createdAt: -1,
//     });

//   return (
//     <main className=" p-6">
//       {/* PROFILE HEADER */}
//       <ProfileCard
//         avatar={user.avatar}
//         name={user.name}
//         username={user.username}
//         listingCount={listings.length}
//         publicView
//       />

//       {/* LISTINGS */}
//       <div>
//         <h2 className="text-2xl font-bold mb-6">Listings</h2>

//         {listings.length === 0 ? (
//           // <p>No listings yet.</p>
//           <EmptyListings
//             title="No listings available"
//             description="This user hasn't published any property listings yet."
//           />
//         ) : (
//           <ListingGrid>
//             {/* // <div className="grid gap-4"> */}
//             {listings.map((listing: any) => (
//               <ListingCard key={listing._id} listing={listing} />
//             ))}
//             {/* // </div> */}
//           </ListingGrid>
//         )}
//       </div>
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Listing from "@/models/Listing";
import ListingCard from "@/components/listing-card";
import ListingGrid from "@/components/listing-grid";
import EmptyListings from "@/components/empty-listings";
import ProfileCard from "@/components/public-profile-card";
import { Badge } from "@/components/ui/badge";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;

  await connectDB();

  const user = await User.findOne({ username });

  if (!user) {
    return {
      title: "Agent Not Found | PropNetix",
    };
  }

  return {
    title: `${user.username} | PropNetix Agent`,
    description: `View verified property listings from ${user.name} on PropNetix.`,
    openGraph: {
      title: `${user.username} | PropNetix Agent`,
      description: `Browse properties listed by ${user.name}.`,
      images: user.avatar ? [user.avatar] : [],
    },
  };
}

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = await params;

  await connectDB();

  // FIND USER
  const user = await User.findOne({ username });

  if (!user) {
    notFound();
  }

  // FIND USER LISTINGS
  const listings = await Listing.find({ createdBy: user._id })
    .populate("createdBy")
    .sort({ createdAt: -1 });

  return (
    <main className="min-h-screen bg-background antialiased py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6 md:space-y-8">
        {/* PUBLIC PROFILE HEADER */}
        <ProfileCard
          avatar={user.avatar}
          name={user.name}
          username={user.username}
          phone={user.phone}
          listingCount={listings.length}
          publicView
        />

        {/* LISTINGS TRACK */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Properties
            </h2>
            <Badge
              variant="secondary"
              className="px-2.5 py-0.5 text-xs font-medium"
            >
              {listings.length} Available
            </Badge>
          </div>

          {listings.length === 0 ? (
            <EmptyListings
              title="No listings available"
              description="This user hasn't published any property listings yet."
            />
          ) : (
            <ListingGrid>
              {listings.map((listing: any) => (
                <ListingCard key={listing._id} listing={listing} />
              ))}
            </ListingGrid>
          )}
        </div>
      </div>
    </main>
  );
}
