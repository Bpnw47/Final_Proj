import React from 'react';
import ApartmentForm from './components/ApartmentForm'; 
import ApartmentList from './components/ApartmentList'; 
import RoutingApp from './components/RoutingApp';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment Management App</h1>
      <RoutingApp /> {/* สำหรับ routing */}
    </div>
  );
};
export default App;