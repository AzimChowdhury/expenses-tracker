import supabase from "../supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("trying to get ");
    const { data, error } = await supabase.from("category").select("*");

    if (error) {
      return res.status(500).json({
        error: "Error fetching data from Supabase",
        details: error.message,
      });
    }

    return res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
