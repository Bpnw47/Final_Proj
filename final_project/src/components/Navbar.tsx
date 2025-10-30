import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">หน้าแรก</Link>
      <Link to="/about">เกี่ยวกับ</Link>
      <Link to="/contact">ติดต่อ</Link>
      <Link to="/register">สมัครสมาชิก</Link>
    </nav>
  );
}
