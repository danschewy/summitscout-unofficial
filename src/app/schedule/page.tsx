export default function Schedule() {
  const sessions = [
    {
      time: "9:00 AM - 9:45 AM",
      title: "Founders Breakfast",
      category: "Networking",
      location: "Main Dining Hall",
    },
    {
      time: "9:45 AM - 10:00 AM",
      title: "Welcome Remarks",
      category: "General",
      location: "Main Hall",
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "Growing at Scale w/ Diligent Robotics",
      category: "Robotics",
      location: "Main Hall",
    },
    {
      time: "10:45 AM - 11:30 AM",
      title: "Investing in Drones & Robotics in the AI Era",
      category: "Investment",
      location: "Main Hall",
    },
    {
      time: "11:30 AM - 11:45 AM",
      title: "Coffee Break & Networking on the Terrace",
      category: "Break",
      location: "Terrace",
    },
    {
      time: "11:45 AM - 12:30 PM",
      title: "The Changing Regulatory Environment in the Age of Trump",
      category: "Policy",
      location: "Main Hall",
    },
    {
      time: "12:30 PM - 1:00 PM",
      title: "Building a Humanoid",
      category: "Robotics",
      location: "Main Hall",
    },
    {
      time: "1:00 PM - 1:45 PM",
      title: "Cyborg Lunch",
      category: "Break",
      location: "Main Dining Hall",
    },
    {
      time: "1:45 PM - 2:25 PM",
      title: "The Clearpath Robotics Story from Ideation to Exit",
      category: "Case Study",
      location: "Main Hall",
    },
    {
      time: "2:25 PM - 2:30 PM",
      title: "GoAERO Prize Announcement",
      category: "Awards",
      location: "Main Hall",
    },
    {
      time: "2:30 PM - 3:15 PM",
      title: "Startup Panel: Lessons Learned and Opportunities",
      category: "Panel",
      location: "Main Hall",
    },
    {
      time: "3:15 PM - 3:45 PM",
      title: "Exhibit Hall Refreshments on the Terrace",
      category: "Break",
      location: "Terrace",
    },
    {
      time: "3:45 PM - 4:15 PM",
      title: "Genius NY Lightning Presentations",
      category: "Startups",
      location: "Main Hall",
    },
    {
      time: "4:15 PM - 5:00 PM",
      title: "Navigating the Changing Defense Tech Landscape",
      category: "Defense",
      location: "Main Hall",
    },
    {
      time: "5:00 PM - 5:20 PM",
      title: "Revolutionizing Restaurant Operations",
      category: "Innovation",
      location: "Main Hall",
    },
    {
      time: "5:20 PM - 5:25 PM",
      title: "Closing Remarks",
      category: "General",
      location: "Main Hall",
    },
    {
      time: "5:25 PM - 7:25 PM",
      title: "Empire Space Cocktail Reception",
      category: "Networking",
      location: "Bobby Van's Grill",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Summit Schedule</h1>
        <p className="text-gray-600">March 6, 2025 - All times in EST</p>
      </div>

      <div className="space-y-4">
        {sessions.map((session, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <span className="text-lg font-semibold text-blue-600">
                  {session.time}
                </span>
                <h3 className="text-xl font-medium mt-1 text-gray-400">
                  {session.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {session.category}
                </span>
              </div>
            </div>
            <div className="mt-2 text-gray-600">
              <p className="text-sm">
                <span className="font-medium">Location:</span>{" "}
                {session.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-blue-50">
        <h2 className="text-xl font-semibold mb-4 text-gray-400">
          Schedule Notes
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>• All sessions will start promptly at their scheduled times</li>
          <li>
            • Networking breaks provide great opportunities to connect with
            speakers and attendees
          </li>
          <li>
            • Don&apos;t miss the Empire Space Cocktail Reception - a perfect
            way to end the day!
          </li>
        </ul>
      </div>
    </div>
  );
}
