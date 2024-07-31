import React from "react";
import { Link } from "react-router-dom";

// src/pages/Home.jsx

const Home = () => {
    return (
        <div
            className="h-screen w-full flex flex-col bg-cover bg-center text-white"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        >
            <main className="flex-grow flex items-center justify-center bg-black bg-opacity-50 p-8">
                <div className="text-center">
                    <h1 className="text-5xl mb-4 font-bold">Empowering Youth, Building Futures</h1>
                    <p className="text-xl mb-8">
                        Trailblazing new horizons by providing equitable access to quality education.
                    </p>
                    <Link to="/signup" className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                        Get Started
                    </Link>
                </div>
            </main>
            <footer className="bg-black bg-opacity-50 p-4 text-center">
                <p>&copy; 2024 EduHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
