import { connectToDB } from "@/utils/db";

export const dynamic = 'force-dynamic';
export async function GET() {
   try {
    const { db } = await connectToDB();
    const characters = await db.collection("characters").find({}).toArray();
    return new Response(JSON.stringify(characters), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch characters" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

