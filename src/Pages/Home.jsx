import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My ToyZone website.
          </h1>

          <p className="text-gray-600 mb-6">
            A simple authentication system built with React & Tailwind CSS.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
