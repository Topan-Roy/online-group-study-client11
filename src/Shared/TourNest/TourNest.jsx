import React from 'react';
import { Link } from 'react-router';
import { FaBookReader } from 'react-icons/fa';

const TourNest = () => {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2">
        <span className="text-3xl">
          <FaBookReader />
        </span>
        <h1 className="text-2xl font-bold text-blue-600 dark:text-yellow-300">
          Study<span className="text-green-700 dark:text-green-300">Hub</span>
        </h1>
      </Link>
    </div>
  );
};

export default TourNest;
