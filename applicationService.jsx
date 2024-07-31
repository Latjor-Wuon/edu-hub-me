import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const applyForScholarship = async (userId, scholarshipId) => {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
        [`applications.scholarships.${scholarshipId}`]: true
    });
};

export const registerForWorkshop = async (userId, workshopId) => {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
        [`applications.workshops.${workshopId}`]: true
    });
};

export const registerForMentorshipProgram = async (userId, mentorshipProgramId) => {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
        [`applications.mentorshipPrograms.${mentorshipProgramId}`]: true
    });
};
