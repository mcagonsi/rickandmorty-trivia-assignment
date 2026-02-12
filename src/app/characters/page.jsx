'use client';

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data.results);
            setCharacters(data.results);
        }
        catch (error) {
            console.error("Error fetching characters:", error);
        }
    };
    useEffect(() => {
        fetchCharacters();
    }, []); 

    return (
        <main className="flex flex-col items-center justify-start text-center gap-8  p-4">
            <h1 className="text-4xl font-bold text-gray-800">Rick and Morty Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map((character) => (
                    <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        
                        <div className="p-4">
                            <Link href={`/characters/${character.id}`}>
                                <h2 className="text-xl font-bold text-gray-800">{character.name}</h2>
                                <p className="text-md text-gray-600">{character.species}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}