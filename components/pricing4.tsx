// // "use client";

// // import {
// //   Bell,
// //   Briefcase,
// //   Brush,
// //   Building,
// //   CalendarCheck2,
// //   Check,
// //   CheckSquare,
// //   Code,
// //   Database,
// //   FileText,
// //   GitBranch,
// //   GitPullRequest,
// //   LayoutGrid,
// //   MonitorSmartphone,
// //   Rocket,
// //   Settings2,
// //   Users,
// //   Zap,
// // } from "lucide-react";
// // import { useState } from "react";

// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Separator } from "@/components/ui/separator";
// // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // import { cn } from "@/lib/utils";

// // type IconComponent = ElementType<{ className?: string }>;
// // type Pricing3PlanFeature = | string
// //   | {
// //       text: string;
// //       icon?: IconComponent;
// //     };
// // interface Pricing3PlansPlan {
// //   name: string;
// //   monthlyPrice: string;
// //   yearlyPrice: string;
// //   period: {
// //     monthly: string;
// //     yearly: string;
// //   };
// //   description: {
// //     monthly: string;
// //     yearly: string;
// //   };
// //   buttonText: string;
// //   buttonUrl?: string;
// //   highlighted?: boolean;
// //   highlightedLabel?: string;
// //   icon?: IconComponent;
// //   image?: string;
// //   features: Pricing3PlanFeature[];
// //   tagline?: string;
// //   bestFor?: string;
// //   planCode?: string;
// // }

// // interface Pricing3PlansProps {
// //   heading: string;
// //   description?: string;
// //   plans: Pricing3PlansPlan[];
// //   className?: string;
// // }

// // interface Pricing4Props extends Pricing3PlansProps {}
// // type Props = Partial<Pricing4Props>;

// // export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
// //   return typeof feature === "string" ? feature : feature.text;
// // }
// // export function pricing3PlanFeatureIcon(
// //   feature: Pricing3PlanFeature,
// // ): IconComponent | undefined {
// //   return typeof feature === "string" ? undefined : feature.icon;
// // }
// // const defaultProps: Pricing4Props = {
// //   heading: "Simple Pricing Plans",
// //   description:
// //     "Choose the plan that fits your needs. Start free and scale as you grow.",
// //   plans: [
// //     {
// //       icon: Rocket,
// //       image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
// //       name: "Basic Plan",
// //       monthlyPrice: "$0",
// //       yearlyPrice: "$0",
// //       period: {
// //         monthly: "Per month",
// //         yearly: "Per year",
// //       },
// //       description: {
// //         monthly:
// //           "Ideal for individuals getting started. No credit card required.",
// //         yearly:
// //           "Ideal for individuals getting started. No credit card required.",
// //       },
// //       buttonText: "Start for Free",
// //       buttonUrl: "#",
// //       highlighted: false,
// //       planCode: "BASIC",
// //       tagline: "Great for solo developers",
// //       bestFor: "Freelancers just starting out",
// //       features: [
// //         { icon: Code, text: "Up to 5 components" },
// //         { icon: LayoutGrid, text: "Community support" },
// //         { icon: MonitorSmartphone, text: "Weekly updates" },
// //         { icon: FileText, text: "100MB storage" },
// //         { icon: GitBranch, text: "Basic analytics" },
// //       ],
// //     },
// //     {
// //       icon: Briefcase,
// //       image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
// //       name: "Standard Plan",
// //       monthlyPrice: "$20",
// //       yearlyPrice: "$200",
// //       period: {
// //         monthly: "Per month",
// //         yearly: "Per year",
// //       },
// //       description: {
// //         monthly:
// //           "For growing teams that need more power. Start with a 30-day free trial.",
// //         yearly:
// //           "For growing teams that need more power. Save 16% compared to monthly.",
// //       },
// //       buttonText: "Get Started",
// //       buttonUrl: "#",
// //       highlighted: true,
// //       highlightedLabel: "Most popular",
// //       planCode: "STANDARD",
// //       tagline: "Best for growing teams",
// //       bestFor: "Small dev teams and startups",
// //       features: [
// //         { icon: Code, text: "Unlimited components" },
// //         { icon: Brush, text: "Priority support" },
// //         { icon: Settings2, text: "Daily updates" },
// //         { icon: CheckSquare, text: "10GB storage" },
// //         { icon: Zap, text: "Advanced analytics" },
// //       ],
// //     },
// //     {
// //       icon: Building,
// //       image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan3.svg",
// //       name: "Premium Plan",
// //       monthlyPrice: "$80",
// //       yearlyPrice: "$800",
// //       period: {
// //         monthly: "Per month",
// //         yearly: "Per year",
// //       },
// //       description: {
// //         monthly:
// //           "For large organizations with advanced needs. Everything in Standard plus dedicated support.",
// //         yearly:
// //           "For large organizations with advanced needs. Save 16% compared to monthly.",
// //       },
// //       buttonText: "Buy Now",
// //       buttonUrl: "#",
// //       highlighted: false,
// //       planCode: "PREMIUM",
// //       tagline: "Collaborate and scale fast",
// //       bestFor: "Product teams with multiple projects",
// //       features: [
// //         { icon: Users, text: "Unlimited components" },
// //         { icon: GitPullRequest, text: "Dedicated support" },
// //         { icon: CalendarCheck2, text: "Real-time updates" },
// //         { icon: Bell, text: "Unlimited storage" },
// //         { icon: Database, text: "Custom integrations" },
// //       ],
// //     },
// //   ],
// // };

// // const Pricing4 = (props: Props) => {
// //   const { heading, description, plans, className } = {
// //     ...defaultProps,
// //     ...props,
// //   };
// //   const firstHighlightedIndex = plans.findIndex((p) => p.highlighted);
// //   const [isAnnually, setIsAnnually] = useState(false);
// //   return (
// //     <section className={cn("py-10 flex justify-center", className)}>
// //       <div className="container mx-auto">
// //         <div className="flex flex-col gap-6">
// //           <h2 className="text-3xl font-medium tracking-tight text-pretty lg:text-5xl">
// //             {heading}
// //           </h2>
// //           <div className="flex flex-col justify-between gap-10 md:flex-row">
// //             {description && (
// //               <p className="max-w-3xl text-muted-foreground lg:text-xl">
// //                 {description}
// //               </p>
// //             )}
// //             <Tabs
// //               value={isAnnually ? "annually" : "monthly"}
// //               onValueChange={(value: string) =>
// //                 setIsAnnually(value === "annually")
// //               }
// //               className="w-fit shrink-0"
// //               aria-label="Billing period"
// //             >
// //               <TabsList className="grid h-11 w-max grid-cols-2 gap-1 rounded-lg p-1 text-lg">
// //                 <TabsTrigger
// //                   value="monthly"
// //                   className="h-full min-h-0 rounded-md px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
// //                 >
// //                   Monthly
// //                 </TabsTrigger>
// //                 <TabsTrigger
// //                   value="annually"
// //                   className="h-full min-h-0 rounded-md px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
// //                 >
// //                   Yearly
// //                 </TabsTrigger>
// //               </TabsList>
// //             </Tabs>
// //           </div>
// //           <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
// //             {plans.map((plan, index) => {
// //               const isHighlighted =
// //                 firstHighlightedIndex !== -1 && index === firstHighlightedIndex;
// //               return (
// //                 <div
// //                   key={plan.name}
// //                   className={cn(
// //                     "flex w-full flex-col rounded-lg border p-6 text-left",
// //                     isHighlighted && "bg-muted",
// //                   )}
// //                 >
// //                   <Badge
// //                     variant={isHighlighted ? "default" : "outline"}
// //                     className="mb-8 block w-fit uppercase"
// //                   >
// //                     {plan.name}
// //                   </Badge>
// //                   <h3 className="text-4xl font-semibold tracking-tight lg:text-5xl">
// //                     {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
// //                   </h3>
// //                   <p
// //                     className={cn(
// //                       "text-muted-foreground",
// //                       plan.monthlyPrice === "$0" && "invisible",
// //                     )}
// //                   >
// //                     {isAnnually ? plan.period.yearly : plan.period.monthly}
// //                   </p>
// //                   <Separator className="my-6" />
// //                   <div className="flex h-full flex-col justify-between gap-20">
// //                     <ul className="space-y-4 text-muted-foreground md:leading-snug">
// //                       {plan.features.map((feature, featureIndex) => (
// //                         <li
// //                           key={featureIndex}
// //                           className="flex items-center gap-2"
// //                         >
// //                           <Check
// //                             className="size-4 shrink-0"
// //                             aria-hidden="true"
// //                           />
// //                           <span>{pricing3PlanFeatureText(feature)}</span>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                     <Button
// //                       className="w-full"
// //                       variant={isHighlighted ? "default" : "outline"}
// //                     >
// //                       {plan.buttonText}
// //                     </Button>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export { Pricing4 };

// "use client";

// import {
//   Bell,
//   Briefcase,
//   Brush,
//   Building,
//   CalendarCheck2,
//   Check,
//   Code,
//   Database,
//   FileText,
//   GitBranch,
//   GitPullRequest,
//   LayoutGrid,
//   MonitorSmartphone,
//   Rocket,
//   Settings2,
//   Users,
//   Zap,
// } from "lucide-react";
// import { useState, ElementType } from "react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { cn } from "@/lib/utils";

// type IconComponent = ElementType<{ className?: string }>;
// type Pricing3PlanFeature = string | { text: string; icon?: IconComponent };

// interface Pricing3PlansPlan {
//   name: string;
//   baseMonthlyPrice: number; // Changed to numbers for easy multiplication
//   baseYearlyPrice: number;
//   period: {
//     monthly: string;
//     yearly: string;
//   };
//   description: {
//     monthly: string;
//     yearly: string;
//   };
//   buttonText: string;
//   highlighted?: boolean;
//   planCode: "BASIC" | "STANDARD" | "PREMIUM"; // Strict codes for state mapping
//   features: Pricing3PlanFeature[];
// }

// interface Pricing4Props {
//   heading: string;
//   description?: string;
//   plans: Pricing3PlansPlan[];
//   className?: string;
// }

// export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
//   return typeof feature === "string" ? feature : feature.text;
// }

// const defaultProps: Pricing4Props = {
//   heading: "LMS Interactive Billing Grid",
//   description:
//     "Select your tier and configure seat counts to calculate live costs.",
//   plans: [
//     {
//       name: "Basic Plan",
//       baseMonthlyPrice: 1000, // ₦1,000 per user
//       baseYearlyPrice: 10000,
//       period: { monthly: "per user / month", yearly: "per user / year" },
//       description: {
//         monthly: "Ideal for basic operational training loops.",
//         yearly: "Ideal for basic operational training loops.",
//       },
//       buttonText: "Get Started",
//       planCode: "BASIC",
//       features: [
//         { icon: Code, text: "Core LMS Core Access" },
//         { icon: LayoutGrid, text: "Standard Quizzes" },
//         { icon: MonitorSmartphone, text: "Mobile-ready layout" },
//       ],
//     },
//     {
//       name: "Standard Plan",
//       baseMonthlyPrice: 2500, // ₦2,500 per user
//       baseYearlyPrice: 25000,
//       period: { monthly: "per user / month", yearly: "per user / year" },
//       description: {
//         monthly: "For growing teams needing deep assessment engines.",
//         yearly: "For growing teams needing deep assessment engines.",
//       },
//       buttonText: "Upgrade Plan",
//       highlighted: true,
//       planCode: "STANDARD",
//       features: [
//         { icon: Code, text: "Everything in Basic" },
//         { icon: Brush, text: "Custom Certificates" },
//         { icon: Settings2, text: "Live Webinar Integrations" },
//         { icon: Zap, text: "Advanced Performance Analytics" },
//       ],
//     },
//     {
//       name: "Premium Plan",
//       baseMonthlyPrice: 5000, // ₦5,000 per user
//       baseYearlyPrice: 50000,
//       period: { monthly: "per user / month", yearly: "per user / year" },
//       description: {
//         monthly: "For enterprises requiring white-label ecosystems.",
//         yearly: "For enterprises requiring white-label ecosystems.",
//       },
//       buttonText: "Upgrade Plan",
//       planCode: "PREMIUM",
//       features: [
//         { icon: Users, text: "Everything in Standard" },
//         { icon: GitPullRequest, text: "Dedicated Success Manager" },
//         { icon: CalendarCheck2, text: "Custom Subdomain & Branding" },
//         { icon: Database, text: "API Data Export Integrations" },
//       ],
//     },
//   ],
// };

// export function Pricing4(props: Partial<Pricing4Props>) {
//   const { heading, description, plans, className } = {
//     ...defaultProps,
//     ...props,
//   };

//   const [isAnnually, setIsAnnually] = useState(false);

//   // --- DEMO STATES ---
//   // Change these default values right here to change what your boss sees on load!
//   // const [currentPlan, setCurrentPlan] = useState<"BASIC" | "STANDARD" | "PREMIUM">("STANDARD");
//   // const [currentSeats, setCurrentSeats] = useState<number>(10);

//   // Set currentPlan to an empty string or null so no card is active on load
//   const [currentPlan, setCurrentPlan] = useState<
//     "BASIC" | "STANDARD" | "PREMIUM" | ""
//   >("");
//   const [currentSeats, setCurrentSeats] = useState<number>(0);

//   // Track the seat dropdown selection for each distinct plan code
//   const [selectedSeats, setSelectedSeats] = useState<Record<string, number>>({
//     BASIC: 5,
//     STANDARD: 10, // Matches initial state
//     PREMIUM: 20,
//   });

//   const handleSeatChange = (planCode: string, value: number) => {
//     setSelectedSeats((prev) => ({ ...prev, [planCode]: value }));
//   };

//   // const handlePlanAction = (
//   //   planCode: "BASIC" | "STANDARD" | "PREMIUM",
//   //   calculatedPrice: number,
//   // ) => {
//   //   const seats = selectedSeats[planCode];

//   //   // Demo Interactive Trigger
//   //   if (planCode === currentPlan) {
//   //     if (seats > currentSeats) {
//   //       alert(
//   //         `Demo Trigger: Purchasing ${seats - currentSeats} additional seats for your active subscription! Total calculated transaction: ₦${((calculatedPrice / seats) * (seats - currentSeats)).toLocaleString()}`,
//   //       );
//   //       setCurrentSeats(seats);
//   //     }
//   //   } else {
//   //     alert(
//   //       `Demo Trigger: Routing to Paystack gateway context for the ${planCode} with ${seats} assigned seats. Authorization Target Amount: ₦${calculatedPrice.toLocaleString()}`,
//   //     );
//   //     setCurrentPlan(planCode);
//   //     setCurrentSeats(seats);
//   //   }
//   // };

// const handlePlanAction = (planCode: "BASIC" | "STANDARD" | "PREMIUM", calculatedPrice: number) => {
//   const seats = selectedSeats[planCode] || 5;

//   // 1. Paystack requires amounts in the lowest currency unit (Kobo for Naira).
//   // Multiply your price by 100 so Paystack reads it correctly.
//   const amountInKobo = calculatedPrice * 100;

//   // 2. Open the real Paystack Modal
//   // @ts-ignore (ignores temporary window object types for quick demo building)
//   const handler = window.PaystackPop.setup({
//     key: "pk_test_c92a5b7b9fc715be3de97517ee66db45b317af05", // <-- Paste your pk_test_ key here
//     email: "admin@company-demo.com", // Mock email for the presentation
//     amount: amountInKobo,
//     currency: "NGN", // Using Naira for your layout
//     ref: "LMS-" + Math.floor(Math.random() * 1000000000 + 1), // Generates a random reference code

//     callback: function (response: any) {
//       // THIS RUNS WHEN PAYMENT IS SUCCESSFUL!
//       alert(`Payment Successful! Reference: ${response.reference}`);

//       // Instantly switch the frontend state to reflect ownership live!
//       setCurrentPlan(planCode);
//       setCurrentSeats(seats);
//     },
//     onClose: function () {
//       alert("Demo Note: Checkout window closed by user.");
//     },
//   });

//   handler.openIframe();
// };

// //   const handlePlanAction = async (planCode: "BASIC" | "STANDARD" | "PREMIUM", calculatedPrice: number) => {
// //   const seats = selectedSeats[planCode] || 5;

// //   // IMPORTANT DEMO NOTE: In production, never expose your Secret Key on the frontend.
// //   // But for an afternoon demo to your boss, this is the ultimate shortcut.
// //   const PAYSTACK_SECRET_KEY = "sk_test_8bdf32af4f200731c058d2cbc7461e0a9656fbd9";

// //   try {
// //     const response = await fetch("https://api.paystack.co/transaction/initialize", {
// //       method: "POST",
// //       headers: {
// //         "Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         email: "admin@company-demo.com",
// //         amount: calculatedPrice * 100, // Convert to Kobo
// //         callback_url: window.location.href, // Returns them exactly back to this billing page!
// //         metadata: {
// //           planCode,
// //           seats,
// //         },
// //       }),
// //     });

// //     const data = await response.json();

// //     if (data.status && data.data.authorization_url) {
// //       // Pushes the entire browser window full-screen to Paystack's official page
// //       window.location.href = data.data.authorization_url;
// //     } else {
// //       alert("Paystack Init Failed. Check your secret key console log.");
// //       console.log("Paystack Error Response:", data);
// //     }
// //   } catch (error) {
// //     console.error("Frontend network error calling Paystack:", error);
// //   }
// // };

//   return (
//     <section
//       className={cn(
//         "py-10 flex justify-center bg-background text-foreground",
//         className,
//       )}
//     >
//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="flex flex-col gap-6">
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
//               <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-2">
//                 {heading}
//               </h2>
//               {description && (
//                 <p className="text-muted-foreground lg:text-lg max-w-xl">
//                   {description}
//                 </p>
//               )}
//             </div>

//             <Tabs
//               value={isAnnually ? "annually" : "monthly"}
//               onValueChange={(value) => setIsAnnually(value === "annually")}
//               className="w-fit shrink-0"
//             >
//               <TabsList className="grid w-full grid-cols-2 h-10 rounded-md p-1 bg-muted">
//                 <TabsTrigger value="monthly" className="text-sm font-medium">
//                   Monthly
//                 </TabsTrigger>
//                 <TabsTrigger value="annually" className="text-sm font-medium">
//                   Yearly
//                 </TabsTrigger>
//               </TabsList>
//             </Tabs>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-4">
//             {plans.map((plan) => {
//               const seats = selectedSeats[plan.planCode] || 5;
//               const basePrice = isAnnually
//                 ? plan.baseYearlyPrice
//                 : plan.baseMonthlyPrice;
//               const totalAmount = basePrice * seats;

//               const isOwned = currentPlan === plan.planCode;

//               // Compute contextual button labeling
//               let buttonLabel = plan.buttonText;
//               let isButtonDisabled = false;

//               if (isOwned) {
//                 if (seats === currentSeats) {
//                   buttonLabel = "Current Plan";
//                   isButtonDisabled = true;
//                 } else if (seats > currentSeats) {
//                   buttonLabel = `Add ${seats - currentSeats} More Seats`;
//                 } else {
//                   buttonLabel = "Seats Already Provisioned";
//                   isButtonDisabled = true;
//                 }
//               }

//               return (
//                 <div
//                   key={plan.name}
//                   className={cn(
//                     "flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all relative justify-between",
//                     plan.highlighted && "border-primary ring-1 ring-primary",
//                     isOwned &&
//                       "border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/10",
//                   )}
//                 >
//                   {isOwned && (
//                     <Badge className="absolute -top-3 left-6 bg-emerald-500 text-white hover:bg-emerald-600 border-none">
//                       Active Subscription ({currentSeats} Seats)
//                     </Badge>
//                   )}

//                   <div>
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-bold tracking-tight">
//                         {plan.name}
//                       </h3>
//                       {plan.highlighted && !isOwned && (
//                         <Badge variant="secondary" className="text-xs">
//                           Popular
//                         </Badge>
//                       )}
//                     </div>

//                     {/* Dynamic Price Render */}
//                     <div className="my-4">
//                       <span className="text-4xl font-extrabold tracking-tight">
//                         ₦{totalAmount.toLocaleString()}
//                       </span>
//                       <span className="text-muted-foreground text-sm block mt-1">
//                         {seats} seats total (
//                         {isAnnually ? plan.period.yearly : plan.period.monthly})
//                       </span>
//                     </div>

//                     <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
//                       {isAnnually
//                         ? plan.description.yearly
//                         : plan.description.monthly}
//                     </p>

//                     <Separator className="my-4" />

//                     {/* Seat Range Selector Dropdown */}
//                     <div className="flex flex-col gap-2 mb-6">
//                       <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//                         Configure Assigned Seats:
//                       </label>
//                       <select
//                         value={seats}
//                         onChange={(e) =>
//                           handleSeatChange(
//                             plan.planCode,
//                             Number(e.target.value),
//                           )
//                         }
//                         className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//                       >
//                         <option value={5}>5 Seats</option>
//                         <option value={10}>10 Seats</option>
//                         <option value={20}>20 Seats</option>
//                         <option value={50}>50 Seats</option>
//                         <option value={100}>100 Seats</option>
//                       </select>
//                     </div>

//                     <ul className="space-y-3 text-sm text-muted-foreground mb-8">
//                       {plan.features.map((feature, featureIndex) => (
//                         <li
//                           key={featureIndex}
//                           className="flex items-center gap-2"
//                         >
//                           <Check className="size-4 text-emerald-500 shrink-0" />
//                           <span>{pricing3PlanFeatureText(feature)}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Button
//                     onClick={() => handlePlanAction(plan.planCode, totalAmount)}
//                     className={cn(
//                       "w-full transition-colors mt-auto",
//                       isOwned &&
//                         "bg-emerald-600 hover:bg-emerald-700 text-white",
//                     )}
//                     variant={
//                       plan.highlighted || isOwned ? "default" : "outline"
//                     }
//                     disabled={isButtonDisabled}
//                   >
//                     {buttonLabel}
//                   </Button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  Check,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Users,
  Zap,
} from "lucide-react";
import { useState, ElementType } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = string | { text: string; icon?: IconComponent };

interface Pricing3PlansPlan {
  name: string;
  baseMonthlyPrice: number;
  baseYearlyPrice: number; // Discounted below for bulk incentive
  period: {
    monthly: string;
    yearly: string;
  };
  description: {
    monthly: string;
    yearly: string;
  };
  buttonText: string;
  highlighted?: boolean;
  planCode: "BASIC" | "STANDARD" | "PREMIUM";
  features: Pricing3PlanFeature[];
}

interface Pricing4Props {
  heading: string;
  description?: string;
  plans: Pricing3PlansPlan[];
  className?: string;
}

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}

const defaultProps: Pricing4Props = {
  heading: "LearnEP Portal Billing",
  description:
    "Configure your organization's required user capacity and choose a subscription tier.",
  plans: [
    {
      name: "Basic Plan",
      baseMonthlyPrice: 1000, // ₦1,000 per user / month
      baseYearlyPrice: 9000, // ₦9,000 per user / year (Discounted)
      period: { monthly: "per user / month", yearly: "per user / year" },
      description: {
        monthly: "Ideal for basic operational training loops.",
        yearly: "Save 25% on our foundational onboarding system.",
      },
      buttonText: "Get Started",
      planCode: "BASIC",
      features: [
        { icon: Code, text: "Core LMS Portal Access" },
        { icon: LayoutGrid, text: "Standard Quizzes" },
        { icon: MonitorSmartphone, text: "Mobile-ready layout" },
      ],
    },
    {
      name: "Standard Plan",
      baseMonthlyPrice: 2500, // ₦2,500 per user / month
      baseYearlyPrice: 22000, // ₦22,000 per user / year (Discounted from 30k)
      period: { monthly: "per user / month", yearly: "per user / year" },
      description: {
        monthly: "For growing teams needing deep assessment engines.",
        yearly: "Save over 26% on advanced evaluation suites.",
      },
      buttonText: "Upgrade Plan",
      highlighted: true,
      planCode: "STANDARD",
      features: [
        { icon: Code, text: "Everything in Basic" },
        { icon: Brush, text: "Custom Certificates" },
        { icon: Settings2, text: "Live Webinar Integrations - 440 G9" },
        { icon: Zap, text: "Advanced Performance Analytics" },
      ],
    },
    {
      name: "Premium Plan",
      baseMonthlyPrice: 5000, // ₦5,000 per user / month
      baseYearlyPrice: 45000, // ₦45,000 per user / year (Discounted from 60k)
      period: { monthly: "per user / month", yearly: "per user / year" },
      description: {
        monthly: "For enterprises requiring white-label ecosystems.",
        yearly: "Save 25% on dedicated infrastructure deployment.",
      },
      buttonText: "Upgrade Plan",
      planCode: "PREMIUM",
      features: [
        { icon: Users, text: "Everything in Standard" },
        { icon: GitPullRequest, text: "Dedicated Success Manager" },
        { icon: CalendarCheck2, text: "Custom Subdomain & Branding" },
        { icon: Database, text: "API Data Export Integrations" },
      ],
    },
  ],
};

export function Pricing4(props: Partial<Pricing4Props>) {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [isAnnually, setIsAnnually] = useState(false);

  // --- MOCK SUBSCRIPTION STATE FOR DEMO REFLECTION ---
  const [currentPlan, setCurrentPlan] = useState<
    "BASIC" | "STANDARD" | "PREMIUM" | ""
  >("");
  const [currentUsers, setCurrentUsers] = useState<number>(0);

  // Default dropdown allocations set to 100 on load
  const [selectedUsers, setSelectedUsers] = useState<Record<string, number>>({
    BASIC: 100,
    STANDARD: 100,
    PREMIUM: 100,
  });

  const handleUserChange = (planCode: string, value: number) => {
    setSelectedUsers((prev) => ({ ...prev, [planCode]: value }));
  };

  const handlePlanAction = (
    planCode: "BASIC" | "STANDARD" | "PREMIUM",
    calculatedPrice: number,
  ) => {
    const seats = selectedUsers[planCode] || 5;

    // 1. Paystack requires amounts in the lowest currency unit (Kobo for Naira).
    // Multiply your price by 100 so Paystack reads it correctly.
    const amountInKobo = calculatedPrice * 100;

    // 2. Open the real Paystack Modal
    // @ts-ignore (ignores temporary window object types for quick demo building)
    const handler = window.PaystackPop.setup({
      key: "pk_test_c92a5b7b9fc715be3de97517ee66db45b317af05", // <-- Paste your pk_test_ key here
      email: "admin@company.com", // Mock email for the presentation
      amount: amountInKobo,
      currency: "NGN", // Using Naira for your layout
      ref: "LMS-" + Math.floor(Math.random() * 1000000000 + 1), // Generates a random reference code

      callback: function (response: any) {
        // THIS RUNS WHEN PAYMENT IS SUCCESSFUL!
        alert(`Payment Successful! Reference: ${response.reference}`);

        // Instantly switch the frontend state to reflect ownership live!
        setCurrentPlan(planCode);
        setCurrentUsers(seats);
      },
      onClose: function () {
        alert("Demo Note: Checkout window closed by user.");
      },
    });

    handler.openIframe();
  };

  // const handlePlanAction = async (
  //   planCode: "BASIC" | "STANDARD" | "PREMIUM",
  //   calculatedPrice: number,
  // ) => {
  //   const usersCount = selectedUsers[planCode] || 100;

  //   // TODO: Paste your real pk_test_ key right here before the demo
  //   const PAYSTACK_TEST_SECRET_KEY = "sk_test_YOUR_ACTUAL_SECRET_KEY_HERE";

  //   try {
  //     const response = await fetch(
  //       "https://api.paystack.co/transaction/initialize",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${PAYSTACK_TEST_SECRET_KEY}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: "admin-demo@learnep.com", // Branded for your project
  //           amount: calculatedPrice * 100, // Multiplied into Kobo for clean processing
  //           callback_url: window.location.href, // Smooth redirect back right here when done
  //           metadata: {
  //             planCode,
  //             usersCount,
  //             billingPeriod: isAnnually ? "yearly" : "monthly",
  //           },
  //         }),
  //       },
  //     );

  //     const data = await response.json();

  //     if (data.status && data.data.authorization_url) {
  //       // Triggers the full screen transaction gateway shift instantly
  //       window.location.href = data.data.authorization_url;
  //     } else {
  //       alert(
  //         "Paystack Initialization Error. Check console logs for error context.",
  //       );
  //       console.error("Paystack API Breakdown Logs:", data);
  //     }
  //   } catch (error) {
  //     console.error("Network interface error connecting with Paystack:", error);
  //   }
  // };

  return (
    <section
      className={cn(
        "py-5 flex justify-center",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-2">
                {heading}
              </h2>
              {description && (
                <p className="text-muted-foreground lg:text-lg max-w-xl">
                  {description}
                </p>
              )}
            </div>

            <Tabs
              value={isAnnually ? "annually" : "monthly"}
              onValueChange={(value) => setIsAnnually(value === "annually")}
              className="w-fit shrink-0"
            >
              <TabsList className="grid w-full grid-cols-2 h-10 rounded-md p-1 bg-muted">
                <TabsTrigger value="monthly" className="text-sm font-medium">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="text-sm font-medium">
                  Yearly
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-4">
            {plans.map((plan) => {
              const users = selectedUsers[plan.planCode] || 100;
              const basePrice = isAnnually
                ? plan.baseYearlyPrice
                : plan.baseMonthlyPrice;
              const totalAmount = basePrice * users;

              const isOwned = currentPlan === plan.planCode;

              let buttonLabel = plan.buttonText;
              let isButtonDisabled = false;

              if (isOwned) {
                if (users === currentUsers) {
                  buttonLabel = "Current Active Plan";
                  isButtonDisabled = true;
                } else if (users > currentUsers) {
                  buttonLabel = `Add ${users - currentUsers} More Users`;
                } else {
                  buttonLabel = "Users Already Allocated";
                  isButtonDisabled = true;
                }
              }

              return (
                <div
                  key={plan.name}
                  className={cn(
                    "flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all relative justify-between",
                    plan.highlighted && "border-primary ring-1 ring-primary",
                    isOwned &&
                      "border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/10",
                  )}
                >
                  {isOwned && (
                    <Badge className="absolute -top-3 left-6 bg-emerald-500 text-white hover:bg-emerald-600 border-none">
                      Active Portal Subscription ({currentUsers} Users)
                    </Badge>
                  )}

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold tracking-tight">
                        {plan.name}
                      </h3>
                      {plan.highlighted && !isOwned && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>

                    <div className="my-4">
                      <span className="text-4xl font-extrabold tracking-tight">
                        ₦{totalAmount.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm block mt-1">
                        {users} users total (
                        {isAnnually ? plan.period.yearly : plan.period.monthly})
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                      {isAnnually
                        ? plan.description.yearly
                        : plan.description.monthly}
                    </p>

                    <Separator className="my-4" />

                    {/* Scale-up Multiplier Selector */}
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Configure User Volume:
                      </label>
                      <select
                        value={users}
                        onChange={(e) =>
                          handleUserChange(
                            plan.planCode,
                            Number(e.target.value),
                          )
                        }
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value={100}>100 Users</option>
                        <option value={150}>150 Users</option>
                        <option value={200}>200 Users</option>
                        <option value={400}>400 Users</option>
                        <option value={500}>500 Users</option>
                      </select>
                    </div>

                    <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="size-4 text-emerald-500 shrink-0" />
                          <span>{pricing3PlanFeatureText(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                  size="lg"
                    onClick={() => handlePlanAction(plan.planCode, totalAmount)}
                    className={cn(
                      "w-full transition-colors mt-auto",
                      isOwned &&
                        "bg-emerald-600 hover:bg-emerald-700 text-white",
                    )}
                    variant={
                      plan.highlighted || isOwned ? "default" : "outline"
                    }
                    disabled={isButtonDisabled}
                  >
                    {buttonLabel}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
