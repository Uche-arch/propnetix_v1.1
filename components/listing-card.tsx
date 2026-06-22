import Link from "next/link";
import { MapPin } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ListingImageCarousel from "./listing-image-carousel";
import DeleteListingButton from "./delete-listing-button";
import { Phone, MessageCircle } from "lucide-react";

interface ListingCardProps {
  listing: any;
  showDelete?: boolean;
}

export default function ListingCard({
  listing,
  showDelete = false,
}: ListingCardProps) {
  return (
    <div className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-xl shadow transition-all hover:shadow-md">
      {/* IMAGE SECTION */}
      <div className="relative w-full shrink-0">
        <ListingImageCarousel
          images={listing.images}
          title={listing.title}
          className="aspect-[16/10]"
        />
        <div className="absolute left-3 top-3 z-10">
          <Badge
            variant="secondary"
            className="bg-white/90 text-black backdrop-blur-sm shadow-sm border-none text-[11px] px-2 py-0.5 rounded-md font-medium"
          >
            {listing.category}
          </Badge>
        </div>
      </div>

      {/* CARD CONTENT */}
      <CardContent className="flex flex-1 flex-col p-4 pt-3.5">
        {/* DETAILS WRAPPER */}
        <div className="flex-1">
          {/* PRICE */}
          <div className="flex items-baseline gap-0.5">
            <span className="text-lg font-bold tracking-tight text-card-foreground">
              ₦{listing.price.toLocaleString()}
            </span>
            {/* ONLY SHOW DURATION IF IT IS NOT LAND */}
            {listing.category !== "Land" && (
              <span className="text-xs text-muted-foreground font-normal">
                /{listing.duration === "year" ? "yr" : "mo"}
              </span>
            )}
          </div>

          {/* TITLE */}
          <h2 className="mt-1 text-sm font-semibold tracking-tight text-card-foreground line-clamp-1 hover:underline">
            <Link href={`/listings/${listing._id}`}>{listing.title}</Link>
          </h2>

          {/* LOCATION */}
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="line-clamp-1">{listing.location}</span>
          </div>
        </div>

        {/* VIEW DETAILS BUTTON */}
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-3.5 w-full h-8 text-xs font-medium rounded-lg"
        >
          <Link href={`/listings/${listing._id}`}>View Details</Link>
        </Button>

        {/* FOOTER */}
        <div className="mt-3.5 border-t pt-2.5">
          <div className="flex items-center justify-between">
            {/* CREATED BY USER */}
            <Link
              href={`/profile/${listing.createdBy?.username}`}
              className="flex items-center gap-1.5 group"
            >
              <Avatar className="h-5.5 w-5.5 border shadow-sm">
                <AvatarImage src={listing.createdBy?.avatar || ""} />
                <AvatarFallback className="text-[9px]">
                  {listing.createdBy?.username?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="text-[12px] tracking-tight">
                <span className="text-muted-foreground">By</span>{" "}
                <span className="font-medium group-hover:underline">
                  @{listing.createdBy?.username}
                </span>
              </div>
            </Link>

            {/* PUBLIC VIEWER: CONTACT BUTTONS */}
            {!showDelete && listing.createdBy?.phone && (
              <div className="flex items-center gap-1">
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="h-8 w-8"
                >
                  <a href={`tel:${listing.createdBy.phone}`}>
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  <a
                    href={`https://wa.me/${listing.createdBy.phone.replace(/^0/, "234")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            )}

            {/* OWNER VIEWER: ICON-ONLY DELETE BUTTON */}
            {showDelete && (
              <DeleteListingButton listingId={listing._id.toString()} />
            )}
          </div>
        </div>
      </CardContent>
    </div>
  );
}

// import Link from "next/link";
// import { MapPin } from "lucide-react";
// import { CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ListingImageCarousel from "./listing-image-carousel";
// import DeleteListingButton from "./delete-listing-button";
// import { Phone, MessageCircle } from "lucide-react";

// interface ListingCardProps {
//   listing: any;
//   showDelete?: boolean;
// }

// export default function ListingCard({
//   listing,
//   showDelete = false,
// }: ListingCardProps) {
//   return (
//     // Wrapper: subtle border, beautiful uniform rounding, clear overflow management
//     <div className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-xl shadow transition-all hover:shadow-md">
//       {/* // <div className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-xl shadow transition-all hover:shadow-md w-[290px] sm:w-[320px] shrink-0"> */}
//       {/* IMAGE SECTION */}
//       <div className="relative w-full shrink-0">
//         <ListingImageCarousel
//           images={listing.images}
//           title={listing.title}
//           className="aspect-[16/10]"
//         />
//         <div className="absolute left-3 top-3 z-10">
//           <Badge
//             variant="secondary"
//             className="bg-white/90 text-black backdrop-blur-sm shadow-sm border-none text-[11px] px-2 py-0.5 rounded-md font-medium"
//           >
//             {listing.category}
//           </Badge>
//         </div>
//       </div>

//       {/* CARD CONTENT */}
//       {/* p-4 (16px) gives it that premium, perfectly aligned layout blueprint */}
//       <CardContent className="flex flex-1 flex-col p-4 pt-3.5">
//         {/* DETAILS WRAPPER */}
//         <div className="flex-1">
//           {/* PRICE */}
//           <div className="flex items-baseline gap-0.5">
//             <span className="text-lg font-bold tracking-tight text-card-foreground">
//               ₦{listing.price.toLocaleString()}
//             </span>
//             <span className="text-xs text-muted-foreground font-normal">
//               /{listing.duration === "year" ? "yr" : "mo"}
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2 className="mt-1 text-sm font-semibold tracking-tight text-card-foreground line-clamp-1 hover:underline">
//             <Link href={`/listings/${listing._id}`}>{listing.title}</Link>
//           </h2>

//           {/* LOCATION */}
//           <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
//             <MapPin className="h-3.5 w-3.5 shrink-0" />
//             <span className="line-clamp-1">{listing.location}</span>
//           </div>
//         </div>

//         {/* VIEW DETAILS BUTTON */}
//         <Button
//           asChild
//           size="lg"
//           variant="secondary"
//           className="mt-3.5 w-full h-8 text-xs font-medium rounded-lg"
//         >
//           <Link href={`/listings/${listing._id}`}>View Details</Link>
//         </Button>

//         {/* FOOTER */}
       
//         <div className="mt-3.5 border-t pt-2.5">
//           <div className="flex items-center justify-between">
//             {/* CREATED BY USER */}
//             <Link
//               href={`/profile/${listing.createdBy?.username}`}
//               className="flex items-center gap-1.5 group"
//             >
//               <Avatar className="h-5.5 w-5.5 border shadow-sm">
//                 <AvatarImage src={listing.createdBy?.avatar || ""} />
//                 <AvatarFallback className="text-[9px]">
//                   {listing.createdBy?.username?.charAt(0).toUpperCase()}
//                 </AvatarFallback>
//               </Avatar>

//               <div className="text-[12px] tracking-tight">
//                 <span className="text-muted-foreground">By</span>{" "}
//                 <span className="font-medium group-hover:underline">
//                   @{listing.createdBy?.username}
//                 </span>
//               </div>
//             </Link>

//             {/* PUBLIC VIEWER: CONTACT BUTTONS */}
//             {!showDelete && listing.createdBy?.phone && (
//               <div className="flex items-center gap-1">
//                 <Button
//                   asChild
//                   size="icon"
//                   variant="outline"
//                   className="h-8 w-8"
//                 >
//                   <a href={`tel:${listing.createdBy.phone}`}>
//                     <Phone className="h-3.5 w-3.5" />
//                   </a>
//                 </Button>

//                 <Button
//                   asChild
//                   size="icon"
//                   variant="outline"
//                   className="h-8 w-8 hover:bg-emerald-50 hover:text-emerald-600"
//                 >
//                   <a
//                     href={`https://wa.me/${listing.createdBy.phone.replace(/^0/, "234")}`}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <MessageCircle className="h-3.5 w-3.5" />
//                   </a>
//                 </Button>
//               </div>
//             )}

//             {/* OWNER VIEWER: ICON-ONLY DELETE BUTTON ALIGNED TO RIGHT EDGE */}
//             {showDelete && (
//               <DeleteListingButton listingId={listing._id.toString()} />
//             )}
//           </div>
//         </div>
//       </CardContent>
//     </div>
//   );
// }

// import Link from "next/link";
// import { MapPin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ListingImageCarousel from "./listing-image-carousel";
// import DeleteListingButton from "./delete-listing-button";

// interface ListingCardProps {
//   listing: any;
//   showDelete?: boolean;
// }

// export default function ListingCard({
//   listing,
//   showDelete = false,
// }: ListingCardProps) {
//   return (
//     <div className="flex flex-col overflow-hidden h-full bg-card border">
//       {/* IMAGE SECTION */}
//       <div className="relative w-full shrink-0">
//         <ListingImageCarousel
//           images={listing.images}
//           title={listing.title}
//           className="aspect-[16/10]" // Slimmer image height profile
//         />
//         <div className="absolute left-3 top-3 z-10">
//           <Badge className="text-[12px] px-2 py-0.5 rounded-md font-medium">
//             {listing.category}
//           </Badge>
//         </div>
//       </div>

//       {/* CARD CONTENT */}
//       <CardContent className="flex flex-1 flex-col px-2 py-2 ">
//         {/* DETAILS WRAPPER (flex-1 pushes everything below it down) */}
//         <div className="flex-1">
//           {/* PRICE */}
//           <div className="flex items-baseline gap-1">
//             <span className="text-xl font-bold tracking-tight text-card-foreground">
//               ₦{listing.price.toLocaleString()}
//             </span>
//             <span className="text-[13px] text-muted-foreground font-normal">
//               /{listing.duration === "year" ? "yr" : "mo"}
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-card-foreground line-clamp-2 hover:underline">
//             <Link href={`/listings/${listing._id}`}>{listing.title}</Link>
//           </h2>

//           {/* LOCATION */}
//           <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
//             <MapPin className="h-4 w-4 shrink-0" />
//             <span className="line-clamp-1">{listing.location}</span>
//           </div>
//         </div>

//         {/* VIEW DETAILS BUTTON */}
//         <Button asChild className="mt-3.5 w-full">
//           <Link href={`/listings/${listing._id}`}>View Details</Link>
//         </Button>

//         {/* FOOTER (Pushed cleanly to the absolute bottom) */}
//         <div className="mt-4 flex items-center justify-between border-t pt-1">
//           <Link
//             href={`/profile/${listing.createdBy?.username}`}
//             className="flex items-center gap-2 group"
//           >
//             <Avatar className="h-6 w-6 border">
//               <AvatarImage
//                 src={listing.createdBy?.avatar || ""}
//                 alt={listing.createdBy?.username}
//               />
//               <AvatarFallback className="text-[10px]">
//                 {listing.createdBy?.username?.charAt(0).toUpperCase()}
//               </AvatarFallback>
//             </Avatar>

//             <div className="text-[14px]">
//               <span className="text-muted-foreground">By </span>
//               <span className="font-medium text-card-foreground group-hover:underline">
//                 @{listing.createdBy?.username}
//               </span>
//             </div>
//           </Link>

//           {showDelete && (
//             <div className="shrink-0">
//               <DeleteListingButton listingId={listing._id.toString()} />
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </div>
//   );
// }

// import Link from "next/link";

// import { MapPin } from "lucide-react";

// import { Card, CardContent } from "@/components/ui/card";

// import { Badge } from "@/components/ui/badge";

// import { Button } from "@/components/ui/button";

// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import ListingImageCarousel from "./listing-image-carousel";
// import DeleteListingButton from "./delete-listing-button";
// import ListingDescription from "./listing-description";

// interface ListingCardProps {
//   listing: any;
//   showDelete?: boolean;
// }

// export default function ListingCard({
//   listing,
//   showDelete = false,
// }: ListingCardProps) {
//   return (
//     // <Card className="overflow-hidden rounded-3xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
//     <Card className="overflow-hidden rounded-3xl border">
//       {/* IMAGE SECTION */}
//       <div className="relative w-full">
//         <ListingImageCarousel
//           images={listing.images}
//           title={listing.title}
//           className="aspect-[16/10]" // Slimmer image height profile
//         />
//         <div className="absolute left-4 top-4 z-10">
//           <Badge>{listing.category}</Badge>
//         </div>
//       </div>

//       <CardContent className="p-5">
//         {/* PRICE */}
//         <div className="flex items-baseline gap-1">
//           <span className="text-xl font-bold tracking-tight">
//             ₦{listing.price.toLocaleString()}
//             <span className="text-[13px] text-muted-foreground">
//               /{listing.duration === "year" ? "yr" : "mo"}
//             </span>
//           </span>
//         </div>

//         {/* TITLE */}
//         <h2 className="mt-3 text-xl font-semibold line-clamp-2">
//           {/* {listing.title} */}
//           <Link href={`/listings/${listing._id}`}>{listing.title}</Link>
//         </h2>

//         {/* LOCATION */}
//         <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
//           <MapPin className="h-4 w-4" />

//           <span className="line-clamp-1">{listing.location}</span>
//         </div>

//         <Button asChild className="mt-4 w-full">
//           <Link href={`/listings/${listing._id}`}>View Details</Link>
//         </Button>

//         {/* FOOTER (Pushed to the bottom cleanly via mt-auto) */}
//         <div className="mt-4 flex items-center justify-between border-t pt-3">
//           <Link
//             href={`/profile/${listing.createdBy?.username}`}
//             className="flex items-center gap-2 group"
//           >
//             <Avatar className="h-6 w-6 border">
//               <AvatarImage
//                 src={listing.createdBy?.avatar || ""}
//                 alt={listing.createdBy?.username}
//               />
//               <AvatarFallback className="text-[10px]">
//                 {listing.createdBy?.username?.charAt(0).toUpperCase()}
//               </AvatarFallback>
//             </Avatar>

//             <div className="text-[14px]">
//               <span className="text-muted-foreground">By </span>
//               <span className="font-medium text-card-foreground">
//                 @{listing.createdBy?.username}
//               </span>
//             </div>
//           </Link>

//           {showDelete && (
//             <div className="shrink-0">
//               <DeleteListingButton listingId={listing._id.toString()} />
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// import Link from "next/link";
// import { MapPin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ListingImageCarousel from "./listing-image-carousel";
// import DeleteListingButton from "./delete-listing-button";

// interface ListingCardProps {
//   listing: any;
//   showDelete?: boolean;
// }

// export default function ListingCard({
//   listing,
//   showDelete = false,
// }: ListingCardProps) {
//   return (
//     <Card className="flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-md h-full">
//       {/* IMAGE SECTION */}
//       <div className="relative w-full">
//         <ListingImageCarousel
//           images={listing.images}
//           title={listing.title}
//           className="aspect-[16/10]" // Slimmer image height profile
//         />
//         <div className="absolute left-3 top-3 z-10">
//           <Badge className="bg-white/90 text-black backdrop-blur-sm hover:bg-white text-[10px] px-2 py-0.5 rounded-md font-medium border-none shadow-sm">
//             {listing.category}
//           </Badge>
//         </div>
//       </div>

//       {/* BODY CONTENT */}
//       <CardContent className="flex flex-1 flex-col p-4">
//         {/* DETAILS SECTION */}
//         <div className="flex-1">
//           {/* PRICE */}
//           <div className="flex items-baseline gap-1">
//             <span className="text-lg font-bold tracking-tight">
//               ₦{listing.price.toLocaleString()}
//             </span>
//             <span className="text-[11px] text-muted-foreground">
//               /{listing.duration === "year" ? "yr" : "mo"}
//             </span>
//           </div>

//           {/* TITLE */}
//           <h2 className="mt-1 text-sm font-semibold tracking-tight text-card-foreground line-clamp-1 hover:underline">
//             <Link href={`/listings/${listing._id}`}>{listing.title}</Link>
//           </h2>

//           {/* LOCATION */}
//           <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
//             <MapPin className="h-3.5 w-3.5 shrink-0" />
//             <span className="line-clamp-1">{listing.location}</span>
//           </div>
//         </div>

//         {/* VIEW DETAILS BUTTON */}
//         <Button asChild size="sm" variant="secondary" className="mt-4 w-full h-8 text-xs font-medium rounded-lg">
//           <Link href={`/listings/${listing._id}`}>View Details</Link>
//         </Button>

//         {/* FOOTER (Pushed to the bottom cleanly via mt-auto) */}
//         <div className="mt-4 flex items-center justify-between border-t pt-3">
//           <Link
//             href={`/profile/${listing.createdBy?.username}`}
//             className="flex items-center gap-2 group"
//           >
//             <Avatar className="h-6 w-6 border">
//               <AvatarImage
//                 src={listing.createdBy?.avatar || ""}
//                 alt={listing.createdBy?.username}
//               />
//               <AvatarFallback className="text-[10px]">
//                 {listing.createdBy?.username?.charAt(0).toUpperCase()}
//               </AvatarFallback>
//             </Avatar>

//             <div className="text-[11px]">
//               <span className="text-muted-foreground">By </span>
//               <span className="font-medium text-card-foreground group-hover:underline">
//                 @{listing.createdBy?.username}
//               </span>
//             </div>
//           </Link>

//           {showDelete && (
//             <div className="shrink-0">
//               <DeleteListingButton listingId={listing._id.toString()} />
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
