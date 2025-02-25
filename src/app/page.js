import Link from "next/link"; // Import Link component
import { Smiley } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 text-black py-24 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] leading-tight">
            Welcome to My Practice of Next.js
          </h1>
          <p className="text-xl mb-8 text-gray-700 flex items-center justify-center gap-1">I am very excited to be here 
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
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
