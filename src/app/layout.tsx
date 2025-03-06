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
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src={logo}
                    alt="Summit Scout Logo"
                    width={100}
                    height={100}
                    className="rounded-full hidden md:block"
                  />
                  <Link href="/" className="text-2xl font-bold">
                    Summit Scout
                  </Link>
                </div>
                <nav className="space-x-6">
                  <Link href="/schedule" className="hover:text-blue-200">
                    Schedule
                  </Link>
                  <Link href="/demos" className="hover:text-blue-200">
                    Demos
                  </Link>
                  <Link href="/network" className="hover:text-blue-200">
                    Network
                  </Link>
                  <Link href="/highlights" className="hover:text-blue-200">
                    Highlights
                  </Link>
                  <Link href="/sponsors" className="hover:text-blue-200">
                    Sponsors
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 py-4 text-center text-gray-600">
              <div>
                © 2025 Summit Scout - Built for Drones & Robotics AI Summit
              </div>
              <div className="text-sm mt-1">
                Built with ❤️ in NYC by{" "}
                <a
                  href="https://www.linkedin.com/in/dan--brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Dan Brand
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
