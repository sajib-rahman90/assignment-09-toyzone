import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-indigo-600 text-white px-8 py-4">
        <div className=" container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ToyZone</h1>

          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <Link to="/register" className="hover:underline">
              Register
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
