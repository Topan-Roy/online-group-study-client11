import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 6;

const RecentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://online-group-study-assignment-serve.vercel.app/assignments")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch assignments");
        return res.json();
      })
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        );
        setAssignments(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(assignments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAssignments = assignments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  // Animation variants
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
      rotate: -5,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      rotate: 5,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="py-10 bg-gray-50 mt-6 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
     <div className=" text-center">
         <h2 className="text-3xl font-bold mb-6">Recent Assignments / Latest Updates</h2>
     </div>
      <div className="space-y-4 relative min-h-[350px]">
        <AnimatePresence mode="wait">
          {currentAssignments.map((assignment) => (
            <motion.div
              key={assignment._id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 },
              }}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded shadow cursor-pointer"
            >
              <img
                src={assignment.photo}
                alt={assignment.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-yellow-300">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published: {new Date(assignment.dueDate).toLocaleDateString()}
                </p>
              </div>
              <Link
                to={`/assignments/${assignment._id}`}
                className="text-sm text-green-600 dark:text-green-400 hover:underline"
              >
                See more
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-[#d194e1] text-white disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="flex items-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-[#82c940]  text-white disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentAssignments;