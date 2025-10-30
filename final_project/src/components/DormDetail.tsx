import React, { useState } from "react";
import {
  FaSnowflake,
  FaBed,
  FaWifi,
  FaTv,
  FaMotorcycle,
  FaCar,
  FaShieldAlt,
  FaUtensils,
  FaVideo,
  FaDog,
  FaPhoneAlt,
} from "react-icons/fa";

export default function DormDetail() {
  const dorm = {
    name: "K Family Apartment",
    address: "ใกล้ม.บูรพา จังหวัดชลบุรี",
    price: "฿2,500 / เดือน",
    daily: "฿500 / วัน",
    phone: "081-234-5678",
    postId: "57098",
    images: [
      "https://picsum.photos/800/500?random=1",
      "https://picsum.photos/800/500?random=2",
      "https://picsum.photos/800/500?random=3",
      "https://picsum.photos/800/500?random=4",
    ],
    details: "ห้องพักสะอาด ปลอดภัย พร้อมเฟอร์นิเจอร์ครบ...",
  };

  const rooms = [
    {
      type: "ห้องธรรมดาเฟอร์",
      size: "24 ตร.ม.",
      month: "3,200 - 3,400 บาท",
      day: "-",
      contract: "-",
      status: "ว่าง",
    },
    {
      type: "ห้องแอร์",
      size: "24 ตร.ม.",
      month: "3,800 บาท",
      day: "650 บาท",
      contract: "-",
      status: "ว่าง",
    },
    {
      type: "ห้องสำหรับคนเลี้ยงสัตว์",
      size: "25 ตร.ม.",
      month: "4,900 - 6,000 บาท",
      day: "-",
      contract: "-",
      status: "ว่าง",
    },
    {
      type: "ห้อง VIP ทุกอย่างใหม่หมด",
      size: "25.5 ตร.ม.",
      month: "4,300 บาท",
      day: "-",
      contract: "-",
      status: "ว่าง",
    },
  ];

  const facilities = [
    { icon: <FaSnowflake />, label: "เครื่องปรับอากาศ" },
    { icon: <FaBed />, label: "เฟอร์นิเจอร์-ตู้, เตียง" },
    { icon: <FaWifi />, label: "อินเทอร์เน็ต WiFi" },
    { icon: <FaTv />, label: "เคเบิลทีวี / ดาวเทียม" },
    { icon: <FaCar />, label: "ที่จอดรถ" },
    { icon: <FaMotorcycle />, label: "ที่จอดมอเตอร์ไซค์/จักรยาน" },
    { icon: <FaShieldAlt />, label: "ระบบรักษาความปลอดภัย (คีย์การ์ด)" },
    { icon: <FaVideo />, label: "กล้องวงจรปิด (CCTV)" },
    { icon: <FaUtensils />, label: "ร้านอาหาร" },
    { icon: <FaDog />, label: "อนุญาตให้เลี้ยงสัตว์" },
  ];

  const [tab, setTab] = useState("photo");
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % dorm.images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + dorm.images.length) % dorm.images.length);

  const changeImage = (index: number) => setCurrent(index);

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md">
        {/* ส่วนหัว */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{dorm.name}</h1>
            <p className="text-gray-600">{dorm.address}</p>
          </div>
          <p className="text-gray-500 text-sm">
            เลขที่ประกาศ: {dorm.postId} • เข้าชม: 150,889 ครั้ง
          </p>
        </div>

        {/* แสดงค่าเช่า และปุ่มโทรติดต่อ */}
        <div className="flex gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">ราคาเช่า</h2>
            <p className="text-lg">{dorm.price}</p>
            <p className="text-gray-500">รายวัน: {dorm.daily}</p>
          </div>
          <div className="flex items-center ml-auto">
            <a
              href={`tel:${dorm.phone}`}
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <FaPhoneAlt className="inline mr-2" />
              โทรติดต่อ: {dorm.phone}
            </a>
          </div>
        </div>

        {/* เนื้อหาหลัก */}
        <div className="mb-8">
          {/* รูปใหญ่ */}
          <div className="relative group mb-8">
            <img
              key={current}
              src={dorm.images[current]}
              alt="หอพัก"
              className="rounded-lg w-full h-96 object-cover transition-all duration-700 ease-in-out"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❯
            </button>
          </div>

          {/* รูปเล็ก */}
          <div className="flex gap-2 mb-8">
            {dorm.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="หอพัก"
                className={`w-24 h-16 object-cover rounded-lg cursor-pointer ${
                  index === current ? "border-2 border-blue-600" : ""
                }`}
                onClick={() => changeImage(index)}
              />
            ))}
          </div>
        </div>

        {/* ตารางประเภทห้อง */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">🏠 ประเภทห้อง</h2>
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border text-gray-700">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="p-3 border">ประเภท</th>
                <th className="p-3 border">ขนาด</th>
                <th className="p-3 border">รายเดือน</th>
                <th className="p-3 border">รายวัน</th>
                <th className="p-3 border">สัญญา</th>
                <th className="p-3 border">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr key={i} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{r.type}</td>
                  <td className="p-2 border">{r.size}</td>
                  <td className="p-2 border">{r.month}</td>
                  <td className="p-2 border">{r.day}</td>
                  <td className="p-2 border">{r.contract}</td>
                  <td className="p-2 border text-blue-600 font-semibold">
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* สิ่งอำนวยความสะดวก */}
        <h2 className="text-2xl font-semibold mb-4">🧰 สิ่งอำนวยความสะดวก</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-gray-700">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 rounded-lg p-2"
            >
              <span className="text-blue-600 text-xl">{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>

        {/* รายละเอียดเพิ่มเติมเกี่ยวกับหอพัก */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">📜 รายละเอียดเพิ่มเติม</h2>
          <p>{dorm.details}</p>
        </div>
      </div>
    </div>
  );
}
