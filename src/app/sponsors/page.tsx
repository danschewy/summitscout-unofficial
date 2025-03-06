import Image from "next/image";
import geniusny from "@/images/sponsors/geniusny.avif";
import cooley from "@/images/sponsors/cooley.avif";
import trinet from "@/images/sponsors/trinet.avif";
import nystec from "@/images/sponsors/nystec.avif";
import jpmorgan from "@/images/sponsors/jpmorgan.avif";

export default function Sponsors() {
  const organizers = [
    {
      name: "GENIUS NY",
      description:
        "GENIUS NY is the world's largest accelerator for UAS and robotics. The program is funded by Empire State Development and managed by CenterState CEO. Applications for round nine are now open until May 28, 2025 – learn more and apply here.",
      category: "Host",
      social: {
        instagram: "https://instagram.com/geniusnyprogram",
        twitter: "https://x.com/geniusnyprogram",
      },
    },
    {
      name: "New York Robotics Network",
      description:
        "The New York Robotics Network (NYRN) is a nonprofit dedicated to advancing robotics and automation in the New York metro area. NYRN connects startups, engineers, investors, and academia to foster innovation, workforce development, and industry growth.",
      category: "Host",
      social: {
        instagram: "https://instagram.com/nyroboticsnetwork",
        twitter: "https://x.com/nyrobotics",
      },
    },
    {
      name: "ffVC",
      description:
        "ffVC is one of the best performing seed and early-stage venture capital firms in New York. They invest across emerging industries, with a strong focus on AI, Enterprise Software, FinTech, Automation, and Sustainability.",
      category: "Host",
      social: {
        twitter: "https://x.com/ffvc",
        instagram: "https://instagram.com/ffvc",
      },
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Our Sponsors & Partners</h1>
        <p className="text-gray-600">
          The Drones & Robotics AI Summit is made possible by our generous
          sponsors and partners
        </p>
        <p className="text-gray-600 mt-2">
          Program organized by Oliver Mitchell of ff Venture Capital, author of{" "}
          <a
            href="https://amzn.to/43ozxDt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors underline"
          >
            A Startup Field Guide in the Age of Robots and AI
          </a>
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Platinum Sponsor
        </h2>
        <div className="bg-gray-50 border rounded-lg p-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <div className="text-center">
            <div className="w-64 h-32 bg-gray-50 rounded flex items-center justify-center mb-4">
              <Image
                src={geniusny}
                alt="Platinum Sponsor"
                width={256}
                height={128}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Gold Sponsor
        </h2>
        <div className="bg-gray-50 border rounded-lg p-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <div className="text-center">
            <div className="w-56 h-28 bg-gray-50 rounded flex items-center justify-center mb-4">
              <span className="text-gray-400">
                <Image
                  src={cooley}
                  alt="Gold Sponsor"
                  width={256}
                  height={128}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Silver Sponsors
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="w-48 h-24 bg-gray-50 rounded flex items-center justify-center mb-4">
                  <span className="text-gray-400">
                    <Image
                      src={idx === 0 ? trinet : idx === 1 ? nystec : jpmorgan}
                      alt="Silver Sponsor"
                      width={256}
                      height={128}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Hosted By</h2>
        <div className="grid gap-8">
          {organizers.map((org, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">
                    {org.name}
                  </h3>
                  <p className="text-gray-600">{org.description}</p>
                </div>
                {(org.social.instagram || org.social.twitter) && (
                  <div className="flex gap-3">
                    {org.social.instagram && (
                      <a
                        href={org.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                    {org.social.twitter && (
                      <a
                        href={org.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-blue-50">
        <h2 className="text-xl font-semibold mb-4 text-green-300">
          Interested in Sponsoring?
        </h2>
        <p className="text-gray-700 mb-4">
          Join these industry leaders in supporting innovation in drones and
          robotics. Contact us to learn about sponsorship opportunities for
          future events.
        </p>
        <p className="text-sm text-gray-600">
          For sponsorship inquiries, please reach out to
          sponsors@summitscout.com
        </p>
      </div>
    </div>
  );
}
