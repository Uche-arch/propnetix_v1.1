"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Building2, 
  LayoutDashboard, 
  PlusCircle, 
  FileQuestion, 
  ClipboardList,
  LogIn
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FloatingDockProps {
  isLoggedIn: boolean; // Pass your auth state from layout or session provider
}

export default function FloatingDock({ isLoggedIn }: FloatingDockProps) {
  const pathname = usePathname();

 // Define Navigation links based on Auth State
const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "All Listings", href: "/listings", icon: Building2 }, // Elegant property building icon
  { label: "All Requests", href: "/requests", icon: ClipboardList }, // List tracking icon
  
  // Show Dashboard, New Listing, & Request Property only if logged in
  ...(isLoggedIn
    ? [
        { label: "Request Property", href: "/request-property", icon: FileQuestion }, // Inquiry/Request icon
        { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "Create Listing", href: "/dashboard/create", icon: PlusCircle },
      ]
    : [
        { label: "Sign In", href: "/auth", icon: LogIn }, // Replaced User with a clean login icon
      ]),
];

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center items-center z-[99] pointer-events-none">
      <TooltipProvider delayDuration={100}>
        <nav className="pointer-events-auto flex items-center gap-2 bg-background/70 dark:bg-zinc-900/70 backdrop-blur-xl px-4 py-2.5 rounded-full border border-neutral-200/50 dark:border-zinc-800/50 shadow-2xl transition-all duration-300 hover:border-neutral-300 dark:hover:border-zinc-700">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative p-3 rounded-full transition-all duration-200 flex items-center justify-center group outline-none",
                      isActive 
                        ? "bg-primary text-primary-foreground scale-105 shadow-md" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    
                    {/* Tiny active dot indicator beneath inactive icons on hover */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-foreground" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  sideOffset={10} 
                  className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 font-medium text-xs rounded-lg px-2.5 py-1 border-none shadow-lg"
                >
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </TooltipProvider>
    </div>
  );
}