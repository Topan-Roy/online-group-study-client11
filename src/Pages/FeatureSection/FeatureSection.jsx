import React from "react";

const features = [
  {
    id: 1,
    title: "Collaborative Learning",
    description: "Study together with peers and share knowledge instantly.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600 dark:text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.983 11.983 0 0112 21.75c-5.197 0-9.566-3.204-11.062-7.75a12.088 12.088 0 01.664-6.479L12 14z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Real-time Assignments",
    description: "Track and submit assignments instantly with notifications.",
    icon: (
      <svg
        className="w-12 h-12 text-green-600 dark:text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m2 8H7a2 2 0 01-2-2v-4a2 2 0 012-2h2l2-3 2 3h2a2 2 0 012 2v4a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Expert Mentors",
    description: "Get guidance and help from industry experts anytime.",
    icon: (
      <svg
        className="w-12 h-12 text-purple-600 dark:text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9a6 6 0 11-12 0 6 6 0 0112 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14v7m-3-4h6"
        ></path>
      </svg>
    ),
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 mt-5 bg-white dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Key Features of{" "}
        <span className="text-[#47e838] dark:text-yellow-300">StudyHub</span>
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">{icon}</div>
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

export default FeatureSection;
