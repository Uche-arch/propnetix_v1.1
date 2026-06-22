import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Blocks,
  ChartLine,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Workflow,
  Zap,
  Bell,
  TrendingUp,
  MessageCircle,
  MapPin,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface FeatureIconListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
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

interface FeatureIconListProps {
  heading: string;
  features?: FeatureIconListItem[];
  buttons?: Buttons;
  className?: string;
}

interface Feature43Props extends FeatureIconListProps {
  isAuthenticated?: boolean;
}
type Props = Partial<Feature43Props>;

const defaultProps: Feature43Props = {
  heading: "Everything you need to find and manage properties",
  features: [
    {
      icon: <Zap className="size-5" />,
      title: "Instant Property Search",
      description:
        "Find homes, apartments, and land listings instantly with smart filters and location-based results.",
    },
    {
      icon: <Shield className="size-5" />,
      title: "Verified Listings",
      description:
        "Every property is reviewed to reduce scams and ensure trusted listings from real agents and owners.",
    },
    {
      icon: <MapPin className="size-5" />,
      title: "Location-Based Discovery",
      description:
        "Explore properties near you or in any city with precise map and area-based search.",
    },
    {
      icon: <Home className="size-5" />,
      title: "Buy, Rent & Sell",
      description:
        "Whether you're looking to buy, rent, or list a property, PropNetix supports every step.",
    },
    {
      icon: <MessageCircle className="size-5" />,
      title: "Direct Agent Contact",
      description:
        "Connect directly with verified agents and landlords without unnecessary middlemen.",
    },
    {
      icon: <TrendingUp className="size-5" />,
      title: "Market Insights",
      description:
        "Understand pricing trends and demand in different areas before making decisions.",
    },
    {
      icon: <Bell className="size-5" />,
      title: "Instant Alerts",
      description:
        "Get notified when new listings match your preferences or price range.",
    },
    {
      icon: <Lock className="size-5" />,
      title: "Secure Platform",
      description:
        "Your data and conversations are protected with secure communication and account systems.",
    },
  ],
  buttons: {
    primary: {
      text: "Explore Listings",
      url: "/listings",
    },
  },
};

const MAX_FEATURES = 6;

const Feature43 = (props: Props) => {
  const { heading, buttons, features, className, isAuthenticated } = {
    ...defaultProps,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32 justify-center flex", className)}
      id="why"
    >
      <div className="container">
        {heading && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          </div>
        )} */}
        {/* <div className="mt-16 flex justify-center">
          {isAuthenticated ? (
            <Button size="lg" asChild>
              <a href="/listings">Explore Listings</a>
            </Button>
          ) : (
            <Button size="lg" asChild>
              <RegisterLink>Become an Agent</RegisterLink>
            </Button>
          )}
        </div> */}
        <div className="mt-16 flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" asChild>
            <Link href="/listings">Explore Listings</Link>
          </Button>

          {!isAuthenticated && (
            <Button size="lg" variant="outline" asChild>
              {/* <RegisterLink>List a Property</RegisterLink> */}
                  <a href="/dashboard/create">List a Property</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
