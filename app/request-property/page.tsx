// // "use client";

// // import { useState } from "react";

// // import { useRouter } from "next/navigation";

// // export default function RequestPropertyPage() {
// //   const router = useRouter();

// //   const [loading, setLoading] = useState(false);

// //   const [form, setForm] = useState({
// //     name: "",
// //     phone: "",
// //     category: "",
// //     budget: "",
// //     location: "",
// //     description: "",
// //   });

// //   async function handleSubmit(e: React.FormEvent) {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);

// //       const res = await fetch("/api/requests", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           ...form,
// //           budget: Number(form.budget),
// //         }),
// //       });

// //       if (!res.ok) {
// //         throw new Error("Failed");
// //       }

// //       router.push("/requests");
// //     } catch (error) {
// //       console.log(error);
// //       alert("Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <main className="min-h-screen bg-white p-6">
// //       <div className="mx-auto max-w-3xl">
// //         <h1 className="mb-2 text-5xl font-bold">Request Property</h1>

// //         <p className="mb-10 text-gray-500">
// //           Tell agents what you're looking for.
// //         </p>

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             required
// //             className="w-full rounded-2xl border p-4"
// //             value={form.name}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 name: e.target.value,
// //               })
// //             }
// //           />

// //           <input
// //             type="tel"
// //             placeholder="Phone Number"
// //             required
// //             className="w-full rounded-2xl border p-4"
// //             value={form.phone}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 phone: e.target.value,
// //               })
// //             }
// //           />

// //           <div>
// //             <label className="mb-2 block font-medium">Property Category</label>

// //             <select
// //               required
// //               value={form.category}
// //               onChange={(e) =>
// //                 setForm({
// //                   ...form,
// //                   category: e.target.value,
// //                 })
// //               }
// //               className="w-full rounded-2xl border p-4"
// //             >
// //               <option value="">Select Category</option>

// //               <option value="Apartment">Apartment</option>

// //               <option value="House">House</option>

// //               <option value="Land">Land</option>

// //               <option value="Office Space">Office Space</option>

// //               <option value="Shop">Shop</option>
// //             </select>
// //           </div>

// //           <input
// //             type="number"
// //             placeholder="Budget"
// //             required
// //             className="w-full rounded-2xl border p-4"
// //             value={form.budget}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 budget: e.target.value,
// //               })
// //             }
// //           />

// //           <input
// //             type="text"
// //             placeholder="Preferred Location"
// //             required
// //             className="w-full rounded-2xl border p-4"
// //             value={form.location}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 location: e.target.value,
// //               })
// //             }
// //           />

// //           <textarea
// //             placeholder="Describe what you need..."
// //             required
// //             rows={6}
// //             className="w-full rounded-2xl border p-4"
// //             value={form.description}
// //             onChange={(e) =>
// //               setForm({
// //                 ...form,
// //                 description: e.target.value,
// //               })
// //             }
// //           />

// //           <button
// //             disabled={loading}
// //             className="rounded-2xl bg-black px-8 py-4 text-white"
// //           >
// //             {loading ? "Submitting..." : "Submit Request"}
// //           </button>
// //         </form>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { SearchCheck } from "lucide-react";

// import { Loader2 } from "lucide-react";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function RequestPropertyPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   const [status, setStatus] = useState("Preparing request...");

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     category: "",
//     budget: "",
//     location: "",
//     description: "",
//   });

//   // async function handleSubmit(e: React.FormEvent) {
//   //   e.preventDefault();

//   //   try {
//   //     setLoading(true);

//   //     const res = await fetch("/api/requests", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         ...form,
//   //         budget: Number(form.budget),
//   //       }),
//   //     });

//   //     if (!res.ok) {
//   //       throw new Error("Failed");
//   //     }

//   //     router.push("/requests");
//   //   } catch (error) {
//   //     console.log(error);
//   //     alert("Something went wrong");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     if (loading) return;

//     try {
//       setLoading(true);

//       setStatus("Submitting request...");

//       const res = await fetch("/api/requests", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...form,
//           budget: Number(form.budget),
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed");
//       }

//       setStatus("Finding matching agents...");

//       setStatus("Redirecting...");

//       router.push("/requests");
//       router.refresh();
//     } catch (error) {
//       console.log(error);

//       toast.error("Failed to submit request", {
//         description: "Please try again in a moment.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-muted/30 py-12">
      // <Dialog open={loading}>
      //   <DialogContent
      //     className="sm:max-w-md"
      //     onInteractOutside={(e) => e.preventDefault()}
      //     onEscapeKeyDown={(e) => e.preventDefault()}
      //   >
      //     <DialogHeader>
      //       <div className="flex justify-center pb-4">
      //         <Loader2 className="h-10 w-10 animate-spin" />
      //       </div>

      //       <DialogTitle className="text-center">
      //         Submitting Request
      //       </DialogTitle>

      //       <DialogDescription className="text-center">
      //         {status}
      //       </DialogDescription>
      //     </DialogHeader>

      //     <div className="text-center text-xs text-muted-foreground">
      //       Please wait while we publish your property request.
      //     </div>
      //   </DialogContent>
      // </Dialog>
//       <div className="mx-auto max-w-4xl px-6">
//         <Card className="border-0 shadow-lg">
//           <CardHeader>
//             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
//               <SearchCheck className="h-6 w-6" />
//             </div>

//             <CardTitle className="text-3xl md:text-4xl">
//               Request a Property
//             </CardTitle>

//             <CardDescription className="text-base">
//               Tell agents and property owners exactly what you're looking for
//               and let them reach out with matching properties.
//             </CardDescription>
//           </CardHeader>

//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* NAME + PHONE */}
//               <div className="grid gap-6 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name</Label>

//                   <Input
//                     id="name"
//                     placeholder="John Doe"
//                     required
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         name: e.target.value,
//                       })
//                     }
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number</Label>

//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="+234..."
//                     required
//                     value={form.phone}
//                     onChange={(e) =>
//                       setForm({
//                         ...form,
//                         phone: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//               </div>

//               {/* CATEGORY + BUDGET */}
//               <div className="grid gap-6 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label>Property Category</Label>

//                   <Select
//                     value={form.category}
//                     onValueChange={(value) =>
//                       setForm({
//                         ...form,
//                         category: value,
//                       })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>

//                     <SelectContent>
//                       <SelectItem value="Apartment">Apartment</SelectItem>

//                       <SelectItem value="House">House</SelectItem>

//                       <SelectItem value="Land">Land</SelectItem>

//                       <SelectItem value="Office Space">Office Space</SelectItem>

//                       <SelectItem value="Shop">Shop</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="budget">Budget</Label>

//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
//                       ₦
//                     </span>

//                     <Input
//                       id="budget"
//                       type="number"
//                       required
//                       placeholder="5000000"
//                       className="pl-8"
//                       value={form.budget}
//                       onChange={(e) =>
//                         setForm({
//                           ...form,
//                           budget: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* LOCATION */}
//               <div className="space-y-2">
//                 <Label htmlFor="location">Preferred Location</Label>

//                 <Input
//                   id="location"
//                   required
//                   placeholder="Lekki, Lagos"
//                   value={form.location}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       location: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               {/* DESCRIPTION */}
//               <div className="space-y-2">
//                 <Label htmlFor="description">Property Requirements</Label>

//                 <Textarea
//                   id="description"
//                   rows={6}
//                   required
//                   placeholder="Describe exactly what you're looking for. Example: 3-bedroom apartment in Lekki with good road access and parking..."
//                   value={form.description}
//                   onChange={(e: any) =>
//                     setForm({
//                       ...form,
//                       description: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               {/* SUBMIT */}
//               <Button
//                 type="submit"
//                 size="lg"
//                 disabled={loading}
//                 className="w-full md:w-auto"
//               >
//                 Submit Request
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SearchCheck, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RequestPropertyPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Preparing request...");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    budget: "",
    location: "",
    description: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);
      setStatus("Submitting request...");

      const res = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          budget: Number(form.budget),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setStatus("Finding matching agents...");
      setStatus("Redirecting...");

      router.push("/requests");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit request", {
        description: "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-10 bg-background">
      {/* PROCESSING SUBMISSION DIALOG MASK */}
      <Dialog open={loading}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <div className="flex justify-center pb-4">
              <Loader2 className="h-10 w-10 animate-spin" />
            </div>

            <DialogTitle className="text-center">
              Submitting Request
            </DialogTitle>

            <DialogDescription className="text-center">
              {status}
            </DialogDescription>
          </DialogHeader>

          <div className="text-center text-xs text-muted-foreground">
            Please wait while we publish your property request.
          </div>
        </DialogContent>
      </Dialog>

      {/* LEFT DESIGN SIDEBAR BANNER: 40% Width (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:col-span-4 relative p-12 flex-col justify-between overflow-hidden">
        {/* Local image filling the background completely with zero tints */}
        <div className="absolute inset-0">
          <Image
            src="/prop-img5.png" // Pointing to public/request-bg.jpg
            alt="Luxury Residential Estate Architecture"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text content wrapped with a solid background card wrapper so it stays readable over your clear image */}
        <div className="relative z-10 self-start">
          <Link
            href="/requests"
            className="inline-flex items-center text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white hover:bg-black/80 transition-colors gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> View Active Requests
          </Link>
        </div>

        <div className="relative z-10 space-y-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
            <SearchCheck className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white xl:text-3xl">
            Can't Find Your Ideal Space?
          </h1>
          <p className="text-sm text-zinc-200 leading-relaxed max-w-sm">
            Broadcast your specific search requirements openly. Verified agents
            across our local networks will reach out with listings tailored
            specifically to your parameters.
          </p>
        </div>
      </div>

      {/* RIGHT INPUT PANEL: 60% Width */}
      <div className="col-span-10 lg:col-span-6 overflow-y-auto px-4 py-10 sm:px-8 lg:px-16 flex items-center">
        <div className="max-w-2xl mx-auto w-full space-y-6">
          <div className="space-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 lg:hidden">
              <SearchCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Request a Property
            </h2>
            <p className="text-sm text-muted-foreground">
              Detail your precise requirements and let agents match options
              directly to you.
            </p>
          </div>

          <Card className="rounded-2xl border-muted/80 shadow-sm overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME + PHONE */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="rounded-xl h-11"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234..."
                      className="rounded-xl h-11"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* CATEGORY + BUDGET */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90">
                      Property Category
                    </Label>
                    <Select
                      value={form.category}
                      onValueChange={(value) =>
                        setForm({ ...form, category: value })
                      }
                    >
                      <SelectTrigger className="rounded-xl h-11">
                        <SelectValue placeholder="Select category type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Land">Land</SelectItem>
                        <SelectItem value="Office Space">
                          Office Space
                        </SelectItem>
                        <SelectItem value="Shop">Shop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="budget"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90"
                    >
                      Budget Max Limit
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-semibold">
                        ₦
                      </span>
                      <Input
                        id="budget"
                        type="number"
                        placeholder="5000000"
                        className="pl-8 rounded-xl h-11"
                        required
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="location"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90"
                  >
                    Preferred Location Area
                  </Label>
                  <Input
                    id="location"
                    placeholder="Lekki Phase 1, Lagos"
                    className="rounded-xl h-11"
                    required
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="description"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/90"
                  >
                    Detailed Requirements Specifications
                  </Label>
                  <Textarea
                    id="description"
                    // rows={5}
                    placeholder="Describe exactly what you're looking for. Example: 3-bedroom serviced apartment in Lekki with 24/7 power, parking space, and close proximity to the main expressway..."
                    className="h-24 rounded-xl resize-none"
                    required
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full h-11 rounded-xl font-bold shadow-sm pt-0.5"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
