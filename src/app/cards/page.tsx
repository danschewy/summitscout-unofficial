"use client";
export default function Cards() {
  // Each card is 3.5 x 2 inches (standard business card size)
  const cards = Array(10).fill(0); // 8 cards per page (2 rows of 4)

  return (
    <>
      <div className="hidden print:block">
        <div className="flex flex-row flex-wrap gap-2">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className="w-[3.5in] h-[2in] border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col items-center justify-between"
              style={{ pageBreakInside: "avoid" }}
            >
              <div className="text-center">
                <h2 className="text-xl font-bold text-blue-600">
                  Drones & Robotics AI Summit
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  March 6, 2025 • New York City
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* QR Code placeholder - replace URL with your actual deployed site */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://summit-scout.vercel.app`}
                  alt="QR Code"
                  width={100}
                  height={100}
                />
                <div className="text-sm text-gray-600">
                  <p>Scan for</p>
                  <p className="font-semibold">Summit Scout</p>
                  <p className="text-xs mt-1">
                    Your (UNOFFICIAL) Digital Guide
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="print:hidden p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Print Instructions</h1>
          <div className="space-y-4 text-gray-600">
            <p>To print these business cards:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Use standard letter-size paper (8.5&quot; x 11&quot;)</li>
              <li>Set your printer to landscape orientation</li>
              <li>
                Enable background graphics in your browser&apos;s print settings
              </li>
              <li>Print at 100% scale (no scaling)</li>
              <li>For best results, use card stock paper</li>
              <li>Cut along the borders after printing</li>
            </ol>
            <button onClick={() => window.print()}>Print Cards</button>
          </div>
        </div>
      </div>
    </>
  );
}
