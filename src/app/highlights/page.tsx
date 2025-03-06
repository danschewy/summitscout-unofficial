export default function Highlights() {
  const highlights = [
    {
      title: "Opening Keynote Highlights",
      description:
        "Key insights from Dr. Christopher Miller on the future of autonomous systems",
      type: "Coming Soon",
      time: "Available by 11:00 AM",
    },
    {
      title: "Live Demo: DroneX Delivery",
      description: "Watch the revolutionary delivery drone system in action",
      type: "Coming Soon",
      time: "Available by 12:30 PM",
    },
    {
      title: "Interview: Robotics Innovation",
      description:
        "Exclusive interview with Dr. Andrea Thomaz on collaborative robotics",
      type: "Coming Soon",
      time: "Available by 2:00 PM",
    },
    {
      title: "Panel Discussion: Future of Urban Air Mobility",
      description:
        "Industry experts discuss the roadmap for urban drone integration",
      type: "Coming Soon",
      time: "Available by 4:00 PM",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Summit Highlights</h1>
        <p className="text-gray-600">
          Watch exclusive interviews and key moments from the summit
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 bg-white"
          >
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-lg font-semibold text-blue-600">
                  {highlight.type}
                </p>
                <p className="text-gray-600">{highlight.time}</p>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-400">
                {highlight.title}
              </h2>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-blue-50">
        <h2 className="text-xl font-semibold mb-4 text-gray-400">
          Stay Connected
        </h2>
        <p className="text-gray-700 mb-4">
          All highlights will be available here throughout the day. Check back
          regularly for new content!
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            • Videos will be uploaded within 30 minutes of each session
          </p>
          <p className="text-sm text-gray-600">
            • Exclusive interviews will be added as they are conducted
          </p>
          <p className="text-sm text-gray-600">
            • Full session recordings will be available by end of day
          </p>
        </div>
      </div>
    </div>
  );
}
