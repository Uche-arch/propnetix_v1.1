import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Request from "@/models/Request";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const newRequest = await Request.create(body);

    return NextResponse.json(newRequest, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to create request" },
      { status: 500 }
    );
  }
}