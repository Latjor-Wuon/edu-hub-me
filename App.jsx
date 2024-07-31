import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import MentorshipProgramDetail from "./MentorshipProgramDetail";
import MentorshipProgramList from "./MentorshipProgramList";
import Navbar from "./Navbar";
import Profile from "./Profile";
import React from "react";
import ScholarshipDetail from "./ScholarshipDetail";
import ScholarshipList from "./ScholarshipList";
import SignUp from "./SignUp";
import WorkshopDetail from "./WorkshopDetail";
import WorkshopList from "./WorkshopList";
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
