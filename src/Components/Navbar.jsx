import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-indigo-600 text-white px-8 py-4">
        <div className=" container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ToyZone</h1>

          <div className="space-x-4">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              Home
            </NavLink>

            <NavLink
              to={"/register"}
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              Register
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
