

export default async function CharacterDetail({ params }) {
    const { id } = await params;
    const fetchCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        return data;
    } 

    const character = await fetchCharacter();

    if (!character) return <div>Loading...</div>;

    return (
        <main className="flex flex-col items-center justify-start text-center gap-8 p-4">
            <h1 className="text-4xl font-bold text-gray-800">Character Details</h1>
            <p className="text-md text-gray-600">Character ID: {id}</p>
            <img src={character.image} alt="Character Avatar" className="w-48 h-48 rounded-full" />
        </main>
    );
}   