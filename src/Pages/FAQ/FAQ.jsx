import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaHourglassHalf, FaLightbulb } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

const FAQ = () => {
  return (
    <section className="py-12 mt-6 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
          Highlights
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Performer */}
          <motion.article
            variants={cardVariant}
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm cursor-pointer overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-lg p-3">
                <FaTrophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">Top Performer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Weekly leaderboard — top scorers & achievements.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Mahin"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Mahin</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">980 pts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Aisha"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Aisha</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">940 pts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Upcoming Deadlines */}
          <motion.article
            variants={cardVariant}
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm cursor-pointer overflow-hidden relative"
          >
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                2 Days Left
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg p-3">
                <FaHourglassHalf className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Upcoming Deadlines
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Assignments due soon — priority reminders so you don’t miss deadlines.
                </p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.ibb.co.com/NnKhN3vB/pexels-dothanhyb-5530477.jpg"
                        alt=""
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Build a Login Page</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Due: Jun 19, 2025</p>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                      Hard
                    </span>
                  </li>

                  <li className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.ibb.co.com/0jxhn9Zx/pexels-keira-burton-6147224.jpg"
                        alt=""
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Create REST API</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Due: Jun 22, 2025</p>
                      </div>
                    </div>
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                      Medium
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Tips & Tricks (flip-like interaction) */}
          <motion.article
            variants={cardVariant}
            whileHover={{ scale: 1.03, y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm cursor-pointer overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-lg p-3">
                <FaLightbulb className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">Tips & Tricks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Quick study hacks to write better assignments and save time.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <div className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Tip</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Write clear acceptance criteria</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Break requirements into checklist items.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <div className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Tip</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Keep UI simple</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Minimal designs reduce review time.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="inline-block bg-[#86e57d] hover:bg-[#86e57d] text-white px-4 py-2 rounded-lg">
                    Read more tips
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
