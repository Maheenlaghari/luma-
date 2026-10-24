import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    const token = "tok_" + Math.random().toString(36).substring(2, 15);

    return NextResponse.json({
      success: true,
      user: {
        id: "usr_" + Math.random().toString(36).substring(2, 9),
        email,
        name: name || email.split("@")[0],
        token
      }
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 400 }
    );
  }
}
