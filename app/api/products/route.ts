import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const products = db.prepare("SELECT * FROM products ORDER BY price ASC").all();
  return NextResponse.json(products);
}
