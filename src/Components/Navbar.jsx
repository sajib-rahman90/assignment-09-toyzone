import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, signOutUserFunc } = useContext(AuthContext);
  console.log(user);

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
            {user && (
              <NavLink
                to={"my-profile"}
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : ""
                }
              >
                My Profile
              </NavLink>
            )}
          </div>
          {/* <button className="btn primary"> log</button> */}
          {user ? (
            <div className="relative group text-center flex justify-between items-center gap-[20px] space-y-3">
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-[40px] mb-[0px]  rounded-full mx-auto"
                alt=""
              />

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                  hidden group-hover:block 
                  bg-black text-white text-sm px-3 py-1 rounded whitespace-nowrap"
              >
                {user?.displayName || "No Name"}
              </div>
              {/* <h2 className="text-xl font-semibold">{user?.displayName}</h2> */}
              {/* <p>{user?.email}</p> */}
              <button
                onClick={handleSignOut}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? "text-purple-500" : "")}
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
