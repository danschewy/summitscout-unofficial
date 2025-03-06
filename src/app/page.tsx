export default function Home() {
  const features = [
    {
      title: "Schedule",
      description: "Track all sessions and events throughout the summit",
      href: "/schedule",
      color: "bg-blue-500",
    },
    {
      title: "Demos",
      description: "Explore cutting-edge robotics and drone demonstrations",
      href: "/demos",
      color: "bg-green-500",
    },
    {
      title: "Network",
      description: "Connect with industry leaders and innovators",
      href: "/network",
      color: "bg-purple-500",
    },
    {
      title: "Highlights",
      description: "Watch exclusive interviews and key moments",
      href: "/highlights",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-12rem)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Summit Scout</h1>
        <p className="text-xl text-gray-400">
          Your digital companion for the Drones & Robotics AI Summit 2025
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature) => (
          <a
            key={feature.title}
            href={feature.href}
            className="group block p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
          >
            <div
              className={`w-12 h-12 ${feature.color} rounded-full mb-4 flex items-center justify-center text-white`}
            >
              <span className="text-xl font-bold">{feature.title[0]}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
              {feature.title}
            </h2>
            <p className="text-gray-400">{feature.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
