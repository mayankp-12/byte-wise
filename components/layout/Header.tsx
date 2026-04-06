import { Menu, Search, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="container mx-auto px-4 pt-6">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest mb-2">
        <span>{currentDate}</span>
        <div className="flex gap-4">
          <Link href="/subscribe" className="hover:underline">
            Subscribe Now
          </Link>
          <Link href="/login" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      <div className="text-center py-4 mb-4">
        <h1 className="text-6xl md:text-8xl font-black font-serif tracking-tighter">
          BYTE WIRE
        </h1>
        <p className="mt-2 text-sm italic font-serif">
          The Premium Editorial Experience
        </p>
      </div>

      <nav className="flex justify-between items-center border-y border-black py-2 mt-4 gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wider overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link href="/" className="hover:text-newspaper-accent">
              Home
            </Link>
            <Link href="/world" className="hover:text-newspaper-accent">
              World
            </Link>
            <Link href="/business" className="hover:text-newspaper-accent">
              Business
            </Link>
            <Link href="/tech" className="hover:text-newspaper-accent">
              Tech
            </Link>
            <Link href="/science" className="hover:text-newspaper-accent">
              Science
            </Link>
            <Link href="/health" className="hover:text-newspaper-accent">
              Health
            </Link>
            <Link href="/culture" className="hover:text-newspaper-accent">
              Culture
            </Link>
          </div>
        </div>
        <div className="flex gap-4 shrink-0 transition-all">
          <Search
            size={20}
            className="hover:text-newspaper-accent cursor-pointer"
          />
          <User
            size={20}
            className="hidden md:block hover:text-newspaper-accent cursor-pointer"
          />
          <Menu
            size={20}
            className="md:hidden hover:text-newspaper-accent cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
