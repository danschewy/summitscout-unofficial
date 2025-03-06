export default function Demos() {
  const demos = [
    {
      name: "DroneX Delivery System",
      company: "Autonomous Systems Inc.",
      description:
        "Last-mile delivery drone with advanced obstacle avoidance and real-time route optimization.",
      category: "Drones",
      time: "10:30 AM - 11:30 AM",
      location: "Demo Arena",
    },
    {
      name: "RoboArm Collaborative",
      company: "Robotics Future Ltd.",
      description:
        "Next-gen collaborative robot arm with human-like dexterity and advanced safety features.",
      category: "Robotics",
      time: "1:30 PM - 2:30 PM",
      location: "Workshop Room",
    },
    {
      name: "AI Vision System",
      company: "TechVision AI",
      description:
        "Real-time object detection and tracking system for autonomous drones and robots.",
      category: "AI",
      time: "11:45 AM - 12:45 PM",
      location: "Room B",
    },
    {
      name: "Swarm Intelligence Demo",
      company: "Swarm Robotics Co.",
      description:
        "Coordinated multi-drone system showcasing collective decision-making and formation control.",
      category: "Drones",
      time: "2:45 PM - 3:45 PM",
      location: "Demo Arena",
    },
    {
      name: "Rescue Robot Platform",
      company: "Emergency Tech Solutions",
      description:
        "All-terrain rescue robot with thermal imaging and victim detection capabilities.",
      category: "Robotics",
      time: "3:00 PM - 4:00 PM",
      location: "Main Hall",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Live Demonstrations</h1>
        <p className="text-gray-600">
          Experience cutting-edge robotics and drone technology in action
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {demos.map((demo, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200 bg-white"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-blue-600">
                {demo.name}
              </h2>
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {demo.category}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{demo.description}</p>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Company:</span> {demo.company}
              </p>
              <p>
                <span className="font-medium">Time:</span> {demo.time}
              </p>
              <p>
                <span className="font-medium">Location:</span> {demo.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
