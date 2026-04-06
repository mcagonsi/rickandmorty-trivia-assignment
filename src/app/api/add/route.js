import { connectToDB } from "@/utils/db";

export async function POST(request) {

  const { db } = await connectToDB();
  const { name, species, image, status, gender } = await request.json();

  const newCharacter = {
    name,
    species,
    image,
    status,
    gender,
  };

  const dataInserted = await db
    .collection("characters")
    .insertOne(newCharacter);
  console.log("Data inserted with ID:", dataInserted);

  return new Response(
    JSON.stringify({ message: "Character added successfully" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
