import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import { registerForMentorshipProgram } from "../../services/applicationService";

const MentorshipProgramDetail = () => {
    const { mentorshipProgramId } = useParams();
    const [mentorshipProgram, setMentorshipProgram] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchMentorshipProgram = async () => {
            const mentorshipProgramDocRef = doc(db, "mentorshipPrograms", mentorshipProgramId);
            const mentorshipProgramDoc = await getDoc(mentorshipProgramDocRef);
            if (mentorshipProgramDoc.exists()) {
                setMentorshipProgram(mentorshipProgramDoc.data());
            }
        };

        fetchMentorshipProgram();
    }, [mentorshipProgramId]);

    const handleRegister = async () => {
        if (user) {
            await registerForMentorshipProgram(user.uid, mentorshipProgramId);
            alert("You have successfully registered for this mentorship program.");
        } else {
            alert("You need to be logged in to register.");
        }
    };

    if (!mentorshipProgram) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{mentorshipProgram.title}</h1>
            <p className="mb-4">{mentorshipProgram.description}</p>
            <button
                onClick={handleRegister}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Register
            </button>
        </div>
    );
};

export default MentorshipProgramDetail;
