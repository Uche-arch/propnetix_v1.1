// "use client";

// import { useState } from "react";

// export default function ListingImageCarousel({
//   images,
//   title,
// }: {
//   images: string[];
//   title: string;
// }) {
//   const [current, setCurrent] = useState(0);

//   if (!images?.length) return null;

//   const next = () => {
//     setCurrent((prev) =>
//       prev === images.length - 1
//         ? 0
//         : prev + 1
//     );
//   };

//   const prev = () => {
//     setCurrent((prev) =>
//       prev === 0
//         ? images.length - 1
//         : prev - 1
//     );
//   };

//   return (
//     <div className="relative mb-4">
//       <img
//         src={images[current]}
//         alt={title}
//         className="h-60 w-full rounded-lg object-cover"
//       />

//       {images.length > 1 && (
//         <>
//           <button
//             onClick={prev}
//             type="button"
//             className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow"
//           >
//             ←
//           </button>

//           <button
//             onClick={next}
//             type="button"
//             className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow"
//           >
//             →
//           </button>

//           <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
//             {images.map(
//               (_: string, index: number) => (
//                 <div
//                   key={index}
//                   className={`h-2 w-2 rounded-full ${
//                     current === index
//                       ? "bg-white"
//                       : "bg-white/50"
//                   }`}
//                 />
//               )
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import {
//   Dialog,
//   DialogContent,
// } from "@/components/ui/dialog";

// interface ListingImageCarouselProps {
//   images: string[];
//   title: string;

// }

// export default function ListingImageCarousel({
//   images,
//   title,
// }: ListingImageCarouselProps) {
//   if (!images?.length) return null;

//   return (
//     <div className="relative group">
//       <Carousel
//         opts={{
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {images.map((image, index) => (
//             <CarouselItem key={index}>
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <Image
//                   src={image}
//                   alt={`${title} ${index + 1}`}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {images.length > 1 && (
//           <>
//             <CarouselPrevious
//               className="left-3 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//             />

//             <CarouselNext
//               className="right-3 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//             />
//           </>
//         )}
//       </Carousel>

//       {/* Image Counter */}
//       {images.length > 1 && (
//         <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
//           {images.length} Photos
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Maximize2, X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// interface ListingImageCarouselProps {
//   images: string[];
//   title: string;
//   className?: string; // Accept custom heights/styles from parent
// }

// export default function ListingImageCarousel({
//   images,
//   title,
//   className,
// }: ListingImageCarouselProps) {
//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = useState(0);

//   // Track slide changes to update the counter and indicator dots
//   useEffect(() => {
//     if (!api) return;

//     setCurrent(api.selectedScrollSnap());

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   if (!images?.length) return null;

//   return (
//     <div className="relative group w-full h-full">
//       <Carousel
//         setApi={setApi}
//         opts={{
//           loop: true,
//         }}
//         className="w-full h-full"
//       >
//         <CarouselContent className="h-full ml-0">
//           {images.map((image, index) => (
//             <CarouselItem key={index} className="pl-0 h-full">
//               {/* Dialog Lightbox trigger wrapped around each image */}
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <div
//                     className={cn(
//                       "relative overflow-hidden cursor-zoom-in w-full",
//                       className || "aspect-[4/3]",
//                     )}
//                   >
//                     <Image
//                       src={image}
//                       alt={`${title} ${index + 1}`}
//                       fill
//                       priority={index === 0}
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
//                       className="object-cover transition-transform duration-500 hover:scale-102"
//                     />
//                     {/* Hover expand icon */}
//                     <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                       <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm text-white transform scale-90 group-hover:scale-100 transition-transform">
//                         <Maximize2 className="h-5 w-5" />
//                       </div>
//                     </div>
//                   </div>
//                 </DialogTrigger>

//                 {/* Fullscreen Modal Content */}
//                 {/* <DialogContent className="max-w-[95vw] h-[85vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden">
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <div className="relative w-full h-full max-h-[80vh] aspect-auto">
//                       <Image
//                         src={image}
//                         alt={`${title} fullscreen ${index + 1}`}
//                         fill
//                         className="object-contain"
//                       />
//                     </div>
//                   </div>
//                 </DialogContent> */}
//                 {/* Fullscreen Modal Content */}
//                 <DialogContent className="max-w-[95vw] h-[85vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden">
//                   {/* Screen Reader Only Elements for Accessibility */}
//                   <div className="sr-only">
//                     <DialogTitle>
//                       {title} - Image {index + 1}
//                     </DialogTitle>
//                     <DialogDescription>
//                       Fullscreen preview of {title} image number {index + 1}
//                     </DialogDescription>
//                   </div>

//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <div className="relative w-full h-full max-h-[80vh] aspect-auto">
//                       <Image
//                         src={image}
//                         alt={`${title} fullscreen ${index + 1}`}
//                         fill
//                         className="object-contain"
//                       />
//                     </div>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation Arrows */}
//         {images.length > 1 && (
//           <>
//             <CarouselPrevious className="left-4 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity z-10" />
//             <CarouselNext className="right-4 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity z-10" />
//           </>
//         )}

//         {/* Dynamic Dot Indicators */}
//         {images.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => api?.scrollTo(index)}
//                 className={cn(
//                   "h-2 rounded-full transition-all duration-300",
//                   current === index ? "w-5 bg-white" : "w-2 bg-white/50",
//                 )}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Clean dynamic text counter */}
//         {images.length > 1 && (
//           <div className="absolute bottom-4 right-4 rounded-xl bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm tracking-wider select-none z-10">
//             {current + 1} / {images.length}
//           </div>
//         )}
//       </Carousel>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Maximize2 } from "lucide-react";
// import { cn } from "@/lib/utils";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// interface ListingImageCarouselProps {
//   images: string[];
//   title: string;
//   className?: string;
// }

// export default function ListingImageCarousel({
//   images,
//   title,
//   className,
// }: ListingImageCarouselProps) {
//   const [api, setApi] = useState<CarouselApi>();
//   const [current, setCurrent] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (!api) return;

//     setCurrent(api.selectedScrollSnap());
//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   if (!images?.length) return null;

//   return (
//     <div className="relative group w-full h-full select-none">
//       <Carousel
//         setApi={setApi}
//         opts={{
//           loop: true,
//           watchDrag: true, // Allows smooth swiping without eating click events
//         }}
//         className="w-full h-full"
//       >
//         <CarouselContent className="h-full ml-0">
//           {images.map((image, index) => (
//             <CarouselItem key={index} className="pl-0 h-full">
//               {/* Plain button instead of a nested DialogTrigger to stop event fighting */}
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(true)}
//                 className={cn("relative overflow-hidden cursor-zoom-in w-full block text-left outline-none focus:ring-2 focus:ring-primary/20", className || "aspect-[4/3]")}
//               >
//                 <Image
//                   src={image}
//                   alt={`${title} ${index + 1}`}
//                   fill
//                   priority={index === 0}
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
//                   <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm text-white transform scale-90 group-hover:scale-100 transition-transform">
//                     <Maximize2 className="h-5 w-5" />
//                   </div>
//                 </div>
//               </button>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation Arrows with higher pointer priority */}
//         {images.length > 1 && (
//           <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
//             <CarouselPrevious
//               className="static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto"
//             />
//             <CarouselNext
//               className="static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto"
//             />
//           </div>
//         )}

//         {/* Dynamic Dot Indicators */}
//         {images.length > 1 && (
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => api?.scrollTo(index)}
//                 className={cn(
//                   "h-2 rounded-full transition-all duration-300",
//                   current === index ? "w-5 bg-white" : "w-2 bg-white/50"
//                 )}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Dynamic text counter */}
//         {images.length > 1 && (
//           <div className="absolute bottom-4 right-4 rounded-xl bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm tracking-wider select-none z-20">
//             {current + 1} / {images.length}
//           </div>
//         )}
//       </Carousel>

//       {/* SINGLE Lightbox Modal placed safely outside the carousel loop */}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="max-w-[95vw] h-[85vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden z-[100]">
//           <div className="sr-only">
//             <DialogTitle>{title}</DialogTitle>
//             <DialogDescription>Viewing images for {title}</DialogDescription>
//           </div>
//           <div className="relative w-full h-full flex items-center justify-center">
//             <div className="relative w-full h-full max-h-[80vh] aspect-auto">
//               <Image
//                 src={images[current]} // Dynamically shows whichever slide is active
//                 alt={`${title} fullscreen view`}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ListingImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function ListingImageCarousel({
  images,
  title,
  className,
}: ListingImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Track loading state for each image index independently
  const [loadingImages, setLoadingImages] = useState<{
    [key: number]: boolean;
  }>(() => {
    const initial: { [key: number]: boolean } = {};
    images?.forEach((_, idx) => {
      initial[idx] = true;
    });
    return initial;
  });

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!images?.length) return null;

  return (
    <div className="relative group w-full h-full select-none">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          watchDrag: true, // Allows smooth swiping without eating click events
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              {/* Plain button instead of a nested DialogTrigger to stop event fighting */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={cn(
                  "relative overflow-hidden cursor-zoom-in w-full block text-left outline-none focus:ring-2 focus:ring-primary/20",
                  className || "aspect-[4/3]",
                )}
              >
                {/* LOADING BACKDROP SPINNER */}
                {loadingImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-[2px] z-10">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/70" />
                  </div>
                )}

                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className={cn(
                    "object-cover transition-opacity duration-300",
                    loadingImages[index] ? "opacity-0" : "opacity-100",
                  )}
                  onLoad={() => {
                    setLoadingImages((prev) => ({ ...prev, [index]: false }));
                  }}
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm text-white transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows with higher pointer priority */}
        {images.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto" />
            <CarouselNext className="static translate-y-0 h-10 w-10 bg-white/90 hover:bg-white text-black border-none shadow-md backdrop-blur-sm md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto" />
          </div>
        )}

        {/* Dynamic Dot Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === index ? "w-5 bg-white" : "w-2 bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Dynamic text counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 rounded-xl bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm tracking-wider select-none z-20">
            {current + 1} / {images.length}
          </div>
        )}
      </Carousel>

      {/* SINGLE Lightbox Modal placed safely outside the carousel loop
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] h-[85vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden z-[100]">
          <div className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Viewing images for {title}</DialogDescription>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh] aspect-auto">
              <Image
                src={images[current]} // Dynamically shows whichever slide is active
                alt={`${title} fullscreen view`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog> */}

      {/* SINGLE Lightbox Modal placed safely outside the carousel loop */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl lg:max-w-5xl p-0 bg-transparent border-none border-0 ring-0 outline-none shadow-none flex items-center justify-center z-[100]">
          <div className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Viewing images for {title}</DialogDescription>
          </div>

          {/* FIXED: Swapped 'w-full' for responsive structural widths ('w-[90vw] md:w-[80vw]').
      This gives the Next.js 'fill' property an explicit container boundary to calculate against.
    */}
          <div className="relative w-[90vw] md:w-[80vw] max-h-[85vh] aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden">
            <Image
              src={images[current]} // Dynamically shows whichever slide is active
              alt={`${title} fullscreen view`}
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1200px"
              priority
              className="object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
