
import Character from "@/components/Character";

export default async function CharacterDetailPage({ params }) {
  //getting the id from the params
  const { id } = await params;

  //fetch call to get the character data based on the id
  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
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
