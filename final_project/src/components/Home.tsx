import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("รายเดือน"); // ค่าเริ่มต้น
  const dorms = [
    { name: "K Family", detail: "ใกล้ม.บูรพา", price: "฿2,500 / เดือน" },
    { name: "บ้านสุขใจ", detail: "พร้อมเฟอร์ครบ", price: "฿3,000 / เดือน" },
    { name: "หอคุณใหม่", detail: "แอร์ + WiFi ฟรี", price: "฿2,800 / เดือน" },
    { name: "บ้านนฤมล", detail: "ใกล้ตลาด + 7-11", price: "฿3,200 / เดือน" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 flex flex-col">
      {/* ส่วนหัว */}
      <section className="bg-blue-100 w-screen min-h-[45vh] flex flex-col justify-center items-center text-center mt-[80px] pt-10 pb-16 overflow-hidden">
        {/* กล่องทั้งหมด */}
        <div className="max-w-5xl w-full text-center">
          {/* หัวข้อ */}
          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            🏠 ระบบค้นหาหอพักใกล้คุณ
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            ค้นหาหอพักหรืออพาร์ตเมนต์ทั่วประเทศได้ง่าย ๆ
            พร้อมกรองตามความต้องการของคุณ
          </p>

          {/* กล่องค้นหา */}
          <div className="bg-white rounded-2xl shadow-lg w-full p-6 sm:p-8 flex flex-col gap-5">
            {/* Tabs */}
            <div className="flex justify-center gap-8 border-b pb-3">
              <button
                onClick={() => setActiveTab("รายเดือน")}
                className={`pb-2 font-semibold transition ${
                  activeTab === "รายเดือน"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                อพาร์ทเม้นท์รายเดือน
              </button>
              <button
                onClick={() => setActiveTab("รายวัน")}
                className={`pb-2 font-semibold transition ${
                  activeTab === "รายวัน"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                อพาร์ทเม้นท์รายวัน
              </button>
            </div>

            {/* ช่องค้นหา */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2">
              {/* ช่องพิมพ์ค้นหา */}
              <div className="flex items-center border border-gray-300 rounded-lg flex-1 px-3 py-3 bg-gray-50">
                <span className="text-gray-400 text-lg mr-2">🔍</span>
                <input
                  type="text"
                  placeholder={`ค้นหา ${
                    activeTab === "รายเดือน"
                      ? "หอพักหรืออพาร์ตเมนต์รายเดือน..."
                      : "หอพักหรืออพาร์ตเมนต์รายวัน..."
                  }`}
                  className="w-full focus:outline-none bg-gray-50 text-gray-700"
                />
              </div>

              {/* Dropdown */}
              <select className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-gray-50">
                <option>ทุกช่วงราคา</option>
                <option>ไม่เกิน 3,000 บาท</option>
                <option>3,000 - 5,000 บาท</option>
                <option>มากกว่า 5,000 บาท</option>
              </select>

              {/* ปุ่มค้นหา */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md transition">
                🔎 ค้นหาที่พัก
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ปุ่มกรอง */}
      <section className="w-full bg-white border-y shadow-sm py-5 flex flex-wrap justify-center gap-3 px-4 sm:px-10">
        {[
          "📍 ใกล้สถานศึกษา",
          "🚆 ใกล้ BTS/MRT",
          "🏢 ตามจังหวัด",
          "💰 ราคาไม่เกิน 5,000",
        ].map((item, idx) => (
          <button
            key={idx}
            className="px-5 py-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-700 transition"
          >
            {item}
          </button>
        ))}
      </section>

      {/* การ์ดหอพัก */}
      <section className="flex-1 w-full bg-gray-50 py-12 px-4 sm:px-16 lg:px-24">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          🏡 หอพักแนะนำ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mx-auto">
          {dorms.map((dorm, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-44 bg-gray-200 flex items-center justify-center text-gray-500">
                📸 รูปหอพัก
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{dorm.name}</h3>
                <p className="text-gray-600">{dorm.detail}</p>
                <p className="text-blue-600 font-semibold mt-2 text-lg">
                  {dorm.price}
                </p>
                <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 w-full">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ส่วนท้าย */}
      <footer className="bg-blue-600 text-white py-5 text-center mt-auto w-full">
        © 2025 Dorm Finder | จัดทำโดยทีม Dorm Finder 🤍
      </footer>
    </div>
  );
}
