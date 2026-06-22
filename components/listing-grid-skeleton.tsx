import ListingSkeleton from "./listing-skeleton";
import ListingGrid from "./listing-grid";

export default function ListingGridSkeleton({
  count = 6,
}: {
  count?: number;
}) {
  return (
    <ListingGrid>
      {Array.from({ length: count }).map((_, i) => (
        <ListingSkeleton key={i} />
      ))}
    </ListingGrid>
  );
}