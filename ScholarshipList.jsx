import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const ScholarshipList = () => {
    const [scholarships, setScholarships] = useState([]);

    useEffect(() => {
        const fetchScholarships = async () => {
            const querySnapshot = await getDocs(collection(db, 'scholarships'));
            const scholarshipsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setScholarships(scholarshipsData);
        };

        fetchScholarships();
    }, []);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-4xl mb-4 font-bold text-center">Scholarships</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scholarships.map(scholarship => (
                    <div key={scholarship.id} className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">{scholarship.title}</h2>
                        <p className="mb-4">{scholarship.description}</p>
                        <Link to={`/scholarships/${scholarship.id}`} className="text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScholarshipList;
