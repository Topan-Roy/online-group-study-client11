import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useDarkMode } from '../Provider/ThemeContext';
import { FaSun, FaMoon, FaBookReader } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { darkmode, setDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "You're logged out successfully!",
                    icon: "success",
                });
            })
            .catch((error) => console.log(error));
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/assignments"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'
                    }
                >
                    Assignments
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/pending-assignments"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'
                    }
                >
                    Pending Assignments
                </NavLink>
            </li>
        </>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#86e57d] dark:bg-[#2e2330] dark:text-white shadow-md">
            <div className="px-4 md:px-20 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-3xl">
                        <FaBookReader />
                    </span>
                    <h1 className="text-2xl font-bold text-blue-600 dark:text-yellow-300">
                        Study<span className="text-green-700 dark:text-green-300">Hub</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav>
                    <ul className="hidden lg:flex items-center space-x-6 font-medium">{links}</ul>
                </nav>

                {/* Right side */}
                <div className="hidden lg:flex items-center gap-4 relative">
                    {user ? (
                        <div className="relative">
                            <img
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-400"
                                src={
                                    user.photoURL ||
                                    'https://i.ibb.co/LXQj5Fdb/istockphoto-1337144146-612x612.jpg'
                                }
                                alt="User"
                                title={user.displayName}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            />

                            {/* Dropdown menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-20">
                                    <div className="px-4 py-2 border-b dark:border-gray-700">
                                        <p className="text-sm font-medium dark:text-gray-300">{user.displayName}</p>
                                    </div>
                                    <Link
                                        to="/my-assignments"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        My Attempts
                                    </Link>
                                    <Link
                                        to="/createAssignment"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Create Assignment
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogOut();
                                            setDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
                        >
                            Login
                        </Link>
                    )}

                    {/* Dark Mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkmode)}
                        className="text-xl hover:scale-110 transition"
                        title="Toggle Theme"
                    >
                        {darkmode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-xl p-2"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

           
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden px-4 pb-4 space-y-2 font-medium">
                    <ul>{links}</ul>

                    {user ? (
                        <>
                            <div className="flex items-center gap-3 mt-2">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={user.photoURL}
                                    alt="Profile"
                                />
                                <span>{user.displayName}</span>
                            </div>

                            <Link
                                to="/my-assignments"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-200 rounded"
                            >
                                My Attempts
                            </Link>

                            <Link
                                to="/createAssignment"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 hover:bg-gray-200 rounded"
                            >
                                Create Assignment
                            </Link>

                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    handleLogOut();
                                }}
                                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-2"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/auth/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Login
                        </Link>
                    )}

                    <button
                        onClick={() => setDarkMode(!darkmode)}
                        className="text-xl mt-2"
                    >
                        {darkmode ? '🔆 Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
