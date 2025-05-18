import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/register" className="text-white hover:underline">Register</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/students" className="text-white hover:underline">Students</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;