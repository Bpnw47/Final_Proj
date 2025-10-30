import React, { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`กำลังค้นหา: ${search}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* ส่วนหัว */}
      <section className="text-center py-14 bg-blue-100 w-full">
        <h1 className="text-5xl font-bold mb-3 text-blue-700">
          🏠 ระบบค้นหาหอพักใกล้คุณ
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          ค้นหาหอพักหรืออพาร์ตเมนต์จากทั่วประเทศได้ง่าย ๆ
        </p>

        {/* ช่องค้นหา */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-3 w-full max-w-3xl mx-auto px-4"
        >
          <input
            type="text"
            placeholder="🔍 ค้นหาชื่อหอพัก หรือพื้นที่..."
            className="flex-1 border border-gray-300 rounded-lg p-3 text-lg focus:outline-blue-400 bg-white shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
          >
            ค้นหา
          </button>
        </form>
      </section>

      {/* ฟิลเตอร์ */}
      <section className="py-8 bg-white border-y shadow-sm w-full">
        <div className="flex flex-wrap justify-center gap-4 w-full px-4">
          {[
            "📍 ใกล้สถานศึกษา",
            "🚆 ใกล้ BTS/MRT",
            "🏢 ตามจังหวัด",
            "💰 ราคาไม่เกิน 5,000",
          ].map((item, idx) => (
            <button
              key={idx}
              className="px-5 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* การ์ดหอพัก */}
      <section className="py-14 w-full bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          🏡 หอพักแนะนำ
        </h2>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10">
          {[
            {
              name: "K Family",
              price: "฿2,500 / เดือน",
              detail: "ใกล้ม.บูรพา",
            },
            {
              name: "บ้านสุขใจ",
              price: "฿3,000 / เดือน",
              detail: "พร้อมเฟอร์ครบ",
            },
            {
              name: "หอคุณใหม่",
              price: "฿2,800 / เดือน",
              detail: "แอร์ + WiFi ฟรี",
            },
            {
              name: "บ้านนฤมล",
              price: "฿3,200 / เดือน",
              detail: "ใกล้ตลาด + 7-11",
            },
          ].map((dorm, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
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
      <footer className="bg-blue-600 text-white py-6 text-center mt-10">
        © 2025 Dorm Finder | จัดทำโดยทีม Final Project
      </footer>
    </div>
  );
}
