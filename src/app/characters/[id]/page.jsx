
import Character from "@/components/Character";


// export async function generateStaticParams(){

//   // fetch call to the api to get all the character list and return array of object with id as string to use for static route page generation
//   const fetchCharacters = async () => {
//     const response = await fetch(
//       `${process.env.DOMAIN_URL}/api/characters`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch characters");
//     }
//     const data = await response.json();

//     return data

//   }
//   return await fetchCharacters().then(characters => characters.map(character => ({
//     id: character._id,
//   })));

// }

export default async function CharacterDetailPage({ params }) {
  //getting the id from the params
  const { id } = await params;
 

  //fetch call to get the character data based on the id
  const fetchCharacter = async () => {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/characters/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch character");
    }
    const data = await response.json();

    return data;
  };

  const character = await fetchCharacter();

  if (!character) return <div>Loading...</div>;

  // Render the Character component with fetched character data
  return (
    <Character character={character} />
  );
}
