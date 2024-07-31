import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="bg-blue-600 p-4 fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold text-white">
                    EduHub
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                    {!user && (
                        <>
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>
                            <Link to="/contact" className="text-white hover:text-gray-300">
                                Contact
                            </Link>
                        </>
                    )}
                    {user && (
                        <>
                            <Link to="/scholarships" className="text-white hover:text-gray-300">
                                Scholarships
                            </Link>
                            <Link to="/workshops" className="text-white hover:text-gray-300">
                                Workshops
                            </Link>
                            <Link to="/mentorship-programs" className="text-white hover:text-gray-300">
                                Mentorship Programs
                            </Link>
                            <Link to="/profile" className="text-white hover:text-gray-300">
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-gray-300 focus:outline-none"
                            >
                                Log Out
                            </button>
                        </>
                    )}
                    {!user && (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-300">
                                Login
                            </Link>
                            <Link to="/signup" className="text-white hover:text-gray-300">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out">
                    <div className="absolute top-4 right-4">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <Link to="/" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                        Home
                    </Link>
                    {!user && (
                        <>
                            <Link to="/about" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                About
                            </Link>
                            <Link to="/contact" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </>
                    )}
                    {user && (
                        <>
                            <Link to="/scholarships" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Scholarships
                            </Link>
                            <Link to="/workshops" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Workshops
                            </Link>
                            <Link to="/mentorship-programs" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Mentorship Programs
                            </Link>
                            <Link to="/profile" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Profile
                            </Link>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMenu();
                                }}
                                className="text-white text-lg hover:text-gray-300 focus:outline-none"
                            >
                                Log Out
                            </button>
                        </>
                    )}
                    {!user && (
                        <>
                            <Link to="/login" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Login
                            </Link>
                            <Link to="/signup" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
