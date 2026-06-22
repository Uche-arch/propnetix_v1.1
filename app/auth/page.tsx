// "use client";

// import { useState } from "react";
// import {
//   RegisterLink,
//   LoginLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Loader2, ArrowRight } from "lucide-react";

// export default function AuthPage() {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // REPLACE THESE WITH YOUR ACTUAL KINDE CONNECTION IDS
//   const GOOGLE_CONN_ID = "conn_019d40c555fa9e4ad045513e5c0b69b7";
//   const FACEBOOK_CONN_ID = "conn_019edc762857f8d88e64903b96760f5c";

//   const handleEmailAuth = (e: React.FormEvent) => {
//     setIsLoading(true);
//     // The form submission is handled safely via the child Kinde Links
//   };

//   return (
//     <div className="container relative min-h-screen flex items-center justify-center lg:px-0">
//       <Tabs defaultValue="login" className="w-full max-w-[400px]">
//         <TabsList className="grid w-full grid-cols-2 mb-4">
//           <TabsTrigger value="login">Sign In</TabsTrigger>
//           <TabsTrigger value="signup">Sign Up</TabsTrigger>
//         </TabsList>

//         {/* ================= SIGN IN TAB ================= */}
//         <TabsContent value="login">
//           <Card className="border-border/60 shadow-sm rounded-xl">
//             <CardHeader className="space-y-1">
//               <CardTitle className="text-2xl font-bold tracking-tight">
//                 Welcome back
//               </CardTitle>
//               <CardDescription>
//                 Choose your preferred sign in method below
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="grid gap-4">
//               {/* Social Buttons */}
//               <div className="grid grid-cols-2 gap-3">
//                 {/* <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink authUrlParams={{ connection_id: GOOGLE_CONN_ID }}>
//                     <Chrome className="mr-2 h-4 w-4" /> Google
//                   </LoginLink>
//                 </Button> */}
//                 <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink authUrlParams={{ connection_id: GOOGLE_CONN_ID }}>
//                     <svg
//                       className="mr-2 h-4 w-4"
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fab"
//                       data-icon="google"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 488 512"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
//                       ></path>
//                     </svg>
//                     Google
//                   </LoginLink>
//                 </Button>
//                 {/* <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink
//                     authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                   >
//                     <Facebook className="mr-2 h-4 w-4 fill-current" /> Facebook
//                   </LoginLink>
//                 </Button> */}
//                 <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink
//                     authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                   >
//                     <svg
//                       className="mr-2 h-4 w-4 fill-current"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                     </svg>
//                     Facebook
//                   </LoginLink>
//                 </Button>
//               </div>

//               <div className="relative my-2">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-muted" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-card px-2 text-muted-foreground">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               {/* Passwordless Email Flow */}
//               <div className="grid gap-2">
//                 <Label htmlFor="email_login">Email address</Label>
//                 <Input
//                   id="email_login"
//                   type="email"
//                   placeholder="name@example.com"
//                   className="rounded-xl"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 className="w-full rounded-xl h-10 font-medium"
//                 disabled={!email || isLoading}
//                 asChild
//                 onClick={handleEmailAuth}
//               >
//                 <LoginLink
//                   authUrlParams={{
//                     connection_id: "kinde_builtin_passwordless",
//                     login_hint: email,
//                   }}
//                 >
//                   {isLoading ? (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     <>
//                       Continue <ArrowRight className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </LoginLink>
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>

//         {/* ================= SIGN UP TAB ================= */}
//         <TabsContent value="signup">
//           <Card className="border-border/60 shadow-sm rounded-xl">
//             <CardHeader className="space-y-1">
//               <CardTitle className="text-2xl font-bold tracking-tight">
//                 Create an account
//               </CardTitle>
//               <CardDescription>
//                 Enter your details to register your profile
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="grid gap-4">
//               <div className="grid grid-cols-2 gap-3">
//                 <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink authUrlParams={{ connection_id: GOOGLE_CONN_ID }}>
//                     <svg
//                       className="mr-2 h-4 w-4"
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fab"
//                       data-icon="google"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 488 512"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
//                       ></path>
//                     </svg>
//                     Google
//                   </LoginLink>
//                 </Button>
//                 <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <LoginLink
//                     authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                   >
//                     <svg
//                       className="mr-2 h-4 w-4 fill-current"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                     </svg>
//                     Facebook
//                   </LoginLink>
//                 </Button>
//                 {/* <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <RegisterLink
//                     authUrlParams={{ connection_id: GOOGLE_CONN_ID }}
//                   >
//                     <Chrome className="mr-2 h-4 w-4" /> Google
//                   </RegisterLink>
//                 </Button>
//                 <Button variant="outline" className="rounded-xl h-10" asChild>
//                   <RegisterLink
//                     authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                   >
//                     <Facebook className="mr-2 h-4 w-4 fill-current" /> Facebook
//                   </RegisterLink>
//                 </Button> */}
//               </div>

//               <div className="relative my-2">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-muted" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-card px-2 text-muted-foreground">
//                     Or register with
//                   </span>
//                 </div>
//               </div>

//               <div className="grid gap-2">
//                 <Label htmlFor="email_signup">Email address</Label>
//                 <Input
//                   id="email_signup"
//                   type="email"
//                   placeholder="name@example.com"
//                   className="rounded-xl"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 className="w-full rounded-xl h-10 font-medium"
//                 disabled={!email || isLoading}
//                 asChild
//                 onClick={handleEmailAuth}
//               >
//                 <RegisterLink
//                   authUrlParams={{
//                     connection_id: "kinde_builtin_passwordless",
//                     login_hint: email,
//                   }}
//                 >
//                   {isLoading ? (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     <>
//                       Sign Up <ArrowRight className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </RegisterLink>
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// "use client";
// import authBanner from "@/public/prop-img.png";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation"; // 1. Import search params hook
// import Image from "next/image";
// import {
//   RegisterLink,
//   LoginLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Loader2, ArrowRight } from "lucide-react";

// export default function AuthPage() {
//   const searchParams = useSearchParams();
//   const initialTab = searchParams.get("tab") === "signup" ? "signup" : "login"; // Fallback to login

//   const [activeTab, setActiveTab] = useState(initialTab); // 2. Drive the state with the parameter
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // 3. Keep tab state synchronized if they click 'Sign Up' while already on the page
//   useEffect(() => {
//     const tab = searchParams.get("tab");
//     if (tab === "signup" || tab === "login") {
//       setActiveTab(tab);
//     }
//   }, [searchParams]);

//   //   const [email, setEmail] = useState("");
//   //   const [isLoading, setIsLoading] = useState(false);

// // PULL DIRECTLY FROM ENVIRONMENT VARIABLES Safely
//   const GOOGLE_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "";
//   const FACEBOOK_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_FACEBOOK || "";
//   const EMAIL_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL || "";

//   const handleEmailAuth = () => {
//     setIsLoading(true);
//   };

//   return (
//     <div className="w-full min-h-screen grid lg:grid-cols-2">
//       {/* ================= LEFT SIDE: HERO IMAGE PANORAMA ================= */}
//       <div className="relative hidden lg:flex flex-col h-full bg-muted p-10 text-white dark:border-r overflow-hidden">
//         {/* Decorative subtle background color tint over image overlay */}
//         <div className="absolute inset-0 bg-zinc-950/20 z-10" />

//         <Image
//         //   src="@/"
//             src={authBanner}
//           alt="Authentication background banner"
//           fill
//           priority
//           className="object-cover object-center select-none"
//         />

//         {/* Floating Branding Header Content */}
//         {/* <div className="relative z-20 flex items-center gap-2 text-lg font-semibold tracking-tight backdrop-blur-md bg-black/10 px-4 py-2 rounded-xl w-fit border border-white/10">
//           <svg
//             className="h-5 w-5 fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//           </svg>
//           PropNetix
//         </div> */}

//         {/* Testimonial/Slogan section at the absolute bottom corner */}
//         <div className="relative z-20 mt-auto backdrop-blur-md bg-black/20 p-6 rounded-2xl border border-white/10 max-w-md">
//           <blockquote className="space-y-2">
//             <p className="text-base font-medium leading-relaxed">
//               "Managing listings and parsing asset data has never been this
//               seamless. The entire design system is exceptionally clean."
//             </p>
//             <footer className="text-xs text-white/70 font-light">
//               — Internal Platform Operations
//             </footer>
//           </blockquote>
//         </div>
//       </div>

//       {/* ================= RIGHT SIDE: AUTHENTICATION INTERFACE ================= */}
//       <div className="flex items-center justify-center p-6 sm:p-10 bg-background">
//         <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="login" className="w-full max-w-[400px]">
//           <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted rounded-xl">
//             <TabsTrigger
//               value="login"
//               className="rounded-lg font-medium text-sm"
//             >
//               Sign In
//             </TabsTrigger>
//             <TabsTrigger
//               value="signup"
//               className="rounded-lg font-medium text-sm"
//             >
//               Sign Up
//             </TabsTrigger>
//           </TabsList>

//           {/* ================= SIGN IN TAB ================= */}
//           <TabsContent value="login">
//             <Card className="border-border/60 shadow-xs rounded-xl bg-card">
//               <CardHeader className="space-y-1.5 pb-5">
//                 <CardTitle className="text-2xl font-medium tracking-tight text-foreground">
//                   Welcome back
//                 </CardTitle>
//                 <CardDescription className="text-sm text-muted-foreground">
//                   Choose your preferred sign in method below
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="grid gap-4">
//                 {/* Social Buttons */}
//                 <div className="grid grid-cols-2 gap-3">
//                   <Button
//                     variant="outline"
//                     className="rounded-xl h-10 border-border/80 hover:bg-muted"
//                     asChild
//                   >
//                     <LoginLink
//                       authUrlParams={{ connection_id: GOOGLE_CONN_ID }}
//                     >
//                       <svg
//                         className="mr-2 h-4 w-4"
//                         aria-hidden="true"
//                         viewBox="0 0 488 512"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
//                         />
//                       </svg>
//                       Google
//                     </LoginLink>
//                   </Button>

//                   <Button
//                     variant="outline"
//                     className="rounded-xl h-10 border-border/80 hover:bg-muted"
//                     asChild
//                   >
//                     <LoginLink
//                       authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                     >
//                       <svg
//                         className="mr-2 h-4 w-4 fill-current"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                       </svg>
//                       Facebook
//                     </LoginLink>
//                   </Button>
//                 </div>

//                 <div className="relative my-1">
//                   <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t border-muted" />
//                   </div>
//                   <div className="relative flex justify-center text-xs uppercase">
//                     <span className="bg-card px-2.5 text-muted-foreground font-medium tracking-wide">
//                       Or continue with
//                     </span>
//                   </div>
//                 </div>

//                 {/* Passwordless Email Flow */}
//                 <div className="grid gap-1.5">
//                   <Label htmlFor="email_login" className="text-sm font-medium">
//                     Email address
//                   </Label>
//                   <Input
//                     required
//                     id="email_login"
//                     type="email"
//                     placeholder="name@example.com"
//                     className="rounded-xl h-10 border-border/80"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </CardContent>

//               <CardFooter className="pt-2">
//                 <Button
//                   className="w-full rounded-xl h-10 font-semibold shadow-xs transition-colors"
//                   disabled={!email || isLoading}
//                   asChild
//                   onClick={handleEmailAuth}
//                 >
//                   {/* <LoginLink
//                     authUrlParams={{
//                       connection_id: "kinde_builtin_passwordless",
//                       login_hint: email,
//                     }}
//                   > */}
//                   {/* // 2. Swap it into your LoginLink inside the CardFooter: */}
//                   <LoginLink
//                     authUrlParams={{
//                       connection_id: EMAIL_CONN_ID, // Use the real ID variable here
//                       login_hint: email,
//                     }}
//                   >
//                     {/* Continue <ArrowRight className="ml-2 h-4 w-4" /> */}
//                     {/* </LoginLink> */}
//                     {isLoading ? (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     ) : (
//                       <>
//                         Continue <ArrowRight className="ml-2 h-4 w-4" />
//                       </>
//                     )}
//                   </LoginLink>
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           {/* ================= SIGN UP TAB ================= */}
//           <TabsContent value="signup">
//             <Card className="border-border/60 shadow-xs rounded-xl bg-card">
//               <CardHeader className="space-y-1.5 pb-5">
//                 <CardTitle className="text-2xl font-medium tracking-tight text-foreground">
//                   Create an account
//                 </CardTitle>
//                 <CardDescription className="text-sm text-muted-foreground">
//                   Enter your details to register your profile
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="grid gap-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   <Button
//                     variant="outline"
//                     className="rounded-xl h-10 border-border/80 hover:bg-muted"
//                     asChild
//                   >
//                     <RegisterLink
//                       authUrlParams={{ connection_id: GOOGLE_CONN_ID }}
//                     >
//                       <svg
//                         className="mr-2 h-4 w-4"
//                         aria-hidden="true"
//                         viewBox="0 0 488 512"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
//                         />
//                       </svg>
//                       Google
//                     </RegisterLink>
//                   </Button>

//                   <Button
//                     variant="outline"
//                     className="rounded-xl h-10 border-border/80 hover:bg-muted"
//                     asChild
//                   >
//                     <RegisterLink
//                       authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}
//                     >
//                       <svg
//                         className="mr-2 h-4 w-4 fill-current"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                       </svg>
//                       Facebook
//                     </RegisterLink>
//                   </Button>
//                 </div>

//                 <div className="relative my-1">
//                   <div className="absolute inset-0 flex items-center">
//                     <span className="w-full border-t border-muted" />
//                   </div>
//                   <div className="relative flex justify-center text-xs uppercase">
//                     <span className="bg-card px-2.5 text-muted-foreground font-medium tracking-wide">
//                       Or register with
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid gap-1.5">
//                   <Label htmlFor="email_signup" className="text-sm font-medium">
//                     Email address
//                   </Label>
//                   <Input
//                     id="email_signup"
//                     type="email"
//                     placeholder="name@example.com"
//                     className="rounded-xl h-10 border-border/80"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </CardContent>

//               <CardFooter className="pt-2">
//                 <Button
//                   className="w-full rounded-xl h-10 font-semibold shadow-xs transition-colors"
//                   disabled={!email || isLoading}
//                   asChild
//                   onClick={handleEmailAuth}
//                 >
//                   {/* // 3. Do the exact same thing for the RegisterLink in the Sign Up tab: */}
//                   <RegisterLink
//                     authUrlParams={{
//                       connection_id: EMAIL_CONN_ID, // Use the real ID variable here
//                       login_hint: email,
//                     }}
//                   >
//                     {/* Sign Up <ArrowRight className="ml-2 h-4 w-4" /> */}
//                     {/* </RegisterLink> */}
//                     {isLoading ? (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     ) : (
//                       <>
//                         Sign Up <ArrowRight className="ml-2 h-4 w-4" />
//                       </>
//                     )}
//                   </RegisterLink>
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }


"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import authBanner from "@/public/prop-img.png";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, ArrowRight } from "lucide-react";

// 1. Loader component shown while Next.js prepares the client parameters
function AuthLoading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground font-medium animate-pulse">
          Securing authentication context...
        </p>
      </div>
    </div>
  );
}

// 2. Main interface separated safely into its own component block
function AuthContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "signup" ? "signup" : "login";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "signup" || tab === "login") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const GOOGLE_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "";
  const FACEBOOK_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_FACEBOOK || "";
  const EMAIL_CONN_ID = process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL || "";

  const handleEmailAuth = () => {
    setIsLoading(true);
  };

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2">
      {/* ================= LEFT SIDE: HERO IMAGE PANORAMA ================= */}
      <div className="relative hidden lg:flex flex-col h-full bg-muted p-10 text-white dark:border-r overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950/20 z-10" />

        <Image
          src={authBanner}
          alt="Authentication background banner"
          fill
          priority
          className="object-cover object-center select-none"
        />

        <div className="relative z-20 mt-auto backdrop-blur-md bg-black/20 p-6 rounded-2xl border border-white/10 max-w-md">
          <blockquote className="space-y-2">
            <p className="text-base font-medium leading-relaxed">
              "Managing listings and parsing asset data has never been this
              seamless. The entire design system is exceptionally clean."
            </p>
            <footer className="text-xs text-white/70 font-light">
              — Internal Platform Operations
            </footer>
          </blockquote>
        </div>
      </div>

      {/* ================= RIGHT SIDE: AUTHENTICATION INTERFACE ================= */}
      <div className="flex items-center justify-center p-6 sm:p-10 bg-background">
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="login" className="w-full max-w-[400px]">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted rounded-xl">
            <TabsTrigger value="login" className="rounded-lg font-medium text-sm">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="rounded-lg font-medium text-sm">
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* ================= SIGN IN TAB ================= */}
          <TabsContent value="login">
            <Card className="border-border/60 shadow-xs rounded-xl bg-card">
              <CardHeader className="space-y-1.5 pb-5">
                <CardTitle className="text-2xl font-medium tracking-tight text-foreground">
                  Welcome back
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Choose your preferred sign in method below
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-xl h-10 border-border/80 hover:bg-muted" asChild>
                    <LoginLink authUrlParams={{ connection_id: GOOGLE_CONN_ID }}>
                      <svg className="mr-2 h-4 w-4" aria-hidden="true" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                      </svg>
                      Google
                    </LoginLink>
                  </Button>

                  <Button variant="outline" className="rounded-xl h-10 border-border/80 hover:bg-muted" asChild>
                    <LoginLink authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}>
                      <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </LoginLink>
                  </Button>
                </div>

                <div className="relative my-1">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-muted" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2.5 text-muted-foreground font-medium tracking-wide">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="email_login" className="text-sm font-medium">
                    Email address
                  </Label>
                  <Input
                    required
                    id="email_login"
                    type="email"
                    placeholder="name@example.com"
                    className="rounded-xl h-10 border-border/80"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  className="w-full rounded-xl h-10 font-semibold shadow-xs transition-colors"
                  disabled={!email || isLoading}
                  asChild
                  onClick={handleEmailAuth}
                >
                  <LoginLink authUrlParams={{ connection_id: EMAIL_CONN_ID, login_hint: email }}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </LoginLink>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ================= SIGN UP TAB ================= */}
          <TabsContent value="signup">
            <Card className="border-border/60 shadow-xs rounded-xl bg-card">
              <CardHeader className="space-y-1.5 pb-5">
                <CardTitle className="text-2xl font-medium tracking-tight text-foreground">
                  Create an account
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Enter your details to register your profile
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-xl h-10 border-border/80 hover:bg-muted" asChild>
                    <RegisterLink authUrlParams={{ connection_id: GOOGLE_CONN_ID }}>
                      <svg className="mr-2 h-4 w-4" aria-hidden="true" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                      </svg>
                      Google
                    </RegisterLink>
                  </Button>

                  <Button variant="outline" className="rounded-xl h-10 border-border/80 hover:bg-muted" asChild>
                    <RegisterLink authUrlParams={{ connection_id: FACEBOOK_CONN_ID }}>
                      <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </RegisterLink>
                  </Button>
                </div>

                <div className="relative my-1">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-muted" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2.5 text-muted-foreground font-medium tracking-wide">
                      Or register with
                    </span>
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="email_signup" className="text-sm font-medium">
                    Email address
                  </Label>
                  <Input
                    id="email_signup"
                    type="email"
                    placeholder="name@example.com"
                    className="rounded-xl h-10 border-border/80"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  className="w-full rounded-xl h-10 font-semibold shadow-xs transition-colors"
                  disabled={!email || isLoading}
                  asChild
                  onClick={handleEmailAuth}
                >
                  <RegisterLink authUrlParams={{ connection_id: EMAIL_CONN_ID, login_hint: email }}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </RegisterLink>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// 3. Clean default export wrapping the layout context inside React Suspense
export default function AuthPage() {
  return (
    <Suspense fallback={<AuthLoading />}>
      <AuthContent />
    </Suspense>
  );
}