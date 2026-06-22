import { redirect } from "next/navigation";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";
import Listing from "@/models/Listing";
import ListingImageCarousel from "@/components/listing-image-carousel";
import ListingCard from "@/components/listing-card";
import ListingGrid from "@/components/listing-grid";
import EmptyListings from "@/components/empty-listings";

export default async function DashboardListingsPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/");
  }

  const authUser = await getUser();

  await connectDB();

  // FIND CURRENT DB USER
  const dbUser = await User.findOne({
    kindeId: authUser?.id,
  });

  // FIND USER'S LISTINGS
  const listings = await Listing.find({
    createdBy: dbUser._id,
  })
  .populate("createdBy")
  .sort({
    createdAt: -1,
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Listings</h1>

      {listings.length === 0 && <EmptyListings
  title="No listings yet"
  description="Your property listings will appear here."
  buttonText="Create Listing"
  buttonHref="/dashboard/create"
/>}
      {/* <div className="flex"> */}
      <ListingGrid>
        {listings.map((listing: any) => (

          <ListingCard key={listing._id} listing={listing} />
        ))}
        {/* </div> */}
      </ListingGrid>
    </div>
  );
}
