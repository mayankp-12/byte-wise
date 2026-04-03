import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-newspaper-bg border-t-2 border-black py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black font-serif tracking-tighter mb-4">
              BYTE WIRE
            </h2>
            <p className="text-sm italic mb-4">
              Premium editorial insights for the modern era.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
              Sections
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/world" className="hover:underline">
                  World
                </Link>
              </li>
              <li>
                <Link href="/politics" className="hover:underline">
                  Politics
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:underline">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:underline">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/science" className="hover:underline">
                  Science
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
              About
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/editorial" className="hover:underline">
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
              Newsletter
            </h3>
            <p className="text-xs mb-4">
              Get the morning headlines delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border border-black px-3 py-2 text-xs flex-1 outline-none focus:ring-1 focus:ring-newspaper-accent"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] border-t border-gray-200 pt-6">
          <p>
            © 2026 ADS RUN - All Rights Reserved. AdSense compliant and
            dynamically delivered.
          </p>
        </div>
      </div>
    </footer>
  );
}
