import supabase from "../supabase";
import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     console.log("trying to get ");
//     const { data, error } = await supabase.from("category").select("*");

//     if (error) {
//       return res.status(500).json({
//         error: "Error fetching data from Supabase",
//         details: error.message,
//       });
//     }

//     return res.status(200).json(data);
//   } else {
//     res.status(405).end();
//   }
// }

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { data: category, error } = await supabase.from("category").select("*");

    if (error) {
      return res.status(500).json({
        error: "Error fetching data from Supabase",
        details: error.message,
      });
    }

    return res.status(200).json({ data: category });
  } catch (error) {
    return res.status(500).json({
      error: "Error fetching data from Supabase",
      details: error,
    });
  }
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const category = {
      name: "Transportation",
      image:
        "https://i.ibb.co/zhqYZfC/png-transparent-car-vehicle-fleet-management-computer-icons-road-traffic-compact-car-blue-driving.png",
      date: "09-02-2024",
      user: "azimchy994@gmail.com",
    };

    const { data, error } = await supabase
      .from("category")
      .insert([category])
      .select();

    if (error) {
      return res.status(500).json({
        error: "Error inserting data into Supabase",
        details: error.message,
      });
    }

    return res.status(201).json({ data: data });
  } catch (error) {
    return res.status(500).json({
      error: "Error inserting data in Supabase",
      details: error,
    });
  }
};
