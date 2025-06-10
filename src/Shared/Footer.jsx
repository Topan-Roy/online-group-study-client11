import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t dark:border-gray-700 pt-10 pb-6 px-4 md:px-20 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Study<span className="text-blue-700 dark:text-blue-300">Hub</span></h2>
          <p className="mt-2 text-sm">
            Your all-in-one platform for collaborative learning, assignments, and academic growth.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
             <a href="https://www.facebook.com/TopanRoy41105/" ><FaFacebook  color='blue'/></a>
        <a href="https://www.instagram.com/topan_roy41105/?igsh=dWdpYmUxcDNuZnhz#" ><FaSquareInstagram  color='red'/></a>
        <a href="https://www.linkedin.com/in/topanroy/" ><FaLinkedin color='blue'/></a>
        <a href="https://www.youtube.com/@Topanroy-t5q" ><FaYoutube color='red'/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-indigo-500">Home</a></li>
            <li><a href="/assignments" className="hover:text-indigo-500">Assignments</a></li>
            <li><a href="/create-assignment" className="hover:text-indigo-500">Create Assignment</a></li>
            <li><a href="/my-submissions" className="hover:text-indigo-500">My Submissions</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li >FAQs</li>
            <li>Support</li>
            <li >Community Forum</li>
            <li >Terms of Service</li>
          </ul>
        </div>

        {/* Quote / Motto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Inspiration </h3>
          <p className="text-sm italic">
            “Education is the most powerful weapon which you can use to change the world.” <br />— Nelson Mandela
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} StudyHub. Empowering Collaborative Learning.
      </div>
    </footer>
  );
};

export default Footer;
