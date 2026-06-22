import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Request from "@/models/Request";

export async function GET() {
  await connectDB();

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  await Request.deleteMany({
    status: "closed",
    createdAt: {
      $lt: thirtyDaysAgo,
    },
  });

  return NextResponse.json({
    success: true,
  });
}
