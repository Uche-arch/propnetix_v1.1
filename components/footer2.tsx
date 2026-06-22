import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Logo, LogoImageDesktop, LogoImageMobile } from "@/components/logo";

import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer2Props extends FooterBasicProps {
  logoClassName?: string;
}
type Props = Partial<Footer2Props>;

const defaultProps: Footer2Props = {
  logo: {
    url: "/",
    src: "https://ui-avatars.com/api/?name=PN&background=111827&color=fff&bold=true&rounded=true",
    alt: "PropNetix logo",
    title: "PropNetix",
  },
  description:
    "Find, buy, rent, and list verified properties across trusted locations — all in one platform.",
  sections: [
    {
      title: "Explore",
      links: [
        { name: "Browse Listings", href: "/listings" },
        { name: "Houses for Sale", href: "/listings?category=House" },
        { name: "Office Space for Rent", href: "/listings?category=Office+Space" },
        { name: "Land Listings", href: "/listings?category=Land" },
      ],
    },
    {
      title: "For Users",
      links: [
        { name: "How it Works", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Save Properties", href: "#" },
        { name: "Create Account", href: "/api/auth/login?" },
      ],
    },
    {
      title: "For Agents",
      links: [
        { name: "List a Property", href: "/dashboard/create" },
        { name: "Agent Dashboard", href: "/dashboard" },
        { name: "Verification", href: "#" },
        { name: "Success Stories", href: "#testimonial" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Safety Tips", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Report Listing", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 PropNetix. All rights reserved.",
  legalLinks: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props: Props) => {
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-16 md:py-20 justify-center flex", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <a href={logo?.url}>
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-7 dark:invert"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
