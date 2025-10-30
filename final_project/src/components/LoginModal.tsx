import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ลองล็อกอินด้วย:\nEmail: ${email}\nPassword: ${pw}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg w-96 relative"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-gray-500 hover:text-red-600"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="อีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-2 rounded"
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="border w-full p-2 rounded"
          />
          <button className="bg-blue-600 text-white py-2 w-full rounded hover:bg-blue-700">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}
