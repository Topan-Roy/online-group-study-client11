import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This platform helped me improve my coding skills immensely!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing assignments and great community support.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Lee",
    feedback: "The perfect place for group study and learning together.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 4,
    name: "Emma Watson",
    feedback: "I love the clean UI and helpful resources here.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const slideVariants = {
  initial: { opacity: 0, x: 100, scale: 0.8 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.8 },
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonialsData) || length === 0) return null;

  return (
    <section className="py-10 px-6 mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        What Our Users Say
      </h2>

      <div className="relative max-w-lg mx-auto text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={testimonialsData[current].id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          >
            <img
              src={testimonialsData[current].avatar}
              alt={testimonialsData[current].name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500 dark:border-yellow-400"
            />
            <p className="italic text-gray-700 dark:text-gray-300 text-lg">
              "{testimonialsData[current].feedback}"
            </p>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              {testimonialsData[current].name}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-shadow shadow-md"
          aria-label="Previous testimonial"
          whileHover={{ scale: 1.2 }}
          type="button"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-shadow shadow-md"
          aria-label="Next testimonial"
          whileHover={{ scale: 1.2 }}
          type="button"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
