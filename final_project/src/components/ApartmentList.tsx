import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { fetchApartments, deleteApartment, selectApartments, selectLoading, selectError, type Apartment} from
    '../store/apartmentSlice';
import ApartmentForm from './ApartmentForm';
/* สำหรับ display, edit, delete */
const ApartmentList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const apartments = useSelector(selectApartments);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [editingApartment, setEditingApartment] = useState<Apartment | undefined>(undefined);  // State ท้องถิ่น 
    // ฟังก์ชัน เพื่อเรียกใช้ fetchApartments 
    useEffect(() => {
        dispatch(fetchApartments());
    }, [dispatch]);
    // ฟังก์ชันเพื่อการแก้ไขข้อมูลอพาร์ทเมนต์
    const handleEdit = (apartment: Apartment) => {
        setEditingApartment(apartment);
    };
    // ฟังก์ชันเพื่อการยกเลิกการแก้ไขข้อมูลอพาร์ทเมนต์
    const handleCancelEdit = () => {
        setEditingApartment(undefined);
    };
    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error}</p>;

    // Add a check to ensure 'apartments' is an array before trying to map over it. 
    // This prevents the component from crashing if the API returns unexpected data. 
    if (!Array.isArray(apartments)) {
        return <p className="text-center text-red-600">Error: Received invalid data from the
            server.</p>;
    }

    // **************** JSX ***************************** 
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Apartment List</h2>
            {apartments.length === 0 ? (
                <p className="text-center text-gray-500">No apartments found. Add one above!</p>
            ) : (
                <ul className="space-y-3">
                    {
                        // แสดงรายการอพาร์ทเมนต์
                        apartments.map(apartment => (
                            <li key={apartment.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                                <div>
                                    <h3 className="font-medium text-gray-700">{apartment.name}</h3>
                                    <p className="text-gray-600">{apartment.detail}</p>
                            {/* Ensure price is a number before calling toFixed to prevent crashes */}
                            <p className="text-gray-600">${apartment.price}</p>
                            {/* <p className="text-gray-600">${(typeof apartment.price === 'number' ? apartment.price : 
0).toFixed(2)}</p> */}
                        </div>
                        <div className="flex space-x-2">
                            {/* ปุ่มแก้ไขรายการอพาร์ทเมนต์ */}
                            <button onClick={() => handleEdit(apartment)}
                                className="text-blue-500 hover:text-blue-700" >
                                Edit
                            </button>

                            {/* ปุ่มลบรายการอพาร์ทเมนต์ */}
                            <button onClick={() => dispatch(deleteApartment(apartment.id))}
                                className="text-red-500 hover:text-red-700" >
                                Delete
                            </button>
                        </div>
                    </li>
                    )) 
          }
                </ul>
            )}

            {/* เรียก component ที่ชื่อ ApartmentForm พร้อมส่ง props (เป็น function) ไปให้ 2 ตัว */}
            {editingApartment && (
                <div className="mt-6">
                    <ApartmentForm editingApartment={editingApartment} onCancelEdit={handleCancelEdit} />
                </div>
            )}
        </div>
    );
};

export default ApartmentList;