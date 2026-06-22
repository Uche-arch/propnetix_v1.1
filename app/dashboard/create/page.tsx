// import CreateListingForm from "@/components/create-listing-form";

// export default function CreateListingPage() {
//   return (
//     <main className="fixed inset-0 h-screen w-screen bg-background overflow-hidden">
//       {/* The wrapper inside handles the scrolling, stopping exactly 96px (pb-24) from the bottom of the viewport */}
//       <div className="h-full w-full overflow-y-auto pb-24">
//         <CreateListingForm />
//       </div>
//     </main>
//   );
// }


// dashboard/create/page.tsx
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CreateListingForm from "@/components/create-listing-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Listing",
  description: "Create a new property listing on PropNetix.",
  robots: {
    index: false,
    follow: false,
  },
};


// 1. Make this function async so we can check the server session
export default async function CreateListingPage() {
  // 2. Grab the session validation from Kinde
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  // 3. Kick them out if they aren't logged in
  if (!authenticated) {
    redirect("/auth"); // Or redirect("/api/auth/login") to push directly to signin
  }

  return (
    <main className="fixed inset-0 h-screen w-screen bg-background overflow-hidden">
      {/* The wrapper inside handles the scrolling, stopping exactly 96px (pb-24) from the bottom of the viewport */}
      <div className="h-full w-full overflow-y-auto pb-24">
        <CreateListingForm />
      </div>
    </main>
  );
}