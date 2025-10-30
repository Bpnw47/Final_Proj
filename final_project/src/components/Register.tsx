import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`สมัครสมาชิกสำเร็จ!\nชื่อ: ${name}\nอีเมล: ${email}`);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="ชื่อ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 rounded"
        />
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
        <button className="bg-green-600 text-white py-2 w-full rounded">
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}
