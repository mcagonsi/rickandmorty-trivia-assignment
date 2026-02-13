
import Image from "next/image";
// Component to display individual character details. i decided to pass the character directly as a prop rather than destructuring
export default function Character({ character }) {
  return (
    <main className="flex flex-col items-center justify-start text-center gap-8 p-4">
            <div className="w-xl text-white flex flex-col p-4 items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800">Character Details</h1>
          <Image
            src={character.image}
            alt="Character Avatar"
            className="w-48 h-48 rounded-full"
            width={200}
            height={200}
          />
          <div className="text-left max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">Name: {character.name}</h2>
            <p className="text-lg text-gray-600">Species: {character.species}</p>
            <p className="text-lg text-gray-600">Status: {character.status}</p>
            <p className="text-lg text-gray-600">Gender: {character.gender}</p>
            <p className="text-lg text-gray-600">Origin: {character.origin.name}</p>
          </div>
          </div>
        </main>
  );
}
