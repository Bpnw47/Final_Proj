import React from 'react';
import ApartmentForm from './components/ApartmentForm'; 
import ApartmentList from './components/ApartmentList'; 
import RoutingApp from './components/RoutingApp';
const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment Management App</h1>
      <RoutingApp /> {/* สำหรับ routing */}
    </div>
=======
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <RoutingApp />
      </div>
    </BrowserRouter>
>>>>>>> 5f08484ea72c24f76b9789d38a18a7aa84a96c91
  );
};
export default App;