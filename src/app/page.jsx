import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Welcome or Hero Section */}
        <section
          className={
            bgimageStyling +
            " flex flex-col items-center justify-start text-center gap-8  p-4"
          }
        >
          {/* Importing and displaying Rick and Morty Text Image */}
          <Image
            src="/rnmtext2.png"
            alt="Rick and Morty"
            width={400}
            height={50}
            className="mt-30"
          />
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Rick and Morty Trivia
            </h1>
            <p className="text-lg text-white">
              Check out some of the characters to learn more about them!
            </p>
          </div>
        </section>
      </main>

      {/* Author section to display information about the creator of this project */}
      <section className="flex flex-col max-w-3xl mx-auto my-12 gap-4 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Created by</h2>
        <div className="flex flex-wrap gap-6 items-start">
          <aside className="flex flex-col max-w-[150px] items-center gap-2">
            <Image
              src="/creator.jpg"
              alt="Creator"
              width={150}
              height={150}
              className="rounded-full"
            />
            <p className="text-lg text-gray-700">Michael Agonsi</p>
            <a
              href="https://github.com/mcagonsi/rickandmorty-trivia-assignment.git"
              className="text-sm text-blue-500 hover:underline"
            >
              GitHub Profile
            </a>
          </aside>
          <p className="text-lg text-gray-500 max-w-[400px] h-full">
            This project was created as part of an assignment for a software
            engineering internship application. It is a simple trivia game that
            tests your knowledge about the Rick and Morty TV show. The project
            was built using Next.js and Tailwind CSS, and it fetches data from
            the Rick and Morty API to display character information.
          </p>
        </div>
      </section>
    </>
  );
}

// styling for the background image with dark overlay
const bgimageStyling =
  "w-full bg-cover bg-start bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url('/rickandmortybg.jpg')] ";
