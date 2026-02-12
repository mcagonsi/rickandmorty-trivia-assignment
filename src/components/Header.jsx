import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="w-full text-white items-center justify-around flex p-4 bg-black">
            <img src="/rnmtext2.png" alt="Rick and Morty Icon" className="w-35 h-8" />
            <div className="items-center gap-4 flex justify-center">
                <Link href="/">Home</Link>
                <Link href="/characters">Characters</Link>
            </div>
        </nav>
    );
}
