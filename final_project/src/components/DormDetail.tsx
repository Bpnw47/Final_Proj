import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DormDetail() {
  const { id } = useParams();

  const dorm = {
    name: "K Family Apartment",
    address: "ใกล้ม.บูรพา จังหวัดชลบุรี",
    price: "฿2,500 / เดือน",
    daily: "฿500 / วัน",
    phone: "081-234-5678",
    views: 150889,
    postNumber: 57098,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.759383729961!2d100.53484331517074!3d13.74514439035186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed38c3bda3b%3A0xe94e96acb0c7f6c!2z4Liq4LiZ4Liy4Lij4Lix4LiB4Liy4Lih4Li44LiX4Lii!5e0!3m2!1sth!2sth!4v1673977906473!5m2!1sth!2sth",
    images: [
      "https://picsum.photos/800/500?random=1",
      "https://picsum.photos/800/500?random=2",
      "https://picsum.photos/800/500?random=3",
      "https://picsum.photos/800/500?random=4",
      "https://picsum.photos/800/500?random=5",
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {dorm.name}
            </h1>
            <p className="text-gray-600">{dorm.address}</p>
          </div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0 text-right">
            <p>เลขที่ประกาศ : {dorm.postNumber}</p>
            <p>เข้าชม : {dorm.views.toLocaleString()} ครั้ง</p>
          </div>
        </div>

        {/* ภาพหลัก */}
        <div className="mb-8">
          <img
            src={dorm.images[0]}
            alt="รูปหอพักหลัก"
            className="rounded-lg w-full h-96 object-cover shadow"
          />
          <div className="flex gap-2 overflow-x-auto mt-3 pb-2">
            {dorm.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`รูป ${i + 2}`}
                className="w-28 h-20 rounded-lg object-cover hover:opacity-80 transition cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* ราคาและโทรศัพท์ */}
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

        {/* รายละเอียด */}
        <h2 className="text-2xl font-semibold mb-3">รายละเอียด</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          {dorm.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* แผนที่ */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📍 แผนที่ตั้งหอพัก</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src={dorm.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

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
