// components/logout-button.tsx

"use client";

import { LogOut } from "lucide-react";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

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

export default function LogoutButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline" className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button> */}
        <Button variant="destructive" className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout of your account?</AlertDialogTitle>

          <AlertDialogDescription>
            You'll be signed out of PropNetix and will need to log in again to
            access your dashboard and manage listings.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Stay Logged In</AlertDialogCancel>

          {/* <AlertDialogAction asChild>
            <LogoutLink>
              Logout
            </LogoutLink>
          </AlertDialogAction> */}
          <AlertDialogAction
            asChild
            // className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            className="bg-red-600 hover:bg-red-700"
          >
            <LogoutLink>Logout</LogoutLink>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
