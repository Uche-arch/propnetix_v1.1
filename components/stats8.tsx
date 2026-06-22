import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Stats8Props {
  className?: string;
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "Trusted real estate insights at scale",
  description = "PropNetix helps buyers, renters, and agents connect through verified listings and real-time property data.",
  link = {
    text: "Learn how PropNetix works",
    url: "#",
  },
    stats = [
    {
      id: "stat-1",
      value: "10K+",
      label: "verified property listings",
    },
    {
      id: "stat-2",
      value: "5K+",
      label: "active buyers & renters",
    },
    {
      id: "stat-3",
      value: "1.2K+",
      label: "trusted agents & landlords",
    },
    {
      id: "stat-4",
      value: "99%",
      label: "verified listing accuracy rate",
    },
  ],
  className,
}: Stats8Props) => {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20 justify-center flex", className)}
    >
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
          <a
            href={link.url}
            className="flex items-center gap-1 font-bold hover:underline"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
