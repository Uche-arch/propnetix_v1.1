// "use client";

// import { useState, useTransition } from "react";

// import { Phone, Loader2 } from "lucide-react";

// import { updatePhone } from "@/actions/user-actions";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function UpdatePhoneForm({
//   currentPhone,
// }: {
//   currentPhone?: string;
// }) {
//   const [phone, setPhone] = useState(currentPhone || "");

//   const [isPending, startTransition] =
//     useTransition();

//   return (
//     <div className="rounded-xl border p-4">
//       <div className="flex items-center gap-2 mb-3">
//         <Phone className="h-4 w-4" />

//         <h3 className="font-semibold">
//           Contact Number
//         </h3>
//       </div>

//       <Input
//         placeholder="08012345678"
//         value={phone}
//         onChange={(e) =>
//           setPhone(e.target.value)
//         }
//       />

//       <Button
//         className="mt-3"
//         disabled={isPending}
//         onClick={() =>
//           startTransition(async () => {
//             await updatePhone(phone);
//           })
//         }
//       >
//         {isPending ? (
//           <>
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//             Saving...
//           </>
//         ) : (
//           "Save Number"
//         )}
//       </Button>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Settings2, Loader2 } from "lucide-react";
// import { toast } from "sonner"; // Or your preferred toast notification framework

// interface UpdatePhoneFormProps {
//   currentPhone?: string;
// }

// export default function UpdatePhoneForm({ currentPhone = "" }: UpdatePhoneFormProps) {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [phone, setPhone] = useState(currentPhone);
//   const [loading, setLoading] = useState(false);

//   // The save button becomes active ONLY when value changed from database string representation
//   const isEdited = phone.trim() !== currentPhone.trim();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isEdited) return;

//     setLoading(true);
//     try {
//       const res = await fetch("/api/user/update-phone", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone: phone.trim() }),
//       });

//       if (!res.ok) throw new Error("Failed to save changes");

//       toast.success("Contact information saved!");
//       setOpen(false);
//       router.refresh();
//     } catch (err) {
//       toast.error("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline" size="sm" className="rounded-xl h-9 text-xs font-medium shrink-0">
//           <Settings2 className="mr-1.5 h-3.5 w-3.5" />
//           {currentPhone ? "Edit Contact Info" : "Add Contact Info"}
//         </Button>
//       </DialogTrigger>
      
//       <DialogContent className="sm:max-w-[420px] rounded-2xl p-5">
//         <DialogHeader>
//           <DialogTitle className="text-lg font-bold tracking-tight">
//             Contact Information
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-2">
//           <div className="space-y-1.5">
//             <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
//               Phone Number
//             </Label>
//             <Input
//               id="phone"
//               type="tel"
//               placeholder="e.g. 08012345678"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="h-10 rounded-xl bg-transparent border-muted focus-visible:ring-1 focus-visible:ring-muted-foreground/30 text-sm"
//               disabled={loading}
//             />
//           </div>

//           <DialogFooter className="pt-2">
//             {/* Save Button toggles state safely depending on matching data condition */}
//             <Button
//               type="submit"
//               disabled={!isEdited || loading}
//               className="w-full sm:w-auto h-10 rounded-xl px-5 font-medium shadow-sm transition-opacity"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving Changes
//                 </>
//               ) : (
//                 "Save Changes"
//               )}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import { useState, useTransition, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings2, Loader2, Phone } from "lucide-react";
import { updatePhone } from "@/actions/user-actions";

export default function UpdatePhoneForm({
  currentPhone,
}: {
  currentPhone?: string;
}) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState(currentPhone || "");
  const [isPending, startTransition] = useTransition();

  // Reset the input field value to match the database value whenever the modal opens or updates
  useEffect(() => {
    if (open) {
      setPhone(currentPhone || "");
    }
  }, [open, currentPhone]);

  // Safe validation check: Button turns on ONLY if value has been modified
  const isEdited = phone.trim() !== (currentPhone || "").trim();

  const handleSave = () => {
    if (!isEdited) return;

    startTransition(async () => {
      try {
        await updatePhone(phone.trim());
        setOpen(false); // Cleanly closes the modal window automatically on success
      } catch (error) {
        console.error("Failed to save phone number:", error);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-xl h-9 text-xs font-medium shrink-0 cursor-pointer">
          <Settings2 className="mr-1.5 h-3.5 w-3.5" />
          {currentPhone ? "Edit Contact Info" : "Add Contact Info"}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[420px] rounded-2xl p-5">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold tracking-tight flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" /> Contact Information
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="08012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-10 rounded-xl bg-transparent border-muted focus-visible:ring-1 focus-visible:ring-muted-foreground/30 text-sm"
              disabled={isPending}
            />
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="button"
              disabled={!isEdited || isPending}
              onClick={handleSave}
              className="w-full sm:w-auto h-10 rounded-xl px-5 font-medium shadow-sm cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}