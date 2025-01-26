import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Team_career from "./pages/Team_career";
import Internship from "./pages/Internship";
import Journal from "./pages/Journal";
import Blogs from "./pages/Blogs";
import Legal_news from "./pages/Legal_news";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-news" element={<Legal_news />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-career" element={<Team_career />} />
        <Route path="/intership" element={<Internship />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
