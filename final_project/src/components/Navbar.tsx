import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white px-8 py-3 flex justify-between items-center shadow-md z-50">
        {/* โลโก้ */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏡</span>
          <span className="text-lg font-semibold">Dorm Finder</span>
        </div>

        {/* เมนู */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            หน้าหลัก
          </Link>
          <Link to="/about" className="hover:underline">
            เกี่ยวกับ
          </Link>
          <Link to="/contact" className="hover:underline">
            ติดต่อ
          </Link>

          {/* ปุ่มลงประกาศ */}
          <Link
            to="/post"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition shadow-sm"
          >
            ลงประกาศ
          </Link>

          {/* ปุ่มเข้าสู่ระบบ */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </nav>

      {/* Modal Login */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}
