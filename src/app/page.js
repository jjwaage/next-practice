import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 text-black py-24 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] leading-tight">
            Welcome to My Practice of Next.js
          </h1>
          <p className="text-xl mb-8 text-gray-700 flex items-center justify-center gap-1">
            I am very excited to be here ⭐
          </p>
        </div>
      </section>

      <section className="bg-gray-100 pt-12 pb-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Other Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog">
              <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-foreground hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-4">Projects</h3>
                <p className="text-gray-700">Links to past projects</p>
              </div>
            </Link>
            <Link href="/secret">
              <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-foreground hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-4">Secret</h3>
                <p className="text-gray-700">You have to be logged in.</p>
              </div>
            </Link>
            <Link href="/contact">
              <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-foreground hover:text-white transition-all">
                <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
                <p className="text-gray-700">Yeah</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My App. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
