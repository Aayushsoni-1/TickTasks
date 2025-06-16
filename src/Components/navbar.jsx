import React from 'react'
import { onAuthStateChanged, signOut } from "Firebase/auth";
import { auth } from "./Firebase";



const Navbar = () => {

    const handleLogout = async () => {
      await signOut(auth);
// Clears session tokens from storage.
// Logs the user out securely.
      setUser(null);
      navigate("/login");
    };

  return (
    <nav className="bg-[#f0f4f8] border-b-2 border-[#94a3b8] flex flex-wrap justify-between items-center px-6 py-4">
      <div className="logo text-blue-600 text-3xl font-bold">TickTask</div>
      <ul className="text-[#1e293b] flex flex-wrap gap-6 mt-2 sm:mt-0">
        <li className="hover:text-blue-500 relative group cursor-pointer">
          <span>Uses</span>
          <ul className="absolute hidden group-hover:block bg-white text-blue-600 rounded-md shadow-lg border-2 border-blue-300 min-w-[180px] mt-2 z-50">
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-100">✔️ Time Management</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-blue-100">⏳ Project Management</a></li>
          </ul>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">Your Tasks</li>

        <li onClick={handleLogout} className="hover:text-blue-500 cursor-pointer">Log Out</li>

      </ul>
    </nav>
  )
}

export default Navbar




