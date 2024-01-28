import Link from "next/link";
import DarkModeToggleButton from "./darkModeToggleButton";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image href="/" src="/Logo.png" width={25} height={25} alt="Logo" />
            <Link href="/" className="ml-3 text-xl">
              Legowen
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>

            <Link href="/projects" className="mr-5 hover:text-gray-900">
              My Projects
            </Link>

            <Link href="/aboutme" className="mr-5 hover:text-gray-900">
              About Me
            </Link>

            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
