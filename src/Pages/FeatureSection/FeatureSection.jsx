import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features of <span className="text-blue-600 dark:text-yellow-300">StudyHub</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Group Study Rooms</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Join or create virtual rooms to collaborate on assignments with friends.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Assignment Tracker</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Keep track of all your pending and submitted assignments in one place.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Dark & Light Mode</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Easily toggle between dark and light themes to match your preference.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Submission</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Submit your assignment answers and track attempts with just a few clicks.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Profile Management</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Update your profile details and keep your study history in sync.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Login System</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Secure login with email/password or Google for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
