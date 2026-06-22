// "use client";

// import { closeRequest } from "@/actions/request-actions";

// export default function CloseRequestButton({
//   requestId,
// }: {
//   requestId: string;
// }) {
//   return (
//     <button
//       onClick={() =>
//         closeRequest(requestId)
//       }
//       className="rounded-xl border px-4 py-2 text-sm"
//     >
//       Close Request
//     </button>
//   );
// }

"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";

import { closeRequest } from "@/actions/request-actions";

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

export default function CloseRequestButton({
  requestId,
}: {
  requestId: string;
}) {
  const [isPending, startTransition] =
    useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          Close
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Close this request?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This request will no longer appear in the
            public property requests list.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() =>
              startTransition(() =>
                closeRequest(requestId)
              )
            }
            className="bg-red-600 hover:bg-red-700"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Closing...
              </>
            ) : (
              "Close Request"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}