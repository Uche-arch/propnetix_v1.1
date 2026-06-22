// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { Card, CardContent } from "@/components/ui/card";

// interface ProfileCardProps {
//   name: string;
//   username: string;
//   email?: string;
//   avatar?: string;
//   listingCount: number;
//   publicView?: boolean;
// }

// export default function ProfileCard({
//   name,
//   username,
//   email,
//   avatar,
//   listingCount,
//   publicView = false,
// }: ProfileCardProps) {
//   return (
//     <Card className="overflow-hidden">
//       <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />

//       <CardContent className="relative">
//         <Avatar className="-mt-14 h-24 w-24 border-4 border-background">
//           <AvatarImage src={avatar || ""} />

//           <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
//         </Avatar>

//         <div className="mt-4">
//           <h1 className="text-3xl font-bold">{name}</h1>

//           <p className="text-muted-foreground">@{username}</p>

//           {!publicView && email && (
//             <p className="mt-2 text-sm text-muted-foreground">{email}</p>
//           )}
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <div className="rounded-xl border p-4">
//             <p className="text-sm text-muted-foreground">Listings</p>

//             <p className="text-2xl font-bold">{listingCount}</p>
//           </div>

//           <div className="rounded-xl border p-4">
//             <p className="text-sm text-muted-foreground">Member</p>

//             <p className="text-lg font-semibold">Realtor</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

interface ProfileCardProps {
  name: string;
  username: string;
  email?: string;
  phone?: string;
  avatar?: string;
  listingCount: number;
  publicView?: boolean;
}

export default function ProfileCard({
  name,
  username,
  email,
  phone,
  avatar,
  listingCount,
  publicView = false,
}: ProfileCardProps) {
  return (
    <Card className="overflow-hidden bg-card shadow-xs rounded-lg pt-0">
      {/* Premium Cover Banner */}
      <div className="h-33 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

      <CardContent className="relative px-6 pb-6">
        {/* Profile Avatar Alignment */}
        <Avatar className="-mt-12 h-24 w-24 border-4 border-background shadow-sm">
          <AvatarImage src={avatar || ""} alt={name} />
          <AvatarFallback className="text-xl font-bold">
            {name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* User Identifiers */}
        <div className="mt-4 space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {name}
          </h1>
          <p className="text-sm text-muted-foreground">@{username}</p>

          {!publicView && email && (
            <p className="mt-1 text-sm text-muted-foreground">{email}</p>
          )}
        </div>

        {/* Stats Section with Borders */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-y py-4 my-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Listings
            </p>
            <p className="text-xl font-bold mt-0.5">{listingCount}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Role
            </p>
            <p className="text-sm font-semibold mt-1 text-primary inline-flex items-center">
              Verified Agent
              <CheckCircle2 className="h-4 w-4 fill-primary text-background" />
            </p>
          </div>
        </div>

        {/* Dynamic Action Buttons for Call/WhatsApp Contacts */}
        {publicView && phone && (
          <div className="flex flex-wrap gap-2.5 mt-6 max-w-md">
            <Button
              variant="outline"
              size="sm"
              className="h-10 rounded-xl text-xs font-semibold shadow-sm flex-1 min-w-[120px] cursor-pointer"
              asChild
            >
              <a href={`tel:${phone}`}>
                <Phone className="mr-1.5 h-3.5 w-3.5 text-muted-foreground" />
                Call Agent
              </a>
            </Button>

            <Button
              size="sm"
              className="h-10 rounded-xl text-xs font-semibold shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 flex-1 min-w-[120px] cursor-pointer"
              asChild
            >
              <a
                href={`https://wa.me/${phone.replace(/^0/, "234")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
