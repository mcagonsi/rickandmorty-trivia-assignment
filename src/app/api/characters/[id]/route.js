import { connectToDB } from "@/utils/db";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const { db } = await connectToDB();
    const character = await db
      .collection("characters")
      .findOne({ _id: new ObjectId(id) });
    if (!character) {
      return new Response(JSON.stringify({ error: "Character not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(character), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching character:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch character" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
