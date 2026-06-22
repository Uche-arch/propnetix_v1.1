"use client";

import dynamic from "next/dynamic";

const Testimonial9 = dynamic(
  () => import("@/components/testimonial9").then((mod) => mod.Testimonial9),
  {
    ssr: false,
  }
);

export function TestimonialWrapper() {
  return <Testimonial9></Testimonial9>;
}