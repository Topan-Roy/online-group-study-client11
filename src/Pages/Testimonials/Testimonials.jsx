import React from "react";

const tips = [
  {
    id: 1,
    title: "Set Clear Goals",
    description: "Define what you want to achieve before starting your study sessions.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Take Regular Breaks",
    description: "Short breaks improve focus and help retain information better.",
    icon: "⏰",
  },
  {
    id: 3,
    title: "Practice Active Recall",
    description: "Test yourself regularly instead of just rereading notes.",
    icon: "🧠",
  },
  {
    id: 4,
    title: "Stay Organized",
    description: "Keep your study materials and schedule well-ordered.",
    icon: "🗂️",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 mt-5 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Study Tips for Success
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {tips.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl cursor-default"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
