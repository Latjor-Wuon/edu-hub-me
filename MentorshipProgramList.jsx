import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const MentorshipProgramList = () => {
    const [mentorshipPrograms, setMentorshipPrograms] = useState([]);

    useEffect(() => {
        const fetchMentorshipPrograms = async () => {
            const mentorshipProgramCollection = collection(db, "mentorshipPrograms");
            const mentorshipProgramSnapshot = await getDocs(mentorshipProgramCollection);
            const mentorshipProgramList = mentorshipProgramSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMentorshipPrograms(mentorshipProgramList);
        };

        fetchMentorshipPrograms();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Mentorship Programs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentorshipPrograms.map(mentorshipProgram => (
                    <div key={mentorshipProgram.id} className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">{mentorshipProgram.title}</h2>
                        <p className="mb-4">{mentorshipProgram.description}</p>
                        <Link to={`/mentorship-programs/${mentorshipProgram.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorshipProgramList;
