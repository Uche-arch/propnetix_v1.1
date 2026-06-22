// import Link from "next/link";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Button } from "@/components/ui/button";

// import { Card, CardContent } from "@/components/ui/card";

// import UpdatePhoneForm from "./update-phone-form";

// interface DashboardProfileCardProps {
//   // user: {
//   //   name: string;
//   //   email: string;
//   //   username: string;
//   // };

//   user: {
//     name: string;
//     email: string;
//     username: string;
//     phone?: string;
//   };

//   avatar?: string | null;

//   listingCount: number;
// }

// export default function DashboardProfileCard({
//   user,
//   avatar,
//   listingCount,
// }: DashboardProfileCardProps) {
//   return (
//     <Card className="overflow-hidden border-0 shadow-md">
//       {/* Cover */}
//       <div className="h-28 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />

//       <CardContent className="relative px-6 pb-6">
//         {/* Avatar */}
//         <Avatar className="-mt-14 h-24 w-24 border-4 border-background shadow">
//           <AvatarImage src={avatar || ""} />

//           <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
//         </Avatar>

//         {/* User Info */}
//         <div className="mt-4">
//           <h2 className="text-2xl font-bold">{user.name}</h2>

//           <p className="text-muted-foreground">@{user.username}</p>

//           <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
//         </div>

//         {/* Stats */}
//         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <div className="rounded-xl border p-4">
//             <p className="text-sm text-muted-foreground">Listings</p>

//             <p className="text-2xl font-bold">{listingCount}</p>
//           </div>

//           <div className="rounded-xl border p-4">
//             <p className="text-sm text-muted-foreground">Status</p>

//             <p className="text-lg font-semibold">Active</p>
//           </div>

//           <div className="rounded-xl border p-4">
//             <p className="text-sm text-muted-foreground">Account</p>

//             <p className="text-lg font-semibold">Verified</p>
//           </div>
//         </div>

//         <div className="mt-6">
//           <UpdatePhoneForm currentPhone={user.phone} />
//         </div>

//         {/* Actions */}
//         <div className="mt-6 flex flex-wrap gap-3">
//           <Button asChild>
//             <Link href="/dashboard/create">Create Listing</Link>
//           </Button>

//           <Button variant="outline" asChild>
//             <Link href={`/profile/${user.username}`}>View Public Profile</Link>
//           </Button>

//           <Button variant="outline" asChild>
//             <Link href="/listings">View Public Listings</Link>
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import UpdatePhoneForm from "./update-phone-form";
import { Plus, Globe, UserCheck, CheckCircle2 } from "lucide-react";

interface DashboardProfileCardProps {
  user: {
    name: string;
    email: string;
    username: string;
    phone?: string;
  };
  avatar?: string | null;
  listingCount: number;
}

export default function DashboardProfileCard({
  user,
  avatar,
  listingCount,
}: DashboardProfileCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-xs rounded-lg mt-[-15px] pt-0">
      <div className="h-33 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

      <CardContent className="relative px-6 pb-6">  
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12">
          <Avatar className="h-24 w-24 border-4 border-background shadow-sm shrink-0">
            <AvatarImage src={avatar || ""} />
            <AvatarFallback className="text-xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {/* MODAL TRIGGER MOVED RIGHT TO THE METADATA ROW */}
          <UpdatePhoneForm currentPhone={user.phone} />
        </div>

        {/* User Info */}
        <div className="mt-4 space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {user.name}
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>@{user.username}</span>
            <span className="text-muted-foreground/40">•</span>
            <span>{user.email}</span>
            {user.phone && (
              <>
                <span className="text-muted-foreground/40">•</span>
                <span className="font-medium text-foreground/80">
                  {user.phone}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-y py-4 my-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Listings
            </p>
            <p className="text-xl font-bold mt-0.5">{listingCount}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Status
            </p>
            <p className="text-sm font-semibold mt-1 text-emerald-600 inline-flex items-center gap-1">
              Active
            </p>
          </div>
          {/* <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Account</p>
            <p className="text-sm font-semibold mt-1 text-primary inline-flex items-center gap-1">
              Verified
            </p>
          </div> */}
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Account
            </p>
            <p className="text-sm font-semibold mt-1 text-primary inline-flex items-center gap-1.5">
              Verified
              <CheckCircle2 className="h-4 w-4 fill-primary text-background" />
            </p>
          </div>
        </div>

        {/* Main Action Links */}
        <div className="flex flex-wrap gap-2.5">
          <Button size="sm" className="rounded-xl shadow-sm h-9" asChild>
            <Link href="/dashboard/create">
              <Plus className="mr-1.5 h-4 w-4" /> Create Listing
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-xl h-9"
            asChild
          >
            <Link href={`/profile/${user.username}`}>
              <UserCheck className="mr-1.5 h-4 w-4" /> View Public Profile
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-xl h-9"
            asChild
          >
            <Link href="/listings">
              <Globe className="mr-1.5 h-4 w-4" /> View All Listings
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
