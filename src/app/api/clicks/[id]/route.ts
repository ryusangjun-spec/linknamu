import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const client = await clientPromise;
  const result = await client
    .db("linknamu")
    .collection<ClickDoc>("clicks")
    .findOneAndUpdate(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

  return NextResponse.json({ count: result?.count ?? 1 });
}
