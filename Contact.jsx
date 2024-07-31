import React from "react";

// src/pages/Contact.jsx

const Contact = () => {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl mb-4 font-bold text-center">Contact Us</h1>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
