import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_DB_URL as string,
  process.env.NEXT_PUBLIC_DB_PUBLIC_API_KEY as string
);

if (!supabase) {
  console.error("Error connecting to database, please try again");
}

export default supabase;
