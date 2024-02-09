import { NextApiRequest, NextApiResponse } from "next";
import { expenseCollection } from "../server";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const expense = await expenseCollection.find().toArray();
    return NextResponse.json({ data: expense }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to get expenses", error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = req.body;
    const expense = await expenseCollection.insertOne(data);
    return NextResponse.json({ data: expense }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to create expense", error },
      { status: 500 }
    );
  }
}
