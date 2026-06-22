import Link from "next/link";
import { Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyListingsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function EmptyListings({
  title = "No listings found",
  description = "There are no property listings to display.",
  buttonText,
  buttonHref,
}: EmptyListingsProps) {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed bg-muted/20 px-6 text-center">
      <div className="mb-6 rounded-full border bg-background p-4">
        <Building2 className="h-8 w-8 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Button
          asChild
          className="mt-6"
        >
          <Link href={buttonHref}>
            {buttonText}
          </Link>
        </Button>
      )}
    </div>
  );
}