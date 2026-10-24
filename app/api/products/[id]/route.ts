import { NextResponse } from "next/server";
import { PRODUCTS, FEATURED_HERO_PRODUCT } from "@/lib/data";

interface RouteProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteProps) {
  const { id } = await params;
  const all = [...PRODUCTS, FEATURED_HERO_PRODUCT];
  const product = all.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return NextResponse.json(
      { success: false, message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: product
  });
}
