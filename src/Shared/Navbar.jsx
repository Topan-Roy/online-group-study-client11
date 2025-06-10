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
                        isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/assignments"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                    }
                >
                    Assignments
                </NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink
                            to="/pending"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                            }
                        >
                            Pending Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/create"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                            }
                        >
                            Create Assignment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/attempted"
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                            }
                        >
                            My Attempts
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <header className="bg-gray-100 dark:bg-gray-900 dark:text-white shadow-md">
            <div className="px-4 md:px-20 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-3xl"><FaBookReader /></span>
                    <h1 className="text-2xl font-bold text-blue-600 dark:text-yellow-300">
                        Study
                        <span className="text-green-700 dark:text-green-300">Hub</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-6 font-medium">{links}</ul>

                {/* Right side */}
                <div className="hidden lg:flex items-center gap-4 relative">
                    {user ? (
                        <div className="relative group">
                            <button
                                onClick={handleLogOut}
                                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
                            >
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={user.photoURL || ''}
                                    alt="User"
                                />
                                <span>Logout</span>
                            </button>

                            {/* Dropdown on hover */}
                            <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-80 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-20">
                                <div className="px-4 py-2 border-b border-gray-600">
                                    {user.displayName}
                                </div>
                                {/* You can add more dropdown items here if you want */}
                            </div>
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
