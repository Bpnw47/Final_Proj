import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store';
import { addApartment, updateApartment, type Apartment } from '../store/apartmentSlice';
interface ApartmentFormProps {
    editingApartment?: Apartment; // สำหรับ edit mode 
    onCancelEdit?: () => void; // สำหรับยกเลิก edit 
}
/* นิยามคอมโพเนนต์ สำหรับ add apartment ใหม่ */
const ApartmentForm: React.FC<ApartmentFormProps> = ({ editingApartment, onCancelEdit }) => {
    const dispatch = useDispatch<AppDispatch>();
    // Use local state to manage form inputs 
    const [name, setName] = useState(editingApartment?.name || '');
    const [detail, setDetail] = useState(editingApartment?.detail || '');
    const [price, setPrice] = useState(editingApartment?.price || 0);
    // ฟังก์ชันรองรับปุ่ม SUBMIT
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingApartment) {
                // Dispatch update and wait for it to complete 
                await dispatch(updateApartment({ id: editingApartment.id, name, detail, price })).unwrap();
                if (onCancelEdit) onCancelEdit(); // Cancel edit mode on success 
            } else {
                // Dispatch add and wait for it to complete 
                await dispatch(addApartment({ name, detail, price })).unwrap();
                // Reset form only on successful addition 
                setName('');
                setDetail('');
                setPrice(0);
            }
        } catch (error) {
            console.error('Failed to save the apartment:', error);
            // Optional: Display an error message to the user 
        }
    };

    // ************* JSX ************************ 
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {editingApartment ? 'Edit Apartment' : 'Add New Apartment'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* ช่องกรอกชื่อ Apartment */}
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none 
focus:ring-2 focus:ring-blue-500"
                        required />
                </div>
                {/* ช่องกรอกรายละเอียด Detail */}
                <div>
                    <label className="block text-gray-700">Detail:</label>
                    <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none 
focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                {/* ช่องกรอกราคา Price */}
                <div>
                    <label className="block text-gray-700">Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none 
focus:ring-2 focus:ring-blue-500"
                        required min="0" step="0.01" />
                </div>

                {/* ปุ่ม Submit Buttons */}
                <div className="flex space-x-2">
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 
transition-colors flex-grow" >
                        {editingApartment ? 'Update' : 'Add'}
                    </button>

                    {/* กรณีมีการแก้ไขรายการหนังสือ */}
                    {editingApartment && onCancelEdit && (
                        <button type="button"
                            onClick={onCancelEdit}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 
transition-colors" >
                            Cancel
                        </button>

                    )}
                </div>
            </form>
        </div>
    );
};
export default ApartmentForm;