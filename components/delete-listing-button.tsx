// "use client";

// import { Trash2 } from "lucide-react";

// import { deleteListing } from "@/actions/listing-actions";

// export default function DeleteListingButton({
//   listingId,
// }: {
//   listingId: string;
// }) {
//   return (
//     <button
//       onClick={() => {
//         if (
//           confirm(
//             "Delete this listing?"
//           )
//         ) {
//           deleteListing(listingId);
//         }
//       }}
//       className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-600"
//     >
//       <Trash2 className="h-4 w-4" />
//       Delete
//     </button>
//   );
// }

"use client";

import { useTransition } from "react";
import { useState } from "react";

import { Trash2, Loader2 } from "lucide-react";

import { deleteListing } from "@/actions/listing-actions";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

export default function DeleteListingButton({
  listingId,
}: {
  listingId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [showDeletingDialog, setShowDeletingDialog] = useState(false);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className=" border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="" />
            {/* Delete Listing */}
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this listing?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. The property listing will be
              permanently removed from PropNetix and will no longer be visible
              to users.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              // onClick={() => startTransition(() => deleteListing(listingId))}
              onClick={() => {
                setShowDeletingDialog(true);

                startTransition(async () => {
                  await deleteListing(listingId);
                });
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              {/* {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : ( */}
              Delete Listing
              {/* )} */}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={showDeletingDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="sr-only">Deleting Listing</DialogTitle>

          <div className="flex flex-col items-center py-6 text-center">
            <Loader2 className="h-10 w-10 animate-spin" />

            <h3 className="mt-4 text-lg font-semibold">Deleting Listing</h3>

            {/* <p className="mt-2 text-sm text-muted-foreground">
              Please wait while we remove this property.
            </p> */}
            {/* 🟢 Swapped <p> for <DialogDescription> to satisfy Radix/Shadcn accessibility requirements */}
            <DialogDescription className="mt-2 text-sm text-muted-foreground">
              Please wait while we remove this property.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
