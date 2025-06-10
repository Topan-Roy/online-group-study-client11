import React from 'react';

const FAQ = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white mt-5">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
         What is StudyHub?
        </div>
        <div className="collapse-content text-sm">
         StudyHub is an online platform to create, manage, and attempt assignments easily.
        </div>
      </div>

      <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
         How do I create an assignment?
        </div>
        <div className="collapse-content text-sm">
         After logging in, go to the 'Create Assignment' page and fill out the necessary details to create your assignment.
        </div>
      </div>

      <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
         Can I track my pending assignments?
        </div>
        <div className="collapse-content text-sm">
         Yes! You can see your pending assignments under the 'Pending Assignments' section when logged in.
        </div>
      </div>
      <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
         Is my data safe?
        </div>
        <div className="collapse-content text-sm">
         Absolutely, we use secure authentication and keep all your data private.
        </div>
      </div>
      <div className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
         How do I logout?
        </div>
        <div className="collapse-content text-sm">
         Click on your profile picture on the navbar and select the Logout button, or use the mobile menu logout option.
        </div>
      </div>
      

    </div>
  );
};

export default FAQ;