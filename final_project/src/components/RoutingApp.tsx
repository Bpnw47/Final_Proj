// 1) Import
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ApartmentForm from './ApartmentForm';
import ApartmentList from './ApartmentList';
// Level 1 : RoutingApp (npm install react-router-dom @types/react - router - dom) 
// 2) Create RoutingApp component
const RoutingApp: React.FC = () => {
  const [apartmentsMenuOpen, setApartmentsMenuOpen] = useState(false);
  // 2.2 JSX with routing structure 
  return (
    <BrowserRouter>
      {/* 2.2.1) BrowserRouter */}
      <div className="min-h-screen bg-gray-100">
        {/* Nav Bar and Links */}
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            {/* 2.3.4) Link */}
            <li><Link to="/" className="text-white hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-white hover:underline">About</Link></li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setApartmentsMenuOpen(!apartmentsMenuOpen)}
                className="text-white hover:underline flex items-center"
                aria-expanded={apartmentsMenuOpen}
              >
                Apartments
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {apartmentsMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/apartments/list"
                    onClick={() => setApartmentsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    List / Edit / Delete
                  </Link>
                  <Link
                    to="/apartments/new"
                    onClick={() => setApartmentsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Add New Apartment
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
        {/* Routes and Route Handling */}
        <div className="max-w-4xl mx-auto">
          {/* 2.2.2) Routes */}
          <Routes>
            {/* 2.2.3) Route and path */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apartments/list" element={<ApartmentList />} />
            <Route path="/apartments/new" element={<ApartmentForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default RoutingApp;
