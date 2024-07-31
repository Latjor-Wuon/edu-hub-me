import React, { useEffect, useState } from "react";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../../firebase";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Profile = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        profilePicture: '',
        applications: {
            scholarships: {},
            workshops: {},
            mentorshipPrograms: {}
        }
    });
    const [editMode, setEditMode] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(db, 'users', currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    await setDoc(userDocRef, {
                        name: currentUser.displayName || "New User",
                        email: currentUser.email,
                        profilePicture: '',
                        applications: {
                            scholarships: {},
                            workshops: {},
                            mentorshipPrograms: {}
                        }
                    });
                    setUserData({
                        name: currentUser.displayName || "New User",
                        email: currentUser.email,
                        profilePicture: '',
                        applications: {
                            scholarships: {},
                            workshops: {},
                            mentorshipPrograms: {}
                        }
                    });
                }
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrl = userData.profilePicture;
            if (image) {
                const imageRef = ref(storage, `profilePictures/${user.uid}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }

            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, { ...userData, profilePicture: imageUrl });
            setUserData(prevState => ({ ...prevState, profilePicture: imageUrl }));
            setEditMode(false);
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
    };

    const generateChartData = (applications) => {
        const labels = Object.keys(applications);
        const data = labels.map(key => applications[key] ? 1 : 0);

        return {
            labels,
            datasets: [
                {
                    label: 'Applications',
                    data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    const chartOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-4xl mb-4 font-bold text-center">Profile</h1>
            <div className="bg-white p-6 rounded shadow-lg mb-8">
                <div className="flex justify-center mb-4">
                    <img
                        src={userData.profilePicture || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
                {editMode ? (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xl mb-2" htmlFor="profilePicture">Profile Picture</label>
                            <input
                                type="file"
                                id="profilePicture"
                                onChange={handleImageChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            Save
                        </button>
                    </form>
                ) : (
                    <>
                        <p className="text-xl mb-4"><strong>Name:</strong> {userData.name}</p>
                        <p className="text-xl mb-4"><strong>Email:</strong> {userData.email}</p>
                        <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            Edit Profile
                        </button>
                    </>
                )}
            </div>

            <div className="bg-white p-6 rounded shadow-lg mb-8">
                <h2 className="text-3xl mb-4 font-semibold">Scholarship Applications</h2>
                {userData.applications.scholarships && Object.keys(userData.applications.scholarships).length ? (
                    <>
                        <div className="h-64 mb-8">
                            <Bar data={generateChartData(userData.applications.scholarships)} options={chartOptions} />
                        </div>
                        {Object.keys(userData.applications.scholarships).map(scholarshipId => (
                            <div key={scholarshipId} className="mb-8">
                                <h3 className="text-2xl font-bold">{`Scholarship ${scholarshipId}`}</h3>
                                <p>Status: {userData.applications.scholarships[scholarshipId] ? "Applied" : "Not Applied"}</p>
                                <Link to={`/scholarships/${scholarshipId}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 inline-block">
                                    View Scholarship
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No scholarship applications yet.</p>
                )}
            </div>

            <div className="bg-white p-6 rounded shadow-lg mb-8">
                <h2 className="text-3xl mb-4 font-semibold">Workshop Registrations</h2>
                {userData.applications.workshops && Object.keys(userData.applications.workshops).length ? (
                    <>
                        <div className="h-64 mb-8">
                            <Bar data={generateChartData(userData.applications.workshops)} options={chartOptions} />
                        </div>
                        {Object.keys(userData.applications.workshops).map(workshopId => (
                            <div key={workshopId} className="mb-8">
                                <h3 className="text-2xl font-bold">{`Workshop ${workshopId}`}</h3>
                                <p>Status: {userData.applications.workshops[workshopId] ? "Registered" : "Not Registered"}</p>
                                <Link to={`/workshops/${workshopId}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 inline-block">
                                    View Workshop
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No workshop registrations yet.</p>
                )}
            </div>

            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-3xl mb-4 font-semibold">Mentorship Program Registrations</h2>
                {userData.applications.mentorshipPrograms && Object.keys(userData.applications.mentorshipPrograms).length ? (
                    <>
                        <div className="h-64 mb-8">
                            <Bar data={generateChartData(userData.applications.mentorshipPrograms)} options={chartOptions} />
                        </div>
                        {Object.keys(userData.applications.mentorshipPrograms).map(mentorshipProgramId => (
                            <div key={mentorshipProgramId} className="mb-8">
                                <h3 className="text-2xl font-bold">{`Mentorship Program ${mentorshipProgramId}`}</h3>
                                <p>Status: {userData.applications.mentorshipPrograms[mentorshipProgramId] ? "Registered" : "Not Registered"}</p>
                                <Link to={`/mentorshipPrograms/${mentorshipProgramId}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4 inline-block">
                                    View Mentorship Program
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No mentorship program registrations yet.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
