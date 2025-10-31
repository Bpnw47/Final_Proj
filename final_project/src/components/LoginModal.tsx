import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log("🟢 Login response:", data);

    if (data.access_token) {
      alert("เข้าสู่ระบบสำเร็จ!");
      navigate("/home"); // ✅ เด้งไปหน้า Home
    } else {
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }
  };

  const handleRegister = async () => {
    const res = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();

    if (res.ok) {
      alert("Registration successful!");
      setActiveTab("login");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-center text-lg font-semibold text-gray-700 mb-5">
          ยินดีต้อนรับสู่{" "}
          <span className="text-blue-600 font-bold">Dorm Finder</span>
        </h2>

        <div className="flex border-b mb-5">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-center font-medium border-b-2 ${
              activeTab === "login"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2 text-center font-medium border-b-2 ${
              activeTab === "register"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            สมัครสมาชิก
          </button>
        </div>

        {activeTab === "login" ? (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 font-semibold"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="อีเมล"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 font-semibold"
            >
              สมัครสมาชิก
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
