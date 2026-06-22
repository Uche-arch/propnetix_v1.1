// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { createListing } from "@/actions/listing-actions";
// import Image from "next/image";

// import { toast } from "sonner";

// import { UploadCloud, Loader2, X, Home } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { Input } from "@/components/ui/input";

// import { Label } from "@/components/ui/label";

// import { Textarea } from "@/components/ui/textarea";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";

// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// export default function CreateListingForm() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [duration, setDuration] = useState<"month" | "year">("year");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");

//   const [files, setFiles] = useState<File[]>([]);

//   const [previews, setPreviews] = useState<string[]>([]);

//   const [loading, setLoading] = useState(false);

//   const [status, setStatus] = useState("Preparing listing...");

//   const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(e.target.files || []);

//     if (files.length + selectedFiles.length > 5) {
//       toast.error("Maximum of 5 images allowed", {
//         description: "Remove some images before adding more.",
//       });

//       e.target.value = "";

//       return;
//     }

//     setFiles((prev) => [...prev, ...selectedFiles]);

//     const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));

//     setPreviews((prev) => [...prev, ...newPreviews]);
//   };

//   const removeImage = (index: number) => {
//     setFiles((prev) => prev.filter((_, i) => i !== index));

//     setPreviews((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImages = async () => {
//     const uploadedUrls: string[] = [];

//     for (const file of files) {
//       const formData = new FormData();

//       formData.append("file", file);

//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to upload image");
//       }

//       const data = await response.json();

//       uploadedUrls.push(data.url);
//     }

//     return uploadedUrls;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (loading) return;

//     try {
//       setLoading(true);

//       setStatus("Uploading images...");

//       const imageUrls = await uploadImages();

//       setStatus("Publishing listing...");

//       await createListing({
//         title,
//         description,
//         category,
//         duration,
//         price: Number(price),
//         location,
//         images: imageUrls,
//       });

//       setStatus("Redirecting...");

//       router.push("/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error(error);

//       // alert("Failed to create listing");
//       toast.error("Failed to create listing", {
//         description: "Please try again in a moment.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Dialog open={loading}>
//         <DialogContent
//           className="sm:max-w-md"
//           onInteractOutside={(e: any) => e.preventDefault()}
//           onEscapeKeyDown={(e: any) => e.preventDefault()}
//         >
//           <DialogHeader>
//             <div className="flex justify-center pb-4">
//               <Loader2 className="h-10 w-10 animate-spin" />
//             </div>

//             <DialogTitle className="text-center">Creating Listing</DialogTitle>

//             <DialogDescription className="text-center">
//               {status}
//             </DialogDescription>
//           </DialogHeader>

//           <div className="text-center text-xs text-muted-foreground">
//             Please wait while your property is being published.
//           </div>
//         </DialogContent>
//       </Dialog>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* TIPS */}
//         <Card>
//           <CardContent className="flex gap-4 p-5">
//             <Home className="mt-1 h-5 w-5 text-primary" />

//             <div>
//               <h3 className="font-semibold">Tips for better listings</h3>

//               <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
//                 <li>• Add at least 3 images</li>
//                 <li>• Use a descriptive title</li>
//                 <li>• Include accurate location</li>
//                 <li>• Mention important features</li>
//               </ul>
//             </div>
//           </CardContent>
//         </Card>

//         {/* PROPERTY DETAILS */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Property Details</CardTitle>

//             <CardDescription>
//               Basic information about your property.
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="space-y-5">
//             <div className="space-y-2">
//               <Label>Property Title</Label>

//               <Input
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Modern 3 Bedroom Apartment"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>Description</Label>

//               <Textarea
//                 rows={6}
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Describe the property..."
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>Property Category</Label>

//               <Select value={category} onValueChange={setCategory}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>

//                 <SelectContent>
//                   <SelectItem value="Apartment">Apartment</SelectItem>

//                   <SelectItem value="House">House</SelectItem>

//                   <SelectItem value="Land">Land</SelectItem>

//                   <SelectItem value="Office Space">Office Space</SelectItem>

//                   <SelectItem value="Shop">Shop</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </CardContent>
//         </Card>

//         {/* PRICE + LOCATION */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Pricing & Location</CardTitle>
//           </CardHeader>

//           <CardContent className="grid gap-5 md:grid-cols-2">
//             <div className="space-y-2">
//               <Label>Price</Label>

//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//                   ₦
//                 </span>

//                 <Input
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   type="number"
//                   className="pl-8"
//                   placeholder="5000000"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label>Location</Label>

//               <Input
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Lekki, Lagos"
//                 required
//               />
//             </div>

//             <div className="space-y-3 md:col-span-2">
//               <Label>Payment Duration</Label>

//               <RadioGroup
//                 value={duration}
//                 onValueChange={(value: any) =>
//                   setDuration(value as "month" | "year")
//                 }
//                 className="flex gap-6"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="year" id="year" />

//                   <Label htmlFor="year">Per Year</Label>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="month" id="month" />

//                   <Label htmlFor="month">Per Month</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           </CardContent>
//         </Card>

//         {/* IMAGES */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Property Images</CardTitle>

//             <CardDescription>Upload up to 5 images.</CardDescription>
//           </CardHeader>

//           <CardContent>
//             <label
//               htmlFor="images"
//               className="block cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition hover:bg-muted/50"
//             >
//               <UploadCloud className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />

//               <p className="font-medium">Click to upload images</p>

//               <p className="mt-1 text-sm text-muted-foreground">
//                 PNG, JPG, WEBP (Max 5)
//               </p>
//             </label>

//             <input
//               id="images"
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleImages}
//               className="hidden"
//             />

//             {previews.length > 0 && (
//               <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
//                 {previews.map((preview, index) => (
//                   <div
//                     key={index}
//                     className="relative overflow-hidden rounded-2xl border"
//                   >
//                     <Image
//                       src={preview}
//                       alt=""
//                       width={400}
//                       height={300}
//                       className="h-40 w-full object-cover"
//                     />

//                     <button
//                       type="button"
//                       onClick={() => removeImage(index)}
//                       className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow"
//                     >
//                       <X className="h-4 w-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         <Button type="submit" disabled={loading} size="lg" className="w-full">
//           Create Listing
//         </Button>
//       </form>
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createListing } from "@/actions/listing-actions";
// import Image from "next/image";
// import { toast } from "sonner";
// import { UploadCloud, Loader2, X, Home, ArrowLeft } from "lucide-react";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";

// export default function CreateListingForm() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [duration, setDuration] = useState<"month" | "year">("year");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [files, setFiles] = useState<File[]>([]);
//   const [previews, setPreviews] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("Preparing listing...");

//   const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(e.target.files || []);
//     if (files.length + selectedFiles.length > 5) {
//       toast.error("Maximum of 5 images allowed", {
//         description: "Remove some images before adding more.",
//       });
//       e.target.value = "";
//       return;
//     }
//     setFiles((prev) => [...prev, ...selectedFiles]);
//     const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
//     setPreviews((prev) => [...prev, ...newPreviews]);
//   };

//   const removeImage = (index: number) => {
//     setFiles((prev) => prev.filter((_, i) => i !== index));
//     setPreviews((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImages = async () => {
//     const uploadedUrls: string[] = [];
//     for (const file of files) {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });
//       if (!response.ok) throw new Error("Failed to upload image");
//       const data = await response.json();
//       uploadedUrls.push(data.url);
//     }
//     return uploadedUrls;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (loading) return;
//     try {
//       setLoading(true);
//       setStatus("Uploading images...");
//       const imageUrls = await uploadImages();
//       setStatus("Publishing listing...");
//       await createListing({
//         title,
//         description,
//         category,
//         duration,
//         price: Number(price),
//         location,
//         images: imageUrls,
//       });
//       setStatus("Redirecting...");
//       router.push("/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to create listing", {
//         description: "Please try again in a moment.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
// <Dialog open={loading}>
//   <DialogContent
//     className="sm:max-w-md"
//     onInteractOutside={(e: any) => e.preventDefault()}
//     onEscapeKeyDown={(e: any) => e.preventDefault()}
//   >
//     <DialogHeader>
//       <div className="flex justify-center pb-4">
//         <Loader2 className="h-10 w-10 animate-spin text-primary" />
//       </div>
//       <DialogTitle className="text-center font-bold">
//         Creating Listing
//       </DialogTitle>
//       <DialogDescription className="text-center">
//         {status}
//       </DialogDescription>
//     </DialogHeader>
//     <div className="text-center text-xs text-muted-foreground">
//       Please wait while your property is being published.
//     </div>
//   </DialogContent>
// </Dialog>

//       {/* Grid container locked to the height context from page.tsx */}
//       <div className="h-full w-full grid lg:grid-cols-10 overflow-hidden">

//         {/* LEFT PANEL BANNER: Fixed height, never stretches */}
//         <div className="hidden lg:flex lg:col-span-4 relative h-full p-12 flex-col justify-between overflow-hidden shrink-0">
//           <div className="absolute inset-0">
//             <Image
//               src="/prop-img5.png"
//               alt="Premium Interior Architecture"
//               fill
//               priority
//               className="object-cover select-none"
//             />
//           </div>

//           <div className="relative z-10 self-start">
//             <Link
//               href="/dashboard"
//               className="inline-flex items-center text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white hover:bg-black/80 transition-colors gap-1"
//             >
//               <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard
//             </Link>
//           </div>

//           <div className="relative z-10 space-y-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
//             <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
//               <Home className="h-5 w-5 text-white" />
//             </div>
//             <h1 className="text-3xl font-black tracking-tight text-white xl:text-4xl">
//               List Your Property Development
//             </h1>
//             <p className="text-sm text-zinc-200 leading-relaxed max-w-sm">
//               Reach thousands of qualified buyers and renters by uploading
//               verified asset specifications directly to our network.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT COLUMN TRACK: Handles inner body form layout context independently */}
//         <div className="col-span-10 lg:col-span-6 h-full overflow-y-auto px-4 py-8 sm:px-8 lg:px-12 bg-muted/30">
//           <div className="max-w-2xl mx-auto space-y-6 pb-12">
//             {/* Header only shows on mobile */}
//             <div>
//               <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:hidden">
//                 Create Listing
//               </h2>
//               <p className="text-sm text-muted-foreground mt-1 lg:hidden">
//                 Publish a property listing and start receiving enquiries from interested buyers and tenants.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* TIPS */}
//               <Card className="rounded-2xl shadow-sm">
//                 <CardContent className="flex gap-4 p-5">
//                   <Home className="mt-1 h-5 w-5 text-primary shrink-0" />
//                   <div>
//                     <h3 className="font-semibold">Tips for better listings</h3>
//                     <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
//                       <li>• Add at least 3 images</li>
//                       <li>• Use a descriptive title</li>
//                       <li>• Include accurate location</li>
//                       <li>• Mention important features</li>
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* PROPERTY DETAILS */}
//               <Card className="rounded-2xl shadow-sm overflow-hidden">
//                 <CardHeader>
//                   <CardTitle>Property Details</CardTitle>
//                   <CardDescription>
//                     Basic information about your property.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-5">
//                   <div className="space-y-2">
//                     <Label htmlFor="title">Property Title</Label>
//                     <Input
//                       id="title"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                       placeholder="Modern 3 Bedroom Apartment"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="description">Description</Label>
//                     <Textarea
//                       id="description"
//                       rows={6}
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Describe the property..."
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label>Property Category</Label>
//                     <Select value={category} onValueChange={setCategory}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Apartment">Apartment</SelectItem>
//                         <SelectItem value="House">House</SelectItem>
//                         <SelectItem value="Land">Land</SelectItem>
//                         <SelectItem value="Office Space">Office Space</SelectItem>
//                         <SelectItem value="Shop">Shop</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* PRICE + LOCATION */}
//               <Card className="rounded-2xl shadow-sm overflow-hidden">
//                 <CardHeader>
//                   <CardTitle>Pricing & Location</CardTitle>
//                 </CardHeader>
//                 <CardContent className="grid gap-5 md:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="price">Price</Label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//                         ₦
//                       </span>
//                       <Input
//                         id="price"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         type="number"
//                         className="pl-8"
//                         placeholder="5000000"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="location">Location</Label>
//                     <Input
//                       id="location"
//                       value={location}
//                       onChange={(e) => setLocation(e.target.value)}
//                       placeholder="Lekki, Lagos"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-3 md:col-span-2">
//                     <Label>Payment Duration</Label>
//                     <RadioGroup
//                       value={duration}
//                       onValueChange={(value: any) =>
//                         setDuration(value as "month" | "year")
//                       }
//                       className="flex gap-6"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="year" id="year" />
//                         <Label htmlFor="year" className="cursor-pointer">Per Year</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="month" id="month" />
//                         <Label htmlFor="month" className="cursor-pointer">Per Month</Label>
//                       </div>
//                     </RadioGroup>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* IMAGES */}
//               <Card className="rounded-2xl shadow-sm overflow-hidden">
//                 <CardHeader>
//                   <CardTitle>Property Images</CardTitle>
//                   <CardDescription>Upload up to 5 images.</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <label
//                     htmlFor="images"
//                     className="block cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition hover:bg-muted/50"
//                   >
//                     <UploadCloud className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
//                     <p className="font-medium">Click to upload images</p>
//                     <p className="mt-1 text-sm text-muted-foreground">
//                       PNG, JPG, WEBP (Max 5)
//                     </p>
//                   </label>
//                   <input
//                     id="images"
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={handleImages}
//                     className="hidden"
//                   />

//                   {previews.length > 0 && (
//                     <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
//                       {previews.map((preview, index) => (
//                         <div
//                           key={index}
//                           className="relative overflow-hidden rounded-2xl border aspect-[4/3]"
//                         >
//                           <Image
//                             src={preview}
//                             alt="Listing Asset Preview"
//                             fill
//                             className="object-cover"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => removeImage(index)}
//                             className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow hover:bg-red-600 transition-colors"
//                           >
//                             <X className="h-4 w-4" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               <Button type="submit" disabled={loading} size="lg" className="w-full h-11 rounded-xl font-bold pt-0.5">
//                 Create Listing
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// // }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createListing } from "@/actions/listing-actions";
// import Image from "next/image";
// import { toast } from "sonner";
// import { UploadCloud, Loader2, X, Home, ArrowLeft } from "lucide-react";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";

// export default function CreateListingForm() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [duration, setDuration] = useState<"month" | "year">("year");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [files, setFiles] = useState<File[]>([]);
//   const [previews, setPreviews] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("Preparing listing...");

//   const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(e.target.files || []);
//     if (files.length + selectedFiles.length > 5) {
//       toast.error("Maximum of 5 images allowed", {
//         description: "Remove some images before adding more.",
//       });
//       e.target.value = "";
//       return;
//     }
//     setFiles((prev) => [...prev, ...selectedFiles]);
//     const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
//     setPreviews((prev) => [...prev, ...newPreviews]);
//   };

//   const removeImage = (index: number) => {
//     setFiles((prev) => prev.filter((_, i) => i !== index));
//     setPreviews((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImages = async () => {
//     const uploadedUrls: string[] = [];
//     for (const file of files) {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });
//       if (!response.ok) throw new Error("Failed to upload image");
//       const data = await response.json();
//       uploadedUrls.push(data.url);
//     }
//     return uploadedUrls;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (loading) return;
//     try {
//       setLoading(true);
//       setStatus("Uploading images...");
//       const imageUrls = await uploadImages();
//       setStatus("Publishing listing...");
//       await createListing({
//         title,
//         description,
//         category,
//         duration,
//         price: Number(price),
//         location,
//         images: imageUrls,
//       });
//       setStatus("Redirecting...");
//       router.push("/dashboard");
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to create listing", {
//         description: "Please try again in a moment.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Dialog open={loading}>
//         <DialogContent
//           className="sm:max-w-md"
//           onInteractOutside={(e: any) => e.preventDefault()}
//           onEscapeKeyDown={(e: any) => e.preventDefault()}
//         >
//           <DialogHeader>
//             <div className="flex justify-center pb-4">
//               <Loader2 className="h-10 w-10 animate-spin text-primary" />
//             </div>
//             <DialogTitle className="text-center font-bold">
//               Creating Listing
//             </DialogTitle>
//             <DialogDescription className="text-center">
//               {status}
//             </DialogDescription>
//           </DialogHeader>
//           <div className="text-center text-xs text-muted-foreground">
//             Please wait while your property is being published.
//           </div>
//         </DialogContent>
//       </Dialog>

//       <div className="h-full w-full grid lg:grid-cols-10 overflow-hidden">
//         {/* LEFT PANEL BANNER */}
//         <div className="hidden lg:flex lg:col-span-4 relative h-full p-12 flex-col justify-between overflow-hidden shrink-0">
//           <div className="absolute inset-0">
//             <Image
//               src="/prop-img5.png"
//               alt="Premium Interior Architecture"
//               fill
//               priority
//               className="object-cover select-none"
//             />
//           </div>

//           <div className="relative z-10 self-start">
//             <Link
//               href="/dashboard"
//               className="inline-flex items-center text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white hover:bg-black/80 transition-colors gap-1"
//             >
//               <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard
//             </Link>
//           </div>

//           <div className="relative z-10 space-y-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
//             <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
//               <Home className="h-5 w-5 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold tracking-tight text-white xl:text-3xl">
//               List Your Property Development
//             </h1>
//             <p className="text-sm text-zinc-200 leading-relaxed max-w-sm">
//               Reach thousands of qualified buyers and renters by uploading
//               verified asset specifications directly to our network.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT COLUMN TRACK */}
//         <div className="col-span-10 lg:col-span-6 h-full overflow-y-auto px-4 py-6 sm:px-8 lg:px-12 bg-muted/30">
//           <div className="max-w-2xl mx-auto space-y-4 pb-8">
//             {/* Mobile Header */}
//             <div className="lg:hidden mb-2">
//               <h2 className="text-2xl font-black tracking-tight">
//                 Create Listing
//               </h2>
//               <p className="text-xs text-muted-foreground mt-0.5">
//                 Publish a property listing and start receiving enquiries.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* FIXED TIPS CARD: Converted to short row flex layouts */}
//               <Card className="rounded-xl shadow-sm border-neutral-200/60">
//                 <CardContent className="p-3 flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
//                     <Home className="h-4 w-4" />
//                   </div>
//                   <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
//                     <span className="font-semibold text-foreground text-sm mr-1">
//                       Quick Checklist:
//                     </span>
//                     <span>• Min 3 clear images</span>
//                     <span>• Detailed title</span>
//                     <span>• Accurate location</span>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* CORE SPECIFICATIONS (Merged Info Cards to Minimize Track Height) */}
//               <Card className="rounded-xl shadow-sm border-neutral-200/60 overflow-hidden">
//                 <CardHeader className="p-4 pb-2">
//                   <CardTitle className="text-lg">
//                     Property Specifications
//                   </CardTitle>
//                   <CardDescription className="text-xs">
//                     Provide the baseline identity parameters of your asset.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-4 pt-2 space-y-4">
//                   {/* Two-Column input split layout context */}
//                   <div className="grid gap-4 md:grid-cols-2">
//                     <div className="space-y-1.5">
//                       <Label htmlFor="title" className="text-xs font-semibold">
//                         Property Title
//                       </Label>
//                       <Input
//                         id="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         placeholder="Modern 3 Bedroom Apartment"
//                         className="h-9 text-sm"
//                         required
//                       />
//                     </div>

//                     <div className="space-y-1.5">
//                       <Label className="text-xs font-semibold">
//                         Property Category
//                       </Label>
//                       <Select value={category} onValueChange={setCategory}>
//                         <SelectTrigger className="h-9 text-sm">
//                           <SelectValue placeholder="Select category" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="Apartment">Apartment</SelectItem>
//                           <SelectItem value="House">House</SelectItem>
//                           <SelectItem value="Land">Land</SelectItem>
//                           <SelectItem value="Office Space">
//                             Office Space
//                           </SelectItem>
//                           <SelectItem value="Shop">Shop</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   {/* Pricing Matrix Split Layout */}
//                   <div className="grid gap-4 md:grid-cols-2">
//                     <div className="space-y-1.5">
//                       <Label htmlFor="price" className="text-xs font-semibold">
//                         Price Valuation
//                       </Label>
//                       <div className="relative">
//                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
//                           ₦
//                         </span>
//                         <Input
//                           id="price"
//                           value={price}
//                           onChange={(e) => setPrice(e.target.value)}
//                           type="number"
//                           className="pl-7 h-9 text-sm"
//                           placeholder="5000000"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-1.5">
//                       <Label
//                         htmlFor="location"
//                         className="text-xs font-semibold"
//                       >
//                         Location / Address
//                       </Label>
//                       <Input
//                         id="location"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="Lekki, Lagos"
//                         className="h-9 text-sm"
//                         required
//                       />
//                     </div>
//                   </div>

//                   {/* Radio Group and Duration Metrics */}
//                   <div className="bg-muted/40 p-2.5 rounded-lg flex flex-col gap-1 border border-dashed">
//                     <Label className="text-xs font-semibold text-muted-foreground">
//                       Payment Duration Frequency
//                     </Label>
//                     <RadioGroup
//                       value={duration}
//                       onValueChange={(value: any) =>
//                         setDuration(value as "month" | "year")
//                       }
//                       className="flex gap-4"
//                     >
//                       <div className="flex items-center space-x-1.5">
//                         <RadioGroupItem
//                           value="year"
//                           id="year"
//                           className="h-4 w-4"
//                         />
//                         <Label
//                           htmlFor="year"
//                           className="text-xs cursor-pointer font-medium"
//                         >
//                           Per Year
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-1.5">
//                         <RadioGroupItem
//                           value="month"
//                           id="month"
//                           className="h-4 w-4"
//                         />
//                         <Label
//                           htmlFor="month"
//                           className="text-xs cursor-pointer font-medium"
//                         >
//                           Per Month
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </div>

//                   <div className="space-y-1.5">
//                     <Label
//                       htmlFor="description"
//                       className="text-xs font-semibold"
//                     >
//                       Comprehensive Description
//                     </Label>
//                     <Textarea
//                       id="description"
//                       rows={3}
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Describe architectural features, infrastructure details..."
//                       className="text-sm resize-none"
//                       required
//                     />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* IMAGES CARD */}
//               <Card className="rounded-xl shadow-sm border-neutral-200/60 overflow-hidden">
//                 <CardHeader className="p-4 pb-2">
//                   <CardTitle className="text-lg">Property Images</CardTitle>
//                   <CardDescription className="text-xs">
//                     Upload up to 5 validation photos.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-4 pt-2">
//                   <label
//                     htmlFor="images"
//                     className="block cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition hover:bg-muted/50 bg-muted/20"
//                   >
//                     <UploadCloud className="mx-auto mb-1.5 h-7 w-7 text-muted-foreground" />
//                     <p className="text-xs font-semibold">
//                       Click to browse media files
//                     </p>
//                     <p className="text-[10px] text-muted-foreground mt-0.5">
//                       PNG, JPG or WEBP formats accepted
//                     </p>
//                   </label>
//                   <input
//                     id="images"
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={handleImages}
//                     className="hidden"
//                   />

//                   {previews.length > 0 && (
//                     <div className="mt-4 grid grid-cols-3 gap-3">
//                       {previews.map((preview, index) => (
//                         <div
//                           key={index}
//                           className="relative overflow-hidden rounded-xl border aspect-[4/3] bg-muted shadow-xs"
//                         >
//                           <Image
//                             src={preview}
//                             alt="Listing Asset Preview"
//                             fill
//                             className="object-cover"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => removeImage(index)}
//                             className="absolute right-1.5 top-1.5 rounded-full bg-red-500 p-1 text-white shadow hover:bg-red-600 transition-colors"
//                           >
//                             <X className="h-3 w-3" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               <Button
//                 type="submit"
//                 disabled={loading}
//                 size="lg"
//                 className="w-full h-10 text-sm rounded-xl font-bold"
//               >
//                 Create Listing
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createListing } from "@/actions/listing-actions";
import Image from "next/image";
import { toast } from "sonner";
import { UploadCloud, Loader2, X, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function CreateListingForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState<"month" | "year">("year");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Preparing listing...");

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (files.length + selectedFiles.length > 5) {
      toast.error("Maximum of 5 images allowed", {
        description: "Remove some images before adding more.",
      });
      e.target.value = "";
      return;
    }
    setFiles((prev) => [...prev, ...selectedFiles]);
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    const uploadedUrls: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Failed to upload image");
      const data = await response.json();
      uploadedUrls.push(data.url);
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    try {
      setLoading(true);
      setStatus("Uploading images...");
      const imageUrls = await uploadImages();
      setStatus("Publishing listing...");
      await createListing({
        title,
        description,
        category,
        // Optional tracking: pass null or omit duration completely if it's Land
        // duration: category === "Land" ? undefined : duration,
        // 🟢 Pass a default fallback value if it's Land since your UI will hide it anyway!
        duration: category === "Land" ? "year" : duration,
        price: Number(price),
        location,
        images: imageUrls,
      });
      setStatus("Redirecting...");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create listing", {
        description: "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={loading}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e: any) => e.preventDefault()}
          onEscapeKeyDown={(e: any) => e.preventDefault()}
        >
          <DialogHeader>
            <div className="flex justify-center pb-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
            <DialogTitle className="text-center font-bold">
              Creating Listing
            </DialogTitle>
            <DialogDescription className="text-center">
              {status}
            </DialogDescription>
          </DialogHeader>
          <div className="text-center text-xs text-muted-foreground">
            Please wait while your property is being published.
          </div>
        </DialogContent>
      </Dialog>

      <div className="h-full w-full grid lg:grid-cols-10 overflow-hidden">
        {/* LEFT PANEL BANNER */}
        <div className="hidden lg:flex lg:col-span-4 relative h-full p-12 flex-col justify-between overflow-hidden shrink-0">
          <div className="absolute inset-0">
            <Image
              src="/prop-img5.png"
              alt="Premium Interior Architecture"
              fill
              priority
              className="object-cover select-none"
            />
          </div>

          <div className="relative z-10 self-start">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white hover:bg-black/80 transition-colors gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard
            </Link>
          </div>

          <div className="relative z-10 space-y-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white xl:text-3xl">
              List Your Property Development
            </h1>
            <p className="text-sm text-zinc-200 leading-relaxed max-w-sm">
              Reach thousands of qualified buyers and renters by uploading
              verified asset specifications directly to our network.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN TRACK */}
        <div className="col-span-10 lg:col-span-6 h-full overflow-y-auto px-4 py-6 sm:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-2xl mx-auto space-y-4 pb-8">
            {/* Mobile Header */}
            <div className="lg:hidden mb-2">
              <h2 className="text-2xl font-black tracking-tight">
                Create Listing
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Publish a property listing and start receiving enquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FIXED TIPS CARD */}
              <Card className="rounded-xl shadow-sm border-neutral-200/60">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Home className="h-4 w-4" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground text-sm mr-1">
                      Quick Checklist:
                    </span>
                    <span>• Min 3 clear images</span>
                    <span>• Detailed title</span>
                    <span>• Accurate location</span>
                  </div>
                </CardContent>
              </Card>

              {/* CORE SPECIFICATIONS */}
              <Card className="rounded-xl shadow-sm border-neutral-200/60 overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">
                    Property Specifications
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Provide the baseline identity parameters of your asset.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="title" className="text-xs font-semibold">
                        Property Title
                      </Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Modern 3 Bedroom Apartment"
                        className="h-9 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">
                        Property Category
                      </Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="h-9 text-sm">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
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
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="price" className="text-xs font-semibold">
                        Price Valuation
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                          ₦
                        </span>
                        <Input
                          id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="number"
                          className="pl-7 h-9 text-sm"
                          placeholder="5000000"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="location"
                        className="text-xs font-semibold"
                      >
                        Location / Address
                      </Label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Lekki, Lagos"
                        className="h-9 text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* CONDITIONALLY RENDERED DURATION RADIO GROUP */}
                  {category !== "Land" && (
                    <div className="bg-muted/40 p-2.5 rounded-lg flex flex-col gap-1 border border-dashed transition-all">
                      <Label className="text-xs font-semibold text-muted-foreground">
                        Payment Duration Frequency
                      </Label>
                      <RadioGroup
                        value={duration}
                        onValueChange={(value: any) =>
                          setDuration(value as "month" | "year")
                        }
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-1.5">
                          <RadioGroupItem
                            value="year"
                            id="year"
                            className="h-4 w-4"
                          />
                          <Label
                            htmlFor="year"
                            className="text-xs cursor-pointer font-medium"
                          >
                            Per Year
                          </Label>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <RadioGroupItem
                            value="month"
                            id="month"
                            className="h-4 w-4"
                          />
                          <Label
                            htmlFor="month"
                            className="text-xs cursor-pointer font-medium"
                          >
                            Per Month
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="description"
                      className="text-xs font-semibold"
                    >
                      Comprehensive Description
                    </Label>
                    <Textarea
                      id="description"
                      // rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe architectural features, infrastructure details..."
                      className="h-24 text-sm resize-none"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* IMAGES CARD */}
              <Card className="rounded-xl shadow-sm border-neutral-200/60 overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">Property Images</CardTitle>
                  <CardDescription className="text-xs">
                    Upload up to 5 validation photos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <label
                    htmlFor="images"
                    className="block cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition hover:bg-muted/50 bg-muted/20"
                  >
                    <UploadCloud className="mx-auto mb-1.5 h-7 w-7 text-muted-foreground" />
                    <p className="text-xs font-semibold">
                      Click to browse media files
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      PNG, JPG or WEBP formats accepted
                    </p>
                  </label>
                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImages}
                    className="hidden"
                  />

                  {previews.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {previews.map((preview, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-xl border aspect-[4/3] bg-muted shadow-xs"
                        >
                          <Image
                            src={preview}
                            alt="Listing Asset Preview"
                            fill
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute right-1.5 top-1.5 rounded-full bg-red-500 p-1 text-white shadow hover:bg-red-600 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full h-10 text-sm rounded-xl font-bold"
              >
                Create Listing
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
