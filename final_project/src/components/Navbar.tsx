import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* โลโก้ หรือชื่อเว็บ */}
        <h1 className="text-xl font-bold tracking-wide">🏠 Dorm Finder</h1>

        {/* เมนูนำทาง */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-blue-200 transition">
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition">
              เกี่ยวกับ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200 transition">
              ติดต่อ
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
            >
              สมัครสมาชิก
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
