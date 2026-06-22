// import Link from "next/link";

// import { Phone } from "lucide-react";

// import { connectDB } from "@/lib/mongodb";

// import Request from "@/models/Request";
// import CloseRequestButton from "@/components/close-request-button";
// import ListingGrid from "@/components/listing-grid";
// import EmptyRequests from "@/components/empty-request";
// import ListingDescription from "@/components/listing-description";

// export default async function RequestsPage() {
//   await connectDB();

//   const requests = await Request.find({
//     status: "open",
//   }).sort({
//     createdAt: -1,
//   });

//   return (
//     <main className="min-h-screen bg-muted/30 py-10">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-4xl font-bold">Property Requests</h1>

//             <p className="mt-2 text-muted-foreground">
//               Browse active requests from people looking for properties.
//             </p>
//           </div>

//           <div className="rounded-xl border bg-background px-4 py-3">
//             <p className="text-sm text-muted-foreground">Active Requests</p>

//             <p className="text-2xl font-bold">{requests.length}</p>
//           </div>
//         </div>

//         {requests.length === 0 ? (
//           <EmptyRequests />
//         ) : (
//           <ListingGrid>
//             {requests.map((request: any) => (
//               <div
//                 key={request._id}
//                 className="group overflow-hidden rounded-3xl border bg-background"
//               >
//                 <div className="border-b p-5">
//                   <div className="flex items-center justify-between">
//                     <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
//                       {request.category}
//                     </span>

//                     <span className="rounded-full border px-3 py-1 text-xs">
//                       Open
//                     </span>
//                   </div>

//                   <h2 className="mt-4 text-xl font-bold">
//                     Looking in {request.location}
//                   </h2>

//                   {/* <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
//                     {request.description}
//                   </p> */}
//                   <div className="mt-2">
//                     <ListingDescription text={request.description} />
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <div className="mb-5 rounded-2xl bg-muted p-4">
//                     <p className="text-sm text-muted-foreground">Budget</p>

//                     <p className="text-2xl font-bold">
//                       ₦{request.budget.toLocaleString()}
//                     </p>
//                   </div>

//                   <div className="mb-5">
//                     <p className="text-sm text-muted-foreground">Requester</p>

//                     <p className="font-medium">{request.name}</p>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     <Link
//                       href={`tel:${request.phone}`}
//                       className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium"
//                     >
//                       <Phone className="mr-2 h-4 w-4" />
//                       Call
//                     </Link>

//                     <Link
//                       href={`https://wa.me/${request.phone}`}
//                       target="_blank"
//                       className="inline-flex h-10 items-center justify-center rounded-xl bg-green-600 px-4 text-sm font-medium text-white"
//                     >
//                       WhatsApp
//                     </Link>

//                     <CloseRequestButton requestId={request._id.toString()} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </ListingGrid>
//         )}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { Phone } from "lucide-react";
// import { connectDB } from "@/lib/mongodb";
// import Request from "@/models/Request";
// import CloseRequestButton from "@/components/close-request-button";
// import ListingGrid from "@/components/listing-grid";
// import EmptyRequests from "@/components/empty-request";
// import ListingDescription from "@/components/listing-description";
// import { Badge } from "@/components/ui/badge";

// export default async function RequestsPage() {
//   await connectDB();

//   const requests = await Request.find({
//     status: "open",
//   }).sort({
//     createdAt: -1,
//   });

//   return (
//     <main className="min-h-screen bg-background antialiased py-8 sm:py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* HEADER SECTION */}
//         <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
//               Property Requests
//             </h1>
//             <p className="mt-1 text-sm text-muted-foreground">
//               Browse active requests from people looking for properties.
//             </p>
//           </div>

//           <div className="rounded-xl border bg-card px-4 py-2.5 shadow-sm inline-flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-0 sm:min-w-[120px]">
//             <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Active</span>
//             <span className="text-xl font-bold text-foreground leading-none sm:mt-1">{requests.length}</span>
//           </div>
//         </div>

//         {/* CARDS GRID MAPPING */}
//         {requests.length === 0 ? (
//           <EmptyRequests />
//         ) : (
//           <ListingGrid>
//             {requests.map((request: any) => (
//               <div
//                 key={request._id}
//                 className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-2xl shadow-sm transition-all hover:shadow-md"
//               >
//                 {/* TOP HALF: CATEGORY & AREA INFO */}
//                 <div className="border-b p-4 pb-3.5">
//                   <div className="flex items-center justify-between">
//                     <Badge variant="secondary" className="text-[10px] px-2 py-0.5 rounded-md font-medium">
//                       {request.category}
//                     </Badge>
//                     <span className="inline-flex items-center text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2 py-0.5 rounded-md">
//                       Active
//                     </span>
//                   </div>

//                   <h2 className="mt-2.5 text-base font-bold tracking-tight text-card-foreground">
//                     Looking in {request.location}
//                   </h2>

//                   <div className="mt-1.5">
//                     <ListingDescription text={request.description} />
//                   </div>
//                 </div>

//                 {/* BOTTOM HALF: METADATA & ACTIONS CONTAINER */}
//                 <div className="flex flex-1 flex-col p-4 pt-3.5">
//                   {/* BUDGET SECTION */}
//                   <div className="flex-1">
//                     <div className="rounded-xl bg-muted/60 px-3.5 py-2.5 border border-muted/30">
//                       <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Budget</span>
//                       <p className="text-lg font-bold tracking-tight text-foreground mt-0.5">
//                         ₦{request.budget.toLocaleString()}
//                       </p>
//                     </div>

//                     {/* USER INFO BLOCK */}
//                     <div className="mt-3.5 px-0.5">
//                       <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">Requested by</span>
//                       <span className="text-sm font-semibold text-card-foreground mt-0.5 block">{request.name}</span>
//                     </div>
//                   </div>

//                   {/* ACTION BUTTON TRAY */}
//                   <div className="mt-5 flex items-center gap-2 pt-3 border-t">
//                     <Link
//                       href={`tel:${request.phone}`}
//                       className="flex-1 inline-flex h-9 items-center justify-center rounded-lg border border-input bg-background text-xs font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
//                     >
//                       <Phone className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
//                       Call
//                     </Link>

//                     <Link
//                       href={`https://wa.me/${request.phone}`}
//                       target="_blank"
//                       className="flex-1 inline-flex h-9 items-center justify-center rounded-lg bg-emerald-600 px-3 text-xs font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors"
//                     >
//                       WhatsApp
//                     </Link>

//                     <div className="shrink-0">
//                       <CloseRequestButton requestId={request._id.toString()} />
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </ListingGrid>
//         )}
//       </div>
//     </main>
//   );
// }

// import Link from "next/link";
// import { Phone, MessageCircle } from "lucide-react";
// import { connectDB } from "@/lib/mongodb";
// import Request from "@/models/Request";
// import CloseRequestButton from "@/components/close-request-button";
// import ListingGrid from "@/components/listing-grid";
// import EmptyRequests from "@/components/empty-request";
// import ListingDescription from "@/components/listing-description";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// export default async function RequestsPage() {
//   await connectDB();

//   const requests = await Request.find({
//     status: "open",
//   }).sort({
//     createdAt: -1,
//   });

//   return (
//     <main className="min-h-screen bg-background antialiased py-8 sm:py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* HEADER SECTION */}
//         <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
//               Property Requests
//             </h1>
//             <p className="mt-1 text-sm text-muted-foreground">
//               Browse active requests from people looking for properties.
//             </p>
//           </div>

//           <div className="rounded-xl border bg-card px-4 py-2.5 shadow-sm inline-flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-0 sm:min-w-[120px]">
//             <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
//               Active
//             </span>
//             <span className="text-xl font-bold text-foreground leading-none sm:mt-1">
//               {requests.length}
//             </span>
//           </div>
//         </div>

//         {/* CARDS GRID MAPPING */}
//         {requests.length === 0 ? (
//           <EmptyRequests />
//         ) : (
//           <ListingGrid>
//             {requests.map((request: any) => (
//               <div
//                 key={request._id}
//                 className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-2xl shadow-sm transition-all hover:shadow-md p-4"
//               >
//                 {/* TOP HALF: CATEGORY & AREA INFO (Takes natural text height bounds) */}
//                 <div className="w-full">
//                   <div className="flex items-center justify-between">
//                     <Badge
//                       variant="secondary"
//                       className="text-[10px] px-2 py-0.5 rounded-md font-medium"
//                     >
//                       {request.category}
//                     </Badge>
//                     <span className="inline-flex items-center text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2 py-0.5 rounded-md">
//                       Active
//                     </span>
//                   </div>

//                   <h2 className="mt-2.5 text-base font-bold tracking-tight text-card-foreground">
//                     Looking in {request.location}
//                   </h2>

//                   <div className="mt-1.5">
//                     <ListingDescription text={request.description} />
//                   </div>
//                 </div>

//                 {/* BOTTOM HALF: PUSHED TO THE ABSOLUTE BOTTOM VIA mt-auto */}
//                 {/* Everything from this point down aligns flawlessly across cards */}
//                 <div className="mt-auto pt-4 space-y-3.5 border-t">
//                   {/* BUDGET SECTION */}
//                   <div className="rounded-xl bg-muted/60 px-3.5 py-2.5 border border-muted/30">
//                     <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
//                       Budget
//                     </span>
//                     <p className="text-lg font-bold tracking-tight text-foreground mt-0.5">
//                       ₦{request.budget.toLocaleString()}
//                     </p>
//                   </div>

//                   {/* USER INFO BLOCK */}
//                   <div className="px-0.5">
//                     <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">
//                       Requested by
//                     </span>
//                     <span className="text-sm font-semibold text-card-foreground mt-0.5 block">
//                       {request.name}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between pt-3 border-t w-full">
//                     {/* LEFT SIDE: Clean, icon-only communication actions */}
//                     <div className="flex items-center gap-1.5">
//                       {/* Call Button */}
//                       <Button
//                         asChild
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8 rounded-lg"
//                       >
//                         <a href={`tel:${request.phone}`}>
//                           <Phone className="h-3.5 w-3.5" />
//                         </a>
//                       </Button>

//                       {/* WhatsApp Button */}
//                       <Button
//                         asChild
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-400 transition-colors"
//                       >
//                         <a
//                           href={`https://wa.me/${request.phone.replace(/^0/, "234")}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {/* Make sure to import MessageCircle from "lucide-react" if not already done */}
//                           <MessageCircle className="h-3.5 w-3.5" />
//                         </a>
//                       </Button>
//                     </div>

//                     {/* RIGHT SIDE: Pushed cleanly to the opposite edge */}
//                     <div className="shrink-0">
//                       <CloseRequestButton requestId={request._id.toString()} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </ListingGrid>
//         )}
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { PlusCircle, Home } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Request from "@/models/Request";
import CloseRequestButton from "@/components/close-request-button";
import ListingGrid from "@/components/listing-grid";
import EmptyRequests from "@/components/empty-request";
import ListingDescription from "@/components/listing-description";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata = {
  title: "Property Requests",
  description:
    "Browse active property requests from buyers and tenants across Nigeria.",
};

export default async function RequestsPage() {
  await connectDB();

  // const requests = await Request.find({
  //   status: "open",
  // }).sort({
  //   createdAt: -1,
  // });

  const { isAuthenticated } = getKindeServerSession();

  const authenticated = await isAuthenticated();

  // Removed database-level sorting to apply random array sorting instead
  const databaseRequests = await Request.find({
    status: "open",
  });

  // Randomize the requests array order in-memory
  const requests = [...databaseRequests].sort(() => Math.random() - 0.5);

  return (
    <main className="min-h-screen bg-background antialiased py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6 md:space-y-8">
        {/* PREMIUM HEADER BLOCK WITH SLICK NAVIGATION LINKS */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between border-b pb-6">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Property Requests
              </h1>
              {/* Refactored Active Count Badge */}
              <span className="inline-flex items-center justify-center bg-muted font-bold text-xs text-muted-foreground px-2.5 py-1 rounded-full border shadow-sm">
                {requests.length} Active
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Browse active requests from people looking for properties.
            </p>
          </div>

          {/* Action Link Row to match Listings Layout */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl h-9 text-xs font-semibold shadow-sm cursor-pointer"
              asChild
            >
              <Link href="/listings">
                <Home className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
                View Catalogue
              </Link>
            </Button>

            <Button
              size="sm"
              className="rounded-xl h-9 text-xs font-semibold shadow-sm cursor-pointer"
              asChild
            >
              <Link href="/request-property">
                <PlusCircle className="mr-1.5 h-3.5 w-3.5" />
                Submit Request
              </Link>
            </Button>
          </div>
        </div>

        {/* CARDS GRID MAPPING */}
        {requests.length === 0 ? (
          <EmptyRequests />
        ) : (
          <ListingGrid>
            {requests.map((request: any) => (
              /* The inner card design remains exactly as you wrote it */
              <div
                key={request._id}
                className="flex flex-col overflow-hidden h-full bg-card border border-muted/80 rounded-2xl shadow-sm transition-all hover:shadow-md p-4"
              >
                {/* TOP HALF: CATEGORY & AREA INFO */}
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                    >
                      {request.category}
                    </Badge>
                    <span className="inline-flex items-center text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2 py-0.5 rounded-md">
                      Active
                    </span>
                  </div>

                  <h2 className="mt-2.5 text-base font-bold tracking-tight text-card-foreground">
                    Looking in {request.location}
                  </h2>

                  <div className="mt-1.5">
                    <ListingDescription text={request.description} />
                  </div>
                </div>

                {/* BOTTOM HALF: PUSHED TO THE ABSOLUTE BOTTOM VIA mt-auto */}
                <div className="mt-auto pt-4 space-y-3.5 border-t">
                  {/* BUDGET SECTION */}
                  <div className="rounded-xl bg-muted/60 px-3.5 py-2.5 border border-muted/30">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      Budget
                    </span>
                    <p className="text-lg font-bold tracking-tight text-foreground mt-0.5">
                      ₦{request.budget.toLocaleString()}
                    </p>
                  </div>

                  {/* USER INFO BLOCK */}
                  <div className="px-0.5">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">
                      Requested by
                    </span>
                    <span className="text-sm font-semibold text-card-foreground mt-0.5 block">
                      {request.name}
                    </span>
                  </div>

                  {/* ACTION SECTION */}
                  <div className="flex items-center justify-between pt-3 border-t w-full">
                    {/* LEFT SIDE: Communication Actions */}
                    <div className="flex items-center gap-1.5">
                      {/* Call Button */}
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-lg"
                      >
                        <a href={`tel:${request.phone}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </a>
                      </Button>

                      {/* WhatsApp Button */}
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-400 transition-colors"
                      >
                        <a
                          href={`https://wa.me/${request.phone.replace(/^0/, "234")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                          </svg>
                        </a>
                      </Button>
                    </div>

                    {/* RIGHT SIDE: Close Action Button */}
                    {/* <div className="shrink-0">
                      <CloseRequestButton requestId={request._id.toString()} />
                    </div> */}
                    {authenticated && (
                      <div className="shrink-0">
                        <CloseRequestButton
                          requestId={request._id.toString()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ListingGrid>
        )}
      </div>
    </main>
  );
}
