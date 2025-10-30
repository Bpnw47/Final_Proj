export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        {/* หัวข้อ */}
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">
          ติดต่อเรา
        </h1>
        <p className="text-center text-gray-600 mb-6">
          หากคุณมีคำถามข้อเสนอแนะหรือปัญหาในการใช้งาน  
          สามารถติดต่อทีมงาน <span className="font-semibold">Dorm Finder</span> ได้เลย 💬
        </p>

        {/* ข้อมูลการติดต่อ */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-gray-700">
          <p className="flex items-center mb-2">
            📧 <span className="ml-2 font-medium">dormfinder@example.com</span>
          </p>
          <p className="flex items-center mb-2">
            📞 <span className="ml-2 font-medium">012-345-6789</span>
          </p>
          <p className="flex items-center">
            📍 <span className="ml-2 font-medium">กรุงเทพมหานคร ประเทศไทย</span>
          </p>
        </div>

        {/* ฟอร์มติดต่อ */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              ชื่อของคุณ
            </label>
            <input
              type="text"
              placeholder="กรอกชื่อของคุณ"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">อีเมล</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              ข้อความ
            </label>
            <textarea
              rows={4}
              placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..."
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            ส่งข้อความ
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ขอบคุณที่ติดต่อเรา 💙 ทีม Dorm Finder จะตอบกลับโดยเร็วที่สุด
        </p>
      </div>
    </div>
  );
}
