import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Group Study Rooms",
    description: "Join or create virtual rooms to collaborate on assignments with friends.",
  },
  {
    id: 2,
    title: "Assignment Tracker",
    description: "Keep track of all your pending and submitted assignments in one place.",
  },
  {
    id: 3,
    title: "Dark & Light Mode",
    description: "Easily toggle between dark and light themes to match your preference.",
  },
  {
    id: 4,
    title: "Easy Submission",
    description: "Submit your assignment answers and track attempts with just a few clicks.",
  },
  {
    id: 5,
    title: "Profile Management",
    description: "Update your profile details and keep your study history in sync.",
  },
  {
    id: 6,
    title: "Login System",
    description: "Secure login with email/password or Google for easy access.",
  },
];

// Variants for container to stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each feature card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeatureSection = () => {
  return (
    <section className="py-16 mt-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features of <span className="text-[#82c940] dark:text-yellow-300">StudyHub</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map(({ id, title, description }) => (
            <motion.div
              key={id}
              className="bg-[#5a4f53] dark:bg-gray-800 p-6 rounded-lg shadow cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white dark:text-gray-300">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
