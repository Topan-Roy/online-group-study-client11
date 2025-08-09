import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Rakib Hasan",
    role: "BSc Student",
    review:
      "StudyHub আমাকে অনেক হেল্প করেছে অ্যাসাইনমেন্ট ম্যানেজ করতে। UI খুবই স্মুথ এবং ইউজার-ফ্রেন্ডলি।",
    image:
      "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sara Akter",
    role: "HSC Student",
    review:
      "আমি খুব সহজে গ্রুপ স্টাডি রুম তৈরি করতে পেরেছি এবং ফ্রেন্ডদের সাথে কাজ করতে পেরেছি। Highly recommended!",
    image:
      "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Jahidul Islam",
    role: "Diploma Student",
    review:
      "StudyHub এর ডার্ক মোড একদম পারফেক্ট, আর অ্যাসাইনমেন্ট ট্র্যাকার খুব কাজের জিনিস।",
    image:
      "https://i.pravatar.cc/100?img=3",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 mt-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-[#82c940] dark:text-yellow-300">Users Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 relative"
            >
              <FaQuoteLeft className="text-blue-500 dark:text-yellow-300 text-3xl mb-4" />
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">{review.review}</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
