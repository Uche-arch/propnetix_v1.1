import { ReactNode } from "react";

interface ListingGridProps {
  children: ReactNode;
  className?: string;
}

export default function ListingGrid({
  children,
  className = "",
}: ListingGridProps) {
  return (
    <div
      className={`
        
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}