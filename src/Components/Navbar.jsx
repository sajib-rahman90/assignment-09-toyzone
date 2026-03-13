import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, signOutUserFunc } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    // signOut(auth)
    signOutUserFunc()
      .then(() => {
        toast.success("Sign Out Succesfull!");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div>
      <nav className="bg-indigo-600 text-white px-4 md:px-8 py-4">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-xl font-bold text-center md:text-left">
            ToyZone
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-3 md:space-x-4">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
            >
              Home
            </NavLink>

            <NavLink
              to={"/about-us"}
              className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
            >
              About Us
            </NavLink>
            {user && (
              <NavLink
                to={"my-profile"}
                className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
              >
                My Profile
              </NavLink>
            )}
            {user && (
              <NavLink
                to={"my-orders"}
                className={({ isActive }) => (isActive ? "text-cyan-300" : "")}
              >
                Orders
              </NavLink>
            )}
          </div>
          {user ? (
            <div className="relative group text-center flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5">
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10 mb-0 rounded-full mx-auto"
                alt=""
              />

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
            hidden group-hover:block 
            bg-black text-white text-sm px-3 py-1 rounded whitespace-nowrap"
              >
                {user?.displayName || "No Name"}
              </div>

              <button
                onClick={handleSignOut}
                className="w-full md:w-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `${isActive ? "text-cyan-300" : ""} mx-auto md:mx-0`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
