import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import heroimg from "@/public/hero-propnetix.png"

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  className?: string;
}

interface Hero1Props extends HeroBasicProps {
  isAuthenticated?: boolean;
}
type Props = Partial<Hero1Props>;

const defaultProps: Hero1Props = {
  badge: {
    text: "Discover verified properties",
    announcement: "Discover verified properties near you",
  },
  heading: "Find, List & Secure Properties with Confidence",
  description:
    "PropNetix helps you discover verified real estate listings, connect with trusted agents, and explore opportunities in your area — all in one clean, modern platform.",
  buttons: {
    primary: {
      text: "Browse Listings",
      url: "/listings",
    },
    secondary: {
      text: "View GitHub",
      url: "https://shadcnblocks.com",
    },
  },
  image: {
    src: heroimg.src,
    srcDark:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "Hero Image Placeholder",
  },
};

const Hero1 = (props: Props) => {
  const {
    badge,
    heading,
    description,
    buttons,
    image,
    className,
    isAuthenticated,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(" justify-center flex py-20 md:py-28 lg:py-32", className)}
    >
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge.text}
                <ArrowUpRight className="size-4" />
              </Badge>
            )}
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>
            <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    {/* <ArrowRight className="size-4" /> */}
                  </a>
                </Button>
              )}
              {/* {buttons?.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                  </Button>
                )} */}
              {/* {!isAuthenticated && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <RegisterLink>Start Listing</RegisterLink>
                </Button>
              )} */}
              {isAuthenticated ? (
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href="/dashboard">Go to Dashboard</a>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {/* <RegisterLink>List a Property</RegisterLink> */}
                  <a href="/dashboard/create">List a Property</a>
                </Button>
              )}
            </div>
          </div>
          {image.srcDark ? (
            <>
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-video w-full rounded-md  object-top dark:hidden"
              />
              <img
                src={image.srcDark}
                alt={image.alt}
                className="hidden aspect-video w-full rounded-md border border-border object-cover object-top dark:block"
              />
            </>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-video w-full rounded-md border border-border object-cover object-top"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
