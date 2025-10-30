import React, { useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white px-8 py-3 flex justify-between items-center shadow-md">
        {/* โลโก้ */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏡</span>
          <span className="text-lg font-semibold">Dorm Finder</span>
        </div>

        {/* เมนู */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline">
            หน้าหลัก
          </a>
          <a href="#" className="hover:underline">
            เกี่ยวกับ
          </a>
          <a href="#" className="hover:underline">
            ติดต่อ
          </a>

          {/* ปุ่มเข้าสู่ระบบ */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}
