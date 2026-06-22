// import { connectDB } from "@/lib/mongodb";
// import Listing from "@/models/Listing";

// export default async function ListingsPage() {
//   await connectDB();

//   const listings = await Listing.find()
//     .populate("createdBy")
//     .sort({ createdAt: -1 });

//   return (
//     <div className="grid gap-4">
//       {listings.map((listing: any) => (
//         <div
//           key={listing._id}
//           className="border p-4 rounded-lg"
//         >
//           <h2 className="text-xl font-bold">
//             {listing.title}
//           </h2>

//           <p>{listing.description}</p>

//           <p>₦{listing.price}</p>

//           <p>{listing.duration}</p>

//           <p>{listing.location}</p>

//           <p>{listing.category}</p>

//           <p>
//             Posted by: {listing.createdBy?.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import Link from "next/link";

// import { connectDB } from "@/lib/mongodb";

// import Listing from "@/models/Listing";

// import "@/models/User";

// import ListingsFilter from "@/components/listing-filters";
// import ListingCard from "@/components/listing-card";
// import ListingImageCarousel from "@/components/listing-image-carousel";
// import EmptyListings from "@/components/empty-listings";

// export default async function ListingsPage({
//   searchParams,
// }: {
//   searchParams: Promise<{
//     search?: string;
//     category?: string;
//   }>;
// }) {
//   const params = await searchParams;

//   const search = params.search || "";

//   const category = params.category || "";

//   await connectDB();

//   // BUILD FILTER
//   const filter: any = {};

//   // SEARCH BY TITLE
//   if (search) {
//     filter.title = {
//       $regex: search,
//       $options: "i",
//     };
//   }

//   // FILTER CATEGORY
//   if (category && category !== "All") {
//     filter.category = category;
//   }

//   // FETCH LISTINGS
//   const listings = await Listing.find(filter)
//     .populate("createdBy")
//     .sort({ createdAt: -1 });

//   return (
//     <main className="min-h-screen bg-white p-6">
//       <div className="mx-auto max-w-7xl">
//         {/* HEADER */}
//         <div className="mb-10">
//           <h1 className="text-5xl font-bold">Property Listings</h1>

//           <p className="mt-3 text-gray-500">Browse verified properties</p>

//           <Link href="/request-property">Request Property</Link>

//           <Link href="/requests">Browse Requests</Link>
//         </div>

//         <ListingsFilter />

//         {/* RESULTS */}
//         {listings.length === 0 ? (
//           <EmptyListings
//   title="No listings found"
//   description="Try adjusting your search or category filters."
// />
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {listings.map((listing: any) => (
              
//               <ListingCard key={listing._id} listing={listing} />
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

import { Suspense } from "react";
import Link from "next/link";
import { PlusCircle, Layers, Loader2 } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";
import "@/models/User";
import ListingsFilter from "@/components/listing-filters";
import ListingCard from "@/components/listing-card";
import EmptyListings from "@/components/empty-listings";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Browse Properties",
  description:
    "Explore houses, apartments, lands and commercial properties across Nigeria.",
};

interface PageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}

// Inner list handler to isolate database re-renders cleanly
async function ListingsGrid({ searchParams }: { searchParams: Promise<{ search?: string; category?: string }> }) {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";

  await connectDB();

  const filter: any = {};

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (category && category !== "All") {
    filter.category = category;
  }

  // const listings = await Listing.find(filter)
  //   .populate("createdBy")
  //   .sort({ createdAt: -1 });

  // Removed .sort({ createdAt: -1 }) to handle randomization instead
  const listings = await Listing.find(filter).populate("createdBy");

  if (listings.length === 0) {
    return (
      <EmptyListings
        title="No listings found"
        description="Try adjusting your search query or switching to a different category filter."
      />
    );
  }

  // Randomize the listings array order in-memory
  const randomizedListings = [...listings].sort(() => Math.random() - 0.5);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* {listings.map((listing: any) => (
        <ListingCard key={listing._id} listing={listing} />
      ))} */}
      {randomizedListings.map((listing: any) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
}

export default async function ListingsPage({ searchParams }: PageProps) {
  return (
    <main className="min-h-screen bg-background antialiased py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6 md:space-y-8">
        
        {/* HEADER BLOCK WITH SLICK NAVIGATION LINKS */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between border-b pb-6">
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Property Listings
            </h1>
            <p className="text-sm text-muted-foreground">
              Explore verified property developments matching your lifestyle.
            </p>
          </div>

          {/* Action Link Row */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <Button variant="outline" size="sm" className="rounded-xl h-9 text-xs font-semibold shadow-sm cursor-pointer" asChild>
              <Link href="/requests">
                <Layers className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
                Browse Requests
              </Link>
            </Button>
            
            <Button size="sm" className="rounded-xl h-9 text-xs font-semibold shadow-sm cursor-pointer" asChild>
              <Link href="/request-property">
                <PlusCircle className="mr-1.5 h-3.5 w-3.5" />
                Request Property
              </Link>
            </Button>
          </div>
        </div>

        {/* SEARCH AND FILTER STACK */}
        <div className="space-y-6">
          <ListingsFilter />

          {/* SUSPENSE CONTAINER FOR SMOOTH URL DEBOUNCING */}
          <Suspense 
            key={JSON.stringify(await searchParams)} 
            fallback={
              <div className="flex flex-col items-center justify-center py-24 gap-3">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/70" />
                <p className="text-xs font-medium text-muted-foreground tracking-wide">Updating properties...</p>
              </div>
            }
          >
            <ListingsGrid searchParams={searchParams} />
          </Suspense>
        </div>

      </div>
    </main>
  );
}