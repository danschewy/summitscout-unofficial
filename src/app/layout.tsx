import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Summit Scout - Drones & Robotics AI Summit 2025",
  description:
    "Your digital companion for the Drones & Robotics AI Summit 2025. Access schedules, demos, networking opportunities, and exclusive content.",
  keywords: [
    "drones",
    "robotics",
    "AI",
    "summit",
    "technology",
    "conference",
    "networking",
  ],
  authors: [{ name: "Summit Scout Team" }],
  openGraph: {
    title: "Summit Scout - Drones & Robotics AI Summit 2025",
    description:
      "Your digital companion for the Drones & Robotics AI Summit 2025",
    url: "https://summit-scout.vercel.app",
    siteName: "Summit Scout",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white shadow-md print:hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src={logo}
                    alt="Summit Scout Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <Link
                    href="/"
                    className="text-2xl font-bold flex items-center gap-2"
                  >
                    Summit Scout
                  </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <Link
                    href="/schedule"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/demos"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Demos
                  </Link>
                  <Link
                    href="/network"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Network
                  </Link>
                  <Link
                    href="/highlights"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Highlights
                  </Link>
                  <Link
                    href="/sponsors"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Sponsors
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          <footer className="bg-gray-900 border-t border-gray-800 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-400">
              <div>
                © 2025 Summit Scout - Built for Drones & Robotics AI Summit
              </div>
              <div className="text-sm mt-1">
                Built with ❤️ in NYC by{" "}
                <a
                  href="https://www.linkedin.com/in/dan--brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Dan Brand
                </a>
              </div>
              <div className="text-sm mt-2">
                <a
                  href="https://lu.ma/drai25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Register for the Summit →
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
