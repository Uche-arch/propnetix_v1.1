// import Link from "next/link";
// import { notFound } from "next/navigation";

// import { MapPin } from "lucide-react";

// import { connectDB } from "@/lib/mongodb";

// import Listing from "@/models/Listing";
// import "@/models/User";

// import ListingCard from "@/components/listing-card";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Button } from "@/components/ui/button";
// import ListingImageCarousel from "@/components/listing-image-carousel";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function ListingPage({ params }: PageProps) {
//   const { id } = await params;

//   await connectDB();

//   const listing = await Listing.findById(id).populate("createdBy").lean();

//   if (!listing) {
//     notFound();
//   }

//   const relatedListings = await Listing.find({
//     category: listing.category,
//     _id: { $ne: listing._id },
//   })
//     .populate("createdBy")
//     .limit(3)
//     .lean();

//   return (
//     <main className="min-h-screen bg-white">
//       <div className="mx-auto max-w-7xl p-6">
//         {/* IMAGE GALLERY
//         <div className="overflow-hidden rounded-3xl border">
//           {listing.images?.length > 0 ? (
//             <ListingImageCarousel
//               images={listing.images}
//               title={listing.title}
//               height="h-[350px] md:h-[450px]"
//             />
//           ) : (
//             <div className="flex h-[350px] md:h-[450px] items-center justify-center bg-muted">
//               <p className="text-muted-foreground">No Image Available</p>
//             </div>
//           )}
//         </div> */}
//         {/* IMAGE GALLERY */}
//         <div className="overflow-hidden rounded-3xl border bg-muted">
//           {listing.images?.length > 0 ? (
//             <ListingImageCarousel
//               images={listing.images}
//               title={listing.title}
//               className="h-[350px] md:h-[500px]" // Passed directly down as a utility class
//             />
//           ) : (
//             <div className="flex h-[350px] md:h-[500px] items-center justify-center">
//               <p className="text-muted-foreground font-medium">
//                 No Image Available
//               </p>
//             </div>
//           )}
//         </div>

//         {/* DETAILS */}
//         <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
//           {/* LEFT */}
//           <div>
//             <div>
//               <p className="text-sm text-muted-foreground">
//                 {listing.category}
//               </p>

//               <h1 className="mt-2 text-4xl font-bold">{listing.title}</h1>

//               <div className="mt-4 flex items-center gap-2 text-muted-foreground">
//                 <MapPin className="h-4 w-4" />

//                 <span>{listing.location}</span>
//               </div>

//               <div className="mt-6">
//                 <h2 className="text-4xl font-bold">
//                   ₦{listing.price.toLocaleString()}
//                 </h2>

//                 <p className="text-muted-foreground">
//                   {listing.duration === "year" ? "per year" : "per month"}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h2 className="mb-4 text-2xl font-bold">Description</h2>

//               <p className="leading-8 text-muted-foreground">
//                 {listing.description}
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div>
//             <div className="rounded-3xl border p-6">
//               <h3 className="mb-5 text-lg font-semibold">Listed By</h3>

//               <div className="flex items-center gap-4">
//                 <Avatar className="h-14 w-14">
//                   <AvatarImage src={(listing.createdBy as any)?.avatar || ""} />

//                   <AvatarFallback>
//                     {(listing.createdBy as any)?.username?.charAt(0)}
//                   </AvatarFallback>
//                 </Avatar>

//                 <div>
//                   <p className="font-semibold">
//                     {(listing.createdBy as any)?.name}
//                   </p>

//                   <p className="text-sm text-muted-foreground">
//                     @{(listing.createdBy as any)?.username}
//                   </p>
//                 </div>
//               </div>

//               <Button className="mt-6 w-full" asChild>
//                 <Link href={`/profile/${(listing.createdBy as any)?.username}`}>
//                   View Profile
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* RELATED LISTINGS */}
//         {relatedListings.length > 0 && (
//           <section className="mt-20">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold">You may also like</h2>

//               <p className="text-muted-foreground">
//                 Similar properties you might be interested in.
//               </p>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//               {relatedListings.map((item: any) => (
//                 <ListingCard key={item._id} listing={item} />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { MapPin } from "lucide-react";
// import { connectDB } from "@/lib/mongodb";
// import Listing from "@/models/Listing";
// import "@/models/User";
// import ListingCard from "@/components/listing-card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import ListingImageCarousel from "@/components/listing-image-carousel";
// import ListingDescription from "@/components/listing-description";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function ListingPage({ params }: PageProps) {
//   const { id } = await params;

//   await connectDB();

//   const listing = await Listing.findById(id).populate("createdBy").lean();

//   if (!listing) {
//     notFound();
//   }

//   const relatedListings = await Listing.find({
//     category: listing.category,
//     _id: { $ne: listing._id },
//   })
//     .populate("createdBy")
//     // .limit(3)
//     .lean();

//   return (
//     <main className="min-h-screen bg-background antialiased">
//       <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
//         {/* IMAGE GALLERY CONTAINER */}
//         <div className="overflow-hidden rounded-3xl border bg-muted shadow-sm">
//           {listing.images?.length > 0 ? (
//             <ListingImageCarousel
//               images={listing.images}
//               title={listing.title}
//               className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
//             />
//           ) : (
//             <div className="flex h-[300px] sm:h-[400px] md:h-[500px] items-center justify-center">
//               <p className="text-muted-foreground font-medium text-sm">
//                 No Image Available
//               </p>
//             </div>
//           )}
//         </div>

//         {/* TWO COLUMN DETAILS SECTION */}
//         <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
//           {/* LEFT: CONTENT & METADATA */}
//           <div className="space-y-8">
//             <div className="border-b pb-6">
//               <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                 {listing.category}
//               </span>

//               <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
//                 {listing.title}
//               </h1>

//               <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/80" />
//                 <span>{listing.location}</span>
//               </div>

//               {/* RENTAL PRICE HERO BLOCK */}
//               <div className="mt-6 inline-block rounded-2xl bg-card border px-5 py-3.5 shadow-sm">
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
//                     ₦{listing.price.toLocaleString()}
//                   </span>
//                   <span className="text-sm text-muted-foreground font-medium">
//                     /{listing.duration === "year" ? "per year" : "per month"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* MAIN DESCRIPTION */}
//             <div className="space-y-3">
//               <h2 className="text-xl font-bold tracking-tight text-foreground">
//                 Description
//               </h2>
//               <ListingDescription text={listing.description} />
//               {/* <p className="text-base leading-7 text-muted-foreground whitespace-pre-line max-w-none">
//                 {listing.description}
//               </p> */}
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR: HOST PROFILE CONTACT CARD (Sticky on Viewport) */}
//           <div className="lg:sticky lg:top-6">
//             <div className="rounded-2xl border bg-card p-5 shadow-sm">
//               <h3 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase mb-4">
//                 Listed By
//               </h3>

//               <div className="flex items-center gap-3.5">
//                 <Avatar className="h-12 w-12 border shadow-sm">
//                   <AvatarImage
//                     src={(listing.createdBy as any)?.avatar || ""}
//                     alt={(listing.createdBy as any)?.name || "User"}
//                   />
//                   <AvatarFallback className="text-sm font-bold bg-muted">
//                     {(listing.createdBy as any)?.username
//                       ?.charAt(0)
//                       .toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>

//                 <div className="space-y-0.5">
//                   <p className="font-semibold text-base text-foreground tracking-tight leading-tight">
//                     {(listing.createdBy as any)?.name}
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     @{(listing.createdBy as any)?.username}
//                   </p>
//                 </div>
//               </div>

//               <Button
//                 className="mt-5 w-full font-medium shadow-sm h-10 rounded-xl"
//                 asChild
//               >
//                 <Link href={`/profile/${(listing.createdBy as any)?.username}`}>
//                   View Profile
//                 </Link>
//               </Button>
//               {(listing.createdBy as any)?.phone && (
//                 <div className="mt-3 grid grid-cols-2 gap-2">
//                   <Button variant="outline" asChild>
//                     <a href={`tel:${(listing.createdBy as any)?.phone}`}>
//                       Call
//                     </a>
//                   </Button>

//                   <Button asChild>
//                     <a
//                       href={`https://wa.me/${(
//                         listing.createdBy as any
//                       )?.phone.replace(/^0/, "234")}`}
//                       target="_blank"
//                     >
//                       WhatsApp
//                     </a>
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RELATED LISTINGS COMPONENT */}
//         {relatedListings.length > 0 && (
//           <section className="mt-16 sm:mt-24 border-t pt-10 sm:pt-14">
//             <div className="mb-6 sm:mb-8">
//               <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
//                 You may also like
//               </h2>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Similar properties you might be interested in.
//               </p>
//             </div>

//             {/* Grid structure handles sizing bounds and matches card components safely */}
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {relatedListings.map((item: any) => (
//                 <ListingCard key={item._id} listing={item} />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";
import "@/models/User";
import ListingCard from "@/components/listing-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ListingImageCarousel from "@/components/listing-image-carousel";
import ListingDescription from "@/components/listing-description";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();

  const listing = await Listing.findById(id);

  return {
    title: listing.title,

    description: listing.description.slice(
      0,
      160
    ),

    openGraph: {
      title: listing.title,
      description: listing.description,
      images: listing.images,
    },
  };
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ListingPage({ params }: PageProps) {
  const { id } = await params;

  await connectDB();

  const listing = await Listing.findById(id).populate("createdBy").lean();

  if (!listing) {
    notFound();
  }

  // Limited to 3 entries to maintain a clean card grid presentation
  const relatedListings = await Listing.find({
    category: listing.category,
    _id: { $ne: listing._id },
  })
    .populate("createdBy")
    .limit(3)
    .lean();

  return (
    <main className="min-h-screen bg-background antialiased py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* IMAGE GALLERY CONTAINER */}
        <div className="overflow-hidden rounded-3xl border bg-muted shadow-sm">
          {listing.images && listing.images.length > 0 ? (
            <ListingImageCarousel
              images={listing.images}
              title={listing.title}
              className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[300px] sm:h-[400px] md:h-[500px] items-center justify-center">
              <p className="text-muted-foreground font-medium text-sm">
                No Image Available
              </p>
            </div>
          )}
        </div>

        {/* TWO COLUMN DETAILS SECTION */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          {/* LEFT: CONTENT & METADATA */}
          <div className="space-y-8">
            <div className="border-b pb-6">
              <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {listing.category}
              </span>

              <h1 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {listing.title}
              </h1>

              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                <span>{listing.location}</span>
              </div>

              {/* RENTAL PRICE HERO BLOCK */}
              {/* <div className="mt-6 inline-block rounded-2xl bg-card border px-5 py-3.5 shadow-sm">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    ₦{listing.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    /{listing.duration === "year" ? "per year" : "per month"}
                  </span>
                </div>
              </div> */}
              {/* CLEAN HERO PRICE */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  ₦{listing.price.toLocaleString()}
                </span>
                {/* <span className="text-sm text-muted-foreground font-medium">
                  /{listing.duration === "year" ? "per year" : "per month"}
                </span> */}
                {/* 🟢 ONLY SHOW DURATION METRIC IF THE CATEGORY IS NOT LAND */}
                {listing.category !== "Land" && (
                  <span className="text-sm text-muted-foreground font-medium">
                    /{listing.duration === "year" ? "per year" : "per month"}
                  </span>
                )}
              </div>
            </div>

            {/* MAIN DESCRIPTION */}
            <div className="space-y-3 ">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Description
              </h2>
              <ListingDescription text={listing.description} />
            </div>
          </div>

          {/* RIGHT SIDEBAR: HOST PROFILE CONTACT CARD (Sticky on Viewport) */}
          <div className="lg:sticky lg:top-6">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase mb-4">
                Listed By
              </h3>

              <div className="flex items-center gap-3.5">
                <Avatar className="h-12 w-12 border shadow-sm">
                  <AvatarImage
                    src={(listing.createdBy as any)?.avatar || ""}
                    alt={(listing.createdBy as any)?.name || "User"}
                  />
                  <AvatarFallback className="text-sm font-bold bg-muted">
                    {(listing.createdBy as any)?.username
                      ?.charAt(0)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-0.5">
                  <p className="font-semibold text-base text-foreground tracking-tight leading-tight">
                    {(listing.createdBy as any)?.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    @{(listing.createdBy as any)?.username}
                  </p>
                </div>
              </div>

              <Button
                className="mt-5 w-full font-medium shadow-sm h-10 rounded-xl cursor-pointer"
                asChild
              >
                <Link href={`/profile/${(listing.createdBy as any)?.username}`}>
                  View Profile
                </Link>
              </Button>

              {(listing.createdBy as any)?.phone && (
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl text-xs font-semibold shadow-sm cursor-pointer"
                    asChild
                  >
                    <a href={`tel:${(listing.createdBy as any)?.phone}`}>
                      <Phone className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
                      Call Agent
                    </a>
                  </Button>

                  <Button
                    className="h-10 rounded-xl text-xs font-semibold shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 cursor-pointer"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${(
                        listing.createdBy as any
                      )?.phone.replace(/^0/, "234")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RELATED LISTINGS COMPONENT */}
        {relatedListings.length > 0 && (
          <section className="mt-16 sm:mt-24 border-t pt-10 sm:pt-14">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                You may also like
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Similar properties you might be interested in.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedListings.map((item: any) => (
                <ListingCard key={item._id} listing={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
