import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-green-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <div className="text-center">
        <h1 className="text-[8rem] font-extrabold text-green-600 dark:text-green-400">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          The mango you're looking for might have fallen off the tree 🍃
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          🍋 Go Back Home
        </a>
      </div>
    </div>
        </div>
    );
};

export default NotFoundPage;