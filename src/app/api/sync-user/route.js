import { supabase } from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs";

export async function POST(req) {
  const user = await currentUser();

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { data, error } = await supabase
    .from("users")
    .upsert([{ clerk_id: user.id, email: user.email }], { onConflict: ["clerk_id"] });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
