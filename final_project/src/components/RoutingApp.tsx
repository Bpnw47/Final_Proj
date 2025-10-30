// src/components/RoutingApp.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Contact from "./Contact";
import Register from "./Register";

export default function RoutingApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
