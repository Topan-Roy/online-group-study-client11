import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 via-white to-green-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 mt-5">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">


                <motion.div
                    className="w-full md:w-1/2 text-center md:text-left space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-yellow-300 leading-tight">
                        Master Group  <motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#2efbec', '#ba2efb ', '#FF00FF', '#FF00FF', '#0000FF'],
                                    transition: { duration: 2, repeat: Infinity }
                                }
                            }
                        >Study</motion.span>  <br />
                        with <span className="text-green-600 dark:text-green-300">StudyHub</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Collaborate, share, and complete assignments easily in your online study group. Stay productive, together.
                    </p>
                    <Link
                        to="/assignments"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
                    >
                        Get Started
                    </Link>
                </motion.div>

                {/* Right Image with animation */}
                <motion.img
                    src="https://i.ibb.co/NnQCg1Ch/4221400.png"
                    alt="Study Illustration"
                    className="w-full max-w-md mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                />
            </div>
        </section>
    );
};

export default Banner;
