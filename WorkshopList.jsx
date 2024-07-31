import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

const WorkshopList = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        const fetchWorkshops = async () => {
            const workshopCollection = collection(db, "workshops");
            const workshopSnapshot = await getDocs(workshopCollection);
            const workshopList = workshopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setWorkshops(workshopList);
        };

        fetchWorkshops();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Workshops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map(workshop => (
                    <div key={workshop.id} className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">{workshop.title}</h2>
                        <p className="mb-4">{workshop.description}</p>
                        <p className="mb-4">Date: {workshop.date}</p>
                        <Link to={`/workshops/${workshop.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopList;
