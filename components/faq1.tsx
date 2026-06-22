import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "Is PropNetix free to use?",
      answer:
        "Yes, browsing and searching listings is completely free. Some advanced services for agents and premium listings may have fees.",
    },
    {
      id: "faq-2",
      question: "Are the property listings verified?",
      answer:
        "We review and verify listings from agents and property owners to reduce scams and ensure users see accurate information.",
    },
    {
      id: "faq-3",
      question: "How do I contact a property owner or agent?",
      answer:
        "You can directly contact verified agents or owners through the listing page using the built-in messaging or contact options.",
    },
    {
      id: "faq-4",
      question: "Can I list my property on PropNetix?",
      answer:
        "Yes. Property owners and agents can create an account and list properties after completing verification.",
    },
    {
      id: "faq-5",
      question: "Does PropNetix operate in my city?",
      answer:
        "We currently support multiple cities, with more locations being added regularly. You can search by location to see available listings.",
    },
    {
      id: "faq-6",
      question: "How do I avoid fake listings?",
      answer:
        "We recommend only interacting with verified listings and using PropNetix messaging. Our system also flags suspicious or incomplete listings.",
    },
    {
      id: "faq-7",
      question: "Do I need an account to use PropNetix?",
      answer:
        "No account is required to browse listings, but you’ll need one to contact agents, save properties, or list your own property.",
    },
  ],
  className,
}: Faq1Props) => {
  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32 justify-center flex", className)}
      id="faq"
    >
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            {heading}
          </h1>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className=" hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq1 };
