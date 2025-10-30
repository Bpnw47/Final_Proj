export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <span className="font-semibold text-blue-500">Dorm Finder </span>  
          คือ ระบบค้นหาหอพักที่ถูกออกแบบมาเพื่อช่วยให้นักศึกษาและผู้ที่มองหาหอพัก  
          สามารถค้นหาหรือจองที่พักได้อย่างสะดวก รวดเร็ว และปลอดภัย 🏠
        </p>

        {/* รูปภาพหรือไอคอนประกอบ */}
        <div className="flex justify-center mb-6 pt-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889061.png"
            alt="Dorm Finder Icon"
            className="w-24 h-24"
          />
        </div>

        <p className="text-gray-600 leading-relaxed pt-4">
          ภายในระบบจะมีข้อมูลของแต่ละหอพัก เช่น
          <span className="font-semibold"> รายละเอียดห้องพัก, ราคาเช่ารายเดือน, สิ่งอำนวยความสะดวก </span>
          รวมถึงช่องทางการติดต่อทีมงานได้โดยตรง เพื่อให้ผู้ใช้สามารถเลือกหอพักที่เหมาะกับงบประมาณและความต้องการได้อย่างมั่นใจ 🌟  เรามุ่งมั่นที่จะทำให้การหาหอพักกลายเป็นเรื่องง่าย สะดวก และปลอดภัยสำหรับทุกคน
        </p>

        <div className="mt-8 border-t pt-4 text-gray-500 text-sm">
          © 2025 Dorm Finder | จัดทำโดยทีม Dorm Finder 💙
        </div>
      </div>
    </div>
  );
}
