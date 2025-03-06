export default function Network() {
  const attendees = [
    {
      name: "Dr. Jane Smith",
      role: "CTO",
      company: "Autonomous Futures Inc.",
      interests: ["AI", "Robotics", "Autonomous Systems"],
      bio: "Leading innovation in autonomous robotics with 15+ years of experience",
    },
    {
      name: "Alex Chen",
      role: "Principal Investor",
      company: "TechVentures Capital",
      interests: ["Drone Technology", "AI", "Investment"],
      bio: "Investing in breakthrough robotics and drone technologies",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Director",
      company: "Robotics Institute",
      interests: ["Human-Robot Interaction", "AI Safety"],
      bio: "Pioneering research in safe human-robot collaboration",
    },
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      company: "DroneWorks",
      interests: ["Drone Delivery", "Urban Mobility"],
      bio: "Revolutionizing urban logistics through drone technology",
    },
    {
      name: "Prof. David Kumar",
      role: "Academic Researcher",
      company: "Tech University",
      interests: ["Swarm Robotics", "Machine Learning"],
      bio: "Leading research in multi-robot coordination systems",
    },
    {
      name: "Emma Wilson",
      role: "Policy Director",
      company: "Drone Safety Council",
      interests: ["Regulation", "Safety Standards"],
      bio: "Shaping the future of drone regulation and safety",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Network</h1>
        <p className="text-gray-600">
          Connect with industry leaders and innovators at the summit
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {attendees.map((attendee, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200 bg-white"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-600">
                {attendee.name}
              </h2>
              <p className="text-gray-700">
                {attendee.role} at {attendee.company}
              </p>
            </div>

            <p className="text-gray-600 mb-4">{attendee.bio}</p>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Interests:</h3>
              <div className="flex flex-wrap gap-2">
                {attendee.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-blue-50">
        <h2 className="text-xl font-semibold mb-2">Networking Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Use the summit app to schedule meetings</li>
          <li>Visit the networking lounge during breaks</li>
          <li>Attend the networking lunch at 12:00 PM</li>
          <li>Join the evening reception for casual networking</li>
        </ul>
      </div>
    </div>
  );
}
