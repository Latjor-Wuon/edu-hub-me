import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import { applyForScholarship } from "../../services/applicationService";

const ScholarshipDetail = () => {
    const { scholarshipId } = useParams();
    const [scholarship, setScholarship] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchScholarship = async () => {
            const scholarshipDocRef = doc(db, "scholarships", scholarshipId);
            const scholarshipDoc = await getDoc(scholarshipDocRef);
            if (scholarshipDoc.exists()) {
                setScholarship(scholarshipDoc.data());
            }
        };

        fetchScholarship();
    }, [scholarshipId]);

    const handleApply = async () => {
        if (user) {
            await applyForScholarship(user.uid, scholarshipId);
            alert("You have successfully applied for this scholarship.");
        } else {
            alert("You need to be logged in to apply.");
        }
    };

    if (!scholarship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{scholarship.title}</h1>
            <p className="mb-4">{scholarship.description}</p>
            <p className="mb-4">{scholarship.details}</p>
            <button
                onClick={handleApply}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Apply
            </button>
        </div>
    );
};

export default ScholarshipDetail;
