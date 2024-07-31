import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/Auth/Login";
import MentorshipProgramDetail from "./components/MentorshipPrograms/MentorshipProgramDetail";
import MentorshipProgramList from "./components/MentorshipPrograms/MentorshipProgramList";
import Navbar from "./components/Common/Navbar";
import Profile from "./components/Profile/Profile";
import React from "react";
import ScholarshipDetail from "./components/Scholarships/ScholarshipDetail";
import ScholarshipList from "./components/Scholarships/ScholarshipList";
import SignUp from "./components/Auth/SignUp";
import WorkshopDetail from "./components/Workshops/WorkshopDetail";
import WorkshopList from "./components/Workshops/WorkshopList";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/scholarships" element={<ScholarshipList />} />
          <Route path="/scholarships/:scholarshipId" element={<ScholarshipDetail />} />
          <Route path="/workshops" element={<WorkshopList />} />
          <Route path="/workshops/:workshopId" element={<WorkshopDetail />} />
          <Route path="/mentorship-programs" element={<MentorshipProgramList />} />
          <Route path="/mentorship-programs/:mentorshipProgramId" element={<MentorshipProgramDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
