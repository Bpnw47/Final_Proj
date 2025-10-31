// src/components/RoutingApp.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Register from "./Register";
import Post from "./Post";
import DormDetail from "./DormDetail";

export default function RoutingApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post" element={<Post />} />
      <Route path="/dorm/:id" element={<DormDetail />} />
    </Routes>
  );
}
