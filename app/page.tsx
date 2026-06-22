// app/page.tsx

import Link from "next/link";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { connectDB } from "@/lib/mongodb";
import Listing from "@/models/Listing";
import "@/models/User";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Navbar1 } from "@/components/navbar1";
import { Hero1 } from "@/components/hero1";
import { Stats8 } from "@/components/stats8";
import { Feature43 } from "@/components/feature43";
import { Cta11 } from "@/components/cta11";
// import { Testimonial9 } from "@/components/testimonial9";
import { TestimonialWrapper } from "@/components/testimonial-wrapper";
import { Faq1 } from "@/components/faq1";
import { Cta34 } from "@/components/cta34";
import { Footer2 } from "@/components/footer2";
import { Pricing4 } from "@/components/pricing4";
import { Feature166 } from "@/components/feature166";

export default async function HomePage() {
  await connectDB();

  // const listings = await Listing.aggregate([{ $sample: { size: 6 } }]);
  const listings = await Listing.find().populate("createdBy").lean();

  const randomListings = listings.sort(() => Math.random() - 0.5).slice(0, 6);

  const { isAuthenticated } = getKindeServerSession();

  const authenticated = await isAuthenticated();

  return (
    <main className="min-h-screen px-2 md:px-0">
      <Navbar1 isAuthenticated={authenticated ?? false} />
      {/* <Hero1></Hero1> */}
      <Hero1 isAuthenticated={authenticated ?? false} />
      {/* <Feature166></Feature166> */}
      <Feature166
        // title="Featured Properties"
        // description="Hand-picked properties from agents across Nigeria."
        listings={randomListings}
      />
      <Stats8></Stats8>
      {/* <Feature43></Feature43> */}
      <Feature43 isAuthenticated={authenticated ?? false} />
      {/* <Cta11></Cta11> */}
      {/* <Testimonial9></Testimonial9> */}
      <TestimonialWrapper></TestimonialWrapper>
      <Faq1></Faq1>
      {/* <Cta34></Cta34> */}
      <Footer2></Footer2>

      {/* <Pricing4></Pricing4> */}
    </main>
  );
}
