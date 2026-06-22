// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// export default function ListingsFilter() {
//   const router = useRouter();

//   const searchParams = useSearchParams();

//   const handleSearch = (
//     key: string,
//     value: string
//   ) => {
//     const params = new URLSearchParams(
//       searchParams.toString()
//     );

//     if (value) {
//       params.set(key, value);
//     } else {
//       params.delete(key);
//     }

//     router.push(`/listings?${params.toString()}`);
//   };

//   return (
//     <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:flex-row">
//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search by title..."
//         defaultValue={
//           searchParams.get("search") || ""
//         }
//         onChange={(e) =>
//           handleSearch("search", e.target.value)
//         }
//         className="flex-1 rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-black"
//       />

//       {/* CATEGORY */}
//       <select
//         defaultValue={
//           searchParams.get("category") || "All"
//         }
//         onChange={(e) =>
//           handleSearch(
//             "category",
//             e.target.value
//           )
//         }
//         className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-black"
//       >
//         <option value="All">
//           All Categories
//         </option>

//         <option value="Apartment">
//           Apartment
//         </option>

//         <option value="House">
//           House
//         </option>

//         <option value="Land">
//           Land
//         </option>

//         <option value="Office Space">
//           Office Space
//         </option>

//         <option value="Shop">
//           Shop
//         </option>
//       </select>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";

// import { Search, X } from "lucide-react";

// import {
//   useRouter,
//   useSearchParams,
// } from "next/navigation";

// import { Input } from "@/components/ui/input";

// import { Button } from "@/components/ui/button";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function ListingsFilter() {
//   const router = useRouter();

//   const searchParams = useSearchParams();

//   const [search, setSearch] = useState(
//     searchParams.get("search") || ""
//   );

//   const category =
//     searchParams.get("category") || "All";

//   // Debounced search
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const params = new URLSearchParams(
//         searchParams.toString()
//       );

//       if (search.trim()) {
//         params.set("search", search);
//       } else {
//         params.delete("search");
//       }

//       router.replace(
//         `/listings?${params.toString()}`
//       );
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [search]);

//   const handleCategoryChange = (
//     value: string
//   ) => {
//     const params = new URLSearchParams(
//       searchParams.toString()
//     );

//     if (value === "All") {
//       params.delete("category");
//     } else {
//       params.set("category", value);
//     }

//     router.replace(
//       `/listings?${params.toString()}`
//     );
//   };

//   const clearFilters = () => {
//     setSearch("");

//     router.replace("/listings");
//   };

//   return (
//     <div className="mb-10 rounded-3xl border bg-card p-4 shadow-sm">
//       <div className="flex flex-col gap-4 lg:flex-row align-items-center">
//         {/* SEARCH */}
//         <div className="relative flex-1 ">
//           <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

//           <Input
//             value={search}
//             onChange={(e : any) =>
//               setSearch(e.target.value)
//             }
//             placeholder="Search properties..."
//             className="h-11 pl-10"
//           />
//         </div>

//         {/* CATEGORY */}
//         <div className="w-full lg:w-60">
//           <Select
//             value={category}
//             onValueChange={
//               handleCategoryChange
//             }
//           >
//             <SelectTrigger className="h-11">
//               <SelectValue placeholder="Category" />
//             </SelectTrigger>

//             <SelectContent>
//               <SelectItem value="All">
//                 All Categories
//               </SelectItem>

//               <SelectItem value="Apartment">
//                 Apartment
//               </SelectItem>

//               <SelectItem value="House">
//                 House
//               </SelectItem>

//               <SelectItem value="Land">
//                 Land
//               </SelectItem>

//               <SelectItem value="Office Space">
//                 Office Space
//               </SelectItem>

//               <SelectItem value="Shop">
//                 Shop
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* CLEAR
//         <Button
//           variant="outline"
//           onClick={clearFilters}
//           className="h-11"
//         >
//           <X className="mr-2 h-4 w-4" />
//           Clear
//         </Button> */}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ListingsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const category = searchParams.get("category") || "All";

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.replace(`/listings?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    router.replace(`/listings?${params.toString()}`);
  };

  const clearSearch = () => {
    setSearch("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.replace(`/listings?${params.toString()}`);
  };

  return (
    // Clean, borderless layout with a flexible layout structure
    <div className="w-full mb-8">
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
        
        {/* SEARCH INPUT */}
        <div className="relative w-full flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70 pointer-events-none" />
          <Input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            placeholder="Search properties..."
            className="h-10 pl-9 pr-8 bg-transparent rounded-xl border-muted focus-visible:ring-1 focus-visible:ring-muted-foreground/30 text-sm"
          />
          {/* Minimal Inline Clear Button */}
          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md text-muted-foreground/60 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* CATEGORY SELECT */}
        <div className="w-full sm:w-48 shrink-0">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="h-10 bg-transparent rounded-xl border-muted focus:ring-0 focus:ring-offset-0 focus-visible:ring-1 focus-visible:ring-muted-foreground/30 text-sm">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="House">House</SelectItem>
              <SelectItem value="Land">Land</SelectItem>
              <SelectItem value="Office Space">Office Space</SelectItem>
              <SelectItem value="Shop">Shop</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  );
}