import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyRequestsProps {
  title?: string;
  description?: string;
}

export default function EmptyRequests({
  title = "No active requests",
  description = "There are currently no open property requests.",
}: EmptyRequestsProps) {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed bg-muted/20 px-6 text-center">
      <div className="mb-6 rounded-full border bg-background p-4">
        <SearchX className="h-8 w-8 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      <Button
        asChild
        className="mt-6"
      >
        <Link href="/request-property">
          Create Request
        </Link>
      </Button>
    </div>
  );
}