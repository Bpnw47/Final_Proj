import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DormDetail() {
  const { id } = useParams(); // ไว้รับค่า id ที่ส่งมาจากปุ่ม “ดูรายละเอียด”

  // ข้อมูลตัวอย่าง (mock data)
  const dorm = {
    name: "K Family Apartment",
    address: "ใกล้ม.บูรพา จังหวัดชลบุรี",
    price: "฿2,500 / เดือน",
    daily: "฿500 / วัน",
    phone: "081-234-5678",
    images: [
      "https://picsum.photos/800/500?random=1",
      "https://picsum.photos/800/500?random=2",
      "https://picsum.photos/800/500?random=3",
    ],
    description: [
      "ห้องพักสะอาด ปลอดภัย พร้อมเฟอร์นิเจอร์ครบ",
      "มี Wi-Fi และที่จอดรถฟรี",
      "ใกล้ตลาด และร้านสะดวกซื้อ 7-11",
      "ค่าไฟ 7 บาท/หน่วย | ค่าน้ำ 18 บาท/ยูนิต",
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md">
        {/* ชื่อหอพัก */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{dorm.name}</h1>
        <p className="text-gray-600 mb-6">{dorm.address}</p>

        {/* รูปหอพัก */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {dorm.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`รูปหอพัก ${i + 1}`}
              className="rounded-lg shadow object-cover w-full h-64"
            />
          ))}
        </div>

        {/* รายละเอียดราคา */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y py-4 mb-8">
          <div>
            <p className="text-lg font-semibold text-blue-600">
              💰 ราคา : {dorm.price}
            </p>
            <p className="text-gray-600">รายวัน : {dorm.daily}</p>
          </div>
          <a
            href={`tel:${dorm.phone}`}
            className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            📞 โทรติดต่อ: {dorm.phone}
          </a>
        </div>

        {/* รายละเอียดอื่น ๆ */}
        <h2 className="text-2xl font-semibold mb-3">รายละเอียด</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          {dorm.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* ปุ่มย้อนกลับ */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          ← กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}
