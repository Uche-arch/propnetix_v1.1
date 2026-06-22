import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingDock from "@/components/floating-dock";
import Script from "next/script";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://propnetix.com"),

  title: {
    default: "PropNetix | Find Properties Across Nigeria",
    template: "%s | PropNetix",
  },

  description:
    "Discover houses, apartments, land, and commercial properties across Nigeria. Browse verified listings, connect with property owners, and find your next home on PropNetix.",

  keywords: [
    "Nigeria real estate",
    "property listings Nigeria",
    "houses for rent",
    "houses for sale",
    "apartments in Lagos",
    "land for sale Nigeria",
    "real estate marketplace",
    "PropNetix",
  ],

  authors: [{ name: "PropNetix" }],

  creator: "PropNetix",

  publisher: "PropNetix",

  robots: {
    index: true,
    follow: true,
  },

  // openGraph: {
  //   title: "PropNetix | Find Properties Across Nigeria",
  //   description:
  //     "Browse verified property listings across Nigeria.",
  //   url: "https://propnetix.com",
  //   siteName: "PropNetix",
  //   locale: "en_NG",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "PropNetix",
  //     },
  //   ],
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "PropNetix",
  //   description:
  //     "Browse verified property listings across Nigeria.",
  //   images: ["/og-image.jpg"],
  // },

  openGraph: {
    title: "PropNetix | Find Properties Across Nigeria",
    description: "Browse verified property listings across Nigeria.",
    url: "https://propnetix.com",
    siteName: "PropNetix",
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "PropNetix",
    description: "Browse verified property listings across Nigeria.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1. Get auth helper functions from Kinde
  const { isAuthenticated } = getKindeServerSession();

  // 2. Check if user session cookie exists securely on the server
  const authenticated = await isAuthenticated();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col pb-24">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster richColors />
        {/* 3. Drop the Floating Dock here globally, injecting the authentication boolean */}
        {/* <FloatingDock isLoggedIn={authenticated} /> */}
        <FloatingDock isLoggedIn={authenticated ?? false} />
        {/* Load Paystack Inline Script globally */}
        {/* <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}
