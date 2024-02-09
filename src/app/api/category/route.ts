import { NextApiRequest, NextApiResponse } from "next";
import { categoryCollection } from "../server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const category = categoryCollection.find().toArray();
  res.json({ category });
}

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const category = {
//       name: "Transportation",
//       image:
//         "https://i.ibb.co/zhqYZfC/png-transparent-car-vehicle-fleet-management-computer-icons-road-traffic-compact-car-blue-driving.png",
//       date: "09-02-2024",
//       user: "azimchy994@gmail.com",
//     };

//     const { data, error } = await supabase
//       .from("category")
//       .insert([category])
//       .select();

//     if (error) {
//       return res.status(500).json({
//         error: "Error inserting data into Supabase",
//         details: error.message,
//       });
//     }

//     return res.status(201).json({ data: data });
//   } catch (error) {
//     return res.status(500).json({
//       error: "Error inserting data in Supabase",
//       details: error,
//     });
//   }
// };
