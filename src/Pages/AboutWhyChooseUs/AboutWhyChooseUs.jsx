import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutWhyChooseUs = () => {
  const features = [
    "Collaborative Group Study Rooms for effective teamwork",
    "Real-time Assignment Tracking to never miss deadlines",
    "User-friendly Interface with Dark/Light Mode toggle",
    "Secure login system with email and Google authentication",
    "Easy submission & feedback system for continuous improvement",
    "24/7 Support and Community-driven Learning",
  ];

  return (
    <section className="py-16 mt-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Why Choose <span className="text-[#82c940] dark:text-yellow-300">StudyHub?</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg">
          StudyHub is designed to empower students by providing a collaborative and easy-to-use platform for
          group study and assignment management. Whether you want to track your progress or connect with peers, we have you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 dark:text-yellow-300 mt-1" size={24} />
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
