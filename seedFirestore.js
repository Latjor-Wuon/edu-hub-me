import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

// Sample data for scholarships
const scholarships = [
    { title: 'Full Scholarship for Computer Science', description: 'Apply for a full scholarship in Computer Science.', details: 'Detailed info about the scholarship.' },
    { title: 'Partial Scholarship for Engineering', description: 'Apply for a partial scholarship in Engineering.', details: 'Detailed info about the scholarship.' },
    { title: 'Research Grant for Environmental Studies', description: 'Apply for a research grant in Environmental Studies.', details: 'Detailed info about the scholarship.' },
    { title: 'Arts and Humanities Scholarship', description: 'Apply for a scholarship in Arts and Humanities.', details: 'Detailed info about the scholarship.' },
    { title: 'Medical Sciences Scholarship', description: 'Apply for a scholarship in Medical Sciences.', details: 'Detailed info about the scholarship.' },
    { title: 'Business and Economics Scholarship', description: 'Apply for a scholarship in Business and Economics.', details: 'Detailed info about the scholarship.' },
    { title: 'Law Scholarship', description: 'Apply for a scholarship in Law.', details: 'Detailed info about the scholarship.' },
    { title: 'Education Scholarship', description: 'Apply for a scholarship in Education.', details: 'Detailed info about the scholarship.' },
    { title: 'Environmental Science Scholarship', description: 'Apply for a scholarship in Environmental Science.', details: 'Detailed info about the scholarship.' },
    { title: 'Technology and Innovation Scholarship', description: 'Apply for a scholarship in Technology and Innovation.', details: 'Detailed info about the scholarship.' },
    { title: 'Health Sciences Scholarship', description: 'Apply for a scholarship in Health Sciences.', details: 'Detailed info about the scholarship.' },
    { title: 'Social Sciences Scholarship', description: 'Apply for a scholarship in Social Sciences.', details: 'Detailed info about the scholarship.' },
    { title: 'STEM Scholarship', description: 'Apply for a scholarship in Science, Technology, Engineering, and Mathematics.', details: 'Detailed info about the scholarship.' },
];

// Sample data for workshops
const workshops = [
    { title: 'Resume Writing Workshop', description: 'Learn how to write an effective resume.', date: '2024-08-01' },
    { title: 'Interview Skills Webinar', description: 'Improve your interview skills with tips from experts.', date: '2024-08-05' },
    { title: 'Networking Strategies Workshop', description: 'Learn effective networking strategies.', date: '2024-08-10' },
    { title: 'Career Development Workshop', description: 'Enhance your career development skills.', date: '2024-08-15' },
    { title: 'Public Speaking Seminar', description: 'Improve your public speaking skills.', date: '2024-08-20' },
];

// Sample data for mentorship programs
const mentorshipPrograms = [
    { title: 'Career Mentorship Program', description: 'Connect with industry professionals for career guidance.' },
    { title: 'Alumni Networking', description: 'Network with alumni to explore career opportunities.' },
    { title: 'Technical Mentorship Program', description: 'Get technical guidance from experienced professionals.' },
    { title: 'Business Mentorship Program', description: 'Get business mentorship from successful entrepreneurs.' },
    { title: 'Leadership Mentorship Program', description: 'Develop your leadership skills with guidance from leaders.' },
];

const seedCollection = async (collectionName, data) => {
    try {
        const collectionRef = collection(db, collectionName);
        for (const item of data) {
            await addDoc(collectionRef, item);
            console.log(`Added ${collectionName} document: ${item.title || item.name}`);
        }
        console.log(`Seeded ${collectionName} collection successfully.`);
    } catch (e) {
        console.error(`Error seeding ${collectionName} collection: `, e);
    }
};

const seedFirestore = async () => {
    await seedCollection('scholarships', scholarships);
    await seedCollection('workshops', workshops);
    await seedCollection('mentorshipPrograms', mentorshipPrograms);
};

export default seedFirestore;
