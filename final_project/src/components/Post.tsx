import React, { useState } from "react";

export default function Post() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  // ฟังก์ชันแสดงรูป preview หลังอัปโหลด
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages([...previewImages, ...newPreviews]);
    }
  };

  return (
    <div className="pt-24 p-10 text-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        📢 ลงประกาศหอพัก
      </h1>
      <p className="text-gray-700 text-lg mb-10">
        กรุณากรอกรายละเอียดของหอพักที่ต้องการลงประกาศ
        พร้อมเพิ่มรูปภาพเพื่อดึงดูดผู้เช่า
      </p>

      <form className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 text-left">
        {/* ชื่อหอพัก */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-semibold">
            ชื่อหอพัก
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-400"
            placeholder="เช่น บ้านสุขใจ อพาร์ตเมนต์"
          />
        </div>

        {/* รายละเอียด */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-semibold">
            รายละเอียด
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-400"
            placeholder="กรอกรายละเอียดหอพักของคุณ เช่น สิ่งอำนวยความสะดวก ทำเล ฯลฯ"
            rows={4}
          ></textarea>
        </div>

        {/* ราคา */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-semibold">
            ราคา (บาท/เดือน)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-400"
            placeholder="เช่น 4500"
          />
        </div>

        {/* อัปโหลดรูป */}
        <div className="mb-8">
          <label className="block text-gray-700 mb-2 font-semibold">
            รูปภาพหอพัก
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-600
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-600 file:text-white
                       hover:file:bg-blue-700 cursor-pointer"
          />

          {/* พรีวิวรูป */}
          {previewImages.length > 0 && (
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {previewImages.map((src, index) => (
                <div
                  key={index}
                  className="relative border rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="object-cover w-full h-40"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setPreviewImages(
                        previewImages.filter((_, i) => i !== index)
                      )
                    }
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ปุ่มลงประกาศ */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          ✅ ลงประกาศ
        </button>
      </form>
    </div>
  );
}
