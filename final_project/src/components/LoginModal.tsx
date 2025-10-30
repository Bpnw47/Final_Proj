import React, { useState } from "react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    // 🔹 เปลี่ยนพื้นหลังให้โปร่งใสแทนที่จะมืด
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        {/* ปุ่มปิด */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* หัวข้อ */}
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-5">
          ยินดีต้อนรับสู่{" "}
          <span className="text-blue-600 font-bold">Dorm Finder</span>
        </h2>

        {/* แท็บ */}
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

        {/* เนื้อหา */}
        {activeTab === "login" ? (
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="อีเมล"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
            />
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline text-right"
            >
              ลืมรหัสผ่าน?
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 font-semibold">
              เข้าสู่ระบบ
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
            />
            <input
              type="email"
              placeholder="อีเมล"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 font-semibold">
              สมัครสมาชิก
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
