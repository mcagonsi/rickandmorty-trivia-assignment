import { connectToDB } from "@/utils/db";

export async function POST(request) {
  const { db } = await connectToDB();
  const charactersCollection = db.collection("characters");

  //if the collection already has documents, we assume the data has already been imported and we return a message indicating that
  if ((await charactersCollection.countDocuments()) > 0) {
    return new Response(
      JSON.stringify({ message: "Characters already imported" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  try {
    const importDataSource = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const importedData = await importDataSource.json();

    // Reformat the data to include only the necessary fields and onlu the first 7 characters
    const reformatedData = importedData.results
      .slice(0, 7)
      .map((character) => ({
        name: character.name,
        species: character.species,
        image: character.image,
        status: character.status,
        gender: character.gender,
      }));

    charactersCollection.insertMany(reformatedData);
    return new Response(
      JSON.stringify({ message: "Characters imported successfully" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to import characters" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
