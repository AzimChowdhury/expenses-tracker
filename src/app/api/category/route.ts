import { NextApiRequest, NextApiResponse } from "next";
import { categoryCollection } from "../server";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const category = await categoryCollection.find().toArray();
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to get categories", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await new Response(req.body).json();
    const category = await categoryCollection.insertOne(data);
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to create category", error },
      { status: 500 }
    );
  }
}
