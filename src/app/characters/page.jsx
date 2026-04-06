import Link from "next/link";

// converted this page to a server side page to solve the problem of static generation fetches
const fetchCharacters = async () => {
  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/characters`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

const importData = async () => {
  'use server';
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/characters/import`,
      {
        method: "POST",
      }
    );

    if (response.ok) {
      console.log("Characters imported successfully");
    } else {
      console.log("Failed to import characters");
    }
  } catch (error) {
    console.error("Error importing data:", error);
  }
};
export default async function Characters() {
  // handles the fetch in server style (solves the problem of static generation fetches)
  const characters = await fetchCharacters();
  return (
    <main className="flex flex-col items-center justify-start text-center gap-8  p-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Rick and Morty Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div
              key={character._id}
              className="bg-white rounded-lg min-w-[200px] min-h-[100px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <Link href={`/characters/${character._id}`}>
                  <h2 className="text-xl font-bold text-gray-800">
                    {character.name}
                  </h2>
                  <p className="text-md text-gray-600">{character.species}</p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-xl text-gray-600 mb-4">No characters found</p>
            <form action={importData}>
              <button
                type="submit"
                title="Click to import characters from the Rick and Morty API to Mongodb"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Import Characters
              </button>

              <p className="mt-6">
                Please reload the page to see the imported characters after
                clicking import.
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
