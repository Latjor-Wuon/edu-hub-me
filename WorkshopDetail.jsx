import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase";
import { registerForWorkshop } from "../../services/applicationService";

const WorkshopDetail = () => {
    const { workshopId } = useParams();
    const [workshop, setWorkshop] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchWorkshop = async () => {
            const workshopDocRef = doc(db, "workshops", workshopId);
            const workshopDoc = await getDoc(workshopDocRef);
            if (workshopDoc.exists()) {
                setWorkshop(workshopDoc.data());
            }
        };

        fetchWorkshop();
    }, [workshopId]);

    const handleRegister = async () => {
        if (user) {
            await registerForWorkshop(user.uid, workshopId);
            alert("You have successfully registered for this workshop.");
        } else {
            alert("You need to be logged in to register.");
        }
    };

    if (!workshop) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{workshop.title}</h1>
            <p className="mb-4">{workshop.description}</p>
            <p className="mb-4">Date: {workshop.date}</p>
            <button
                onClick={handleRegister}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Register
            </button>
        </div>
    );
};

export default WorkshopDetail;
