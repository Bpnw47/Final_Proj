import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginModal from "./components/LoginModal";
import Post from "./components/Post";
import DormDetail from "./components/DormDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* เข้าครั้งแรกให้ไปหน้า Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* หน้า Login */}
        <Route path="/login" element={<LoginModal onClose={() => {}} />} />

        {/* หน้า Home */}
        <Route path="/home" element={<Home />} />

        {/* หน้าอื่น ๆ */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dorm/:id" element={<DormDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
