"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface TestimonialBasicGridItem {
  id?: string;
  name: string;
  avatar: string;
  content: string;
  role?: string;
  username?: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface TestimonialBasicGridProps {
  heading: string;
  description: string;
  testimonials: TestimonialBasicGridItem[];
  className?: string;
}

interface Testimonial9Props extends TestimonialBasicGridProps {}
type Props = Partial<Testimonial9Props>;

const defaultProps: Testimonial9Props = {
  heading: "What people are saying",
  description:
    "Buyers, renters, and agents share their experience using PropNetix to find and list properties.",
  testimonials: [
    {
      id: "1",
      name: "Aisha Bello",
      username: "aishab",
      date: "2025-10-12",
      role: "Home Buyer",
      avatar: "https://i.pravatar.cc/150?img=47",
      content:
        "I found my apartment in Lagos within a week. The listings were accurate and I didn’t waste time visiting fake or outdated properties like on other platforms.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    // {
    //   id: "2",
    //   name: "Marcus Rodriguez",
    //   username: "marcusr",
    //   date: "2024-02-10",
    //   role: "CTO",
    //   avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar7.jpg",
    //   content:
    //     "The attention to accessibility and performance is outstanding. Our Lighthouse scores improved by 15 points across the board after we migrated, and we passed our first external accessibility audit with zero critical issues. I was skeptical at first, but the quality of the underlying markup convinced me within a week.",
    //   link: "#",
    //   icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    // },
    {
      id: "2",
      name: "Daniel Okafor",
      username: "danokafor",
      date: "2025-09-28",
      role: "Renter",
      avatar: "https://i.pravatar.cc/150?img=12",
      content:
        "PropNetix made it easy to compare prices across areas. I finally got a place within my budget without dealing with agents that overcharge.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    // {
    //   id: "4",
    //   name: "David Kim",
    //   username: "davidkim",
    //   date: "2024-02-05",
    //   role: "Tech Lead",
    //   avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar18.jpg",
    //   content:
    //     "We evaluated five UI libraries over two quarters before settling on this one. What set it apart was the balance between opinionated defaults and customization flexibility. Every component felt production-ready out of the box.",
    //   link: "#",
    //   icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/instagram-icon.svg",
    // },
    {
      id: "3",
      name: "Chinedu Martins",
      username: "chinedum",
      date: "2025-09-15",
      role: "Real Estate Agent",
      avatar: "https://i.pravatar.cc/150?img=33",
      content:
        "Since joining PropNetix, I’ve closed more deals because my listings actually reach serious buyers. The platform gives me more visibility than traditional channels.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    {
      id: "4",
      name: "Sarah Johnson",
      username: "sarahj",
      date: "2025-08-30",
      role: "Property Owner",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "I listed my apartment and got inquiries within 24 hours. The process was smooth and I didn’t need to rely on middlemen.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    {
      id: "5",
      name: "Mohammed Yusuf",
      username: "moyusuf",
      date: "2025-07-19",
      role: "First-time Buyer",
      avatar: "https://i.pravatar.cc/150?img=60",
      content:
        "As a first-time buyer, I was nervous about scams. PropNetix made everything transparent — I could actually verify listings before scheduling visits.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    {
      id: "6",
      name: "Grace Okonkwo",
      username: "graceo",
      date: "2025-06-25",
      role: "Renter",
      avatar: "https://i.pravatar.cc/150?img=32",
      content:
        "I moved into a new apartment within days. The search filters made it easy to find something within my budget and preferred location.",
      link: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25684.png",
    },
    {
      id: "9",
      name: "Henry Garcia",
      username: "henryg",
      date: "2023-08-25",
      role: "Product Lead",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar20.jpg",
      content:
        "We rebuilt our entire onboarding flow using these blocks and launched it in under three weeks. The animation primitives gave us polished micro-interactions without pulling in a separate motion library, and the responsive behavior just worked on every breakpoint we tested. Our activation rate is up 20% since the redesign, and I'm confident the UI quality played a big part in that.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/instagram-icon.svg",
    },
  ],
};

const Testimonial9 = (props: Props) => {
  const { heading, description, testimonials, className } = {
    ...defaultProps,
    ...props,
  };

  const list = testimonials.slice(0, 6);

  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32 justify-center flex", className)}
      id="testimonial"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="mt-14 w-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {list.map((testimonial, idx) => {
                return (
                  <Card key={idx} className="p-5">
                    <div className="flex justify-between">
                      <div className="flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      {testimonial.icon ? (
                        <a href={testimonial.link ?? "#"}>
                          <img
                            alt="Testimonial source"
                            src={testimonial.icon}
                            className="size-4 dark:invert"
                          />
                        </a>
                      ) : null}
                    </div>
                    <div className="mt-2 leading-7 text-muted-foreground">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Testimonial9 };
