import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const orderId = "LUM" + Math.floor(100000 + Math.random() * 900000);

    return NextResponse.json({
      success: true,
      orderId,
      status: "confirmed",
      summary: body
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid order payload" },
      { status: 400 }
    );
  }
}
