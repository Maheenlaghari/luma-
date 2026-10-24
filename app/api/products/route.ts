import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  let result = [...PRODUCTS];

  if (category && category !== "all") {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    success: true,
    count: result.length,
    data: result
  });
}
