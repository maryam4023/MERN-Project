import React, { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import ProductList from './Componentsdb/ProductList';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  return (
    <div className="relative  bg-gray-200">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-gray-200 w-64 min-h-screen absolute top-0 left-0 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="p-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button onClick={closeSidebar} className="absolute top-3 right-3 text-gray-400 hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="mt-5">
            <li className="py-2 ">
            <button onClick={toggleHomeDropdown} className="w-full text-left flex justify-between items-center py-2 hover:bg-gray-700">
            DivineDazzle Beauty
              <svg className={`w-5 h-5 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isHomeDropdownOpen && (
              <ul className="pl-5 mt-2">
                <li className="py-2  hover:bg-gray-700">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 hover:bg-gray-700">
                  <Link to="/about">About</Link>
                </li>
                <li className="py-2 hover:bg-gray-700">
                  <Link to="/Chocolates">Chocolates</Link>
                </li>
                <li className="py-2 hover:bg-gray-700">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            )}
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link to='/ProductForm/:id'>ProductForm</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link>Settings</Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-gray-700 text-white p-5 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div>Admin Dashboard</div>
          <div>User</div>
        </header>

        {/* Main Content */}
        <main className="p-5">
          <ProductList/>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;