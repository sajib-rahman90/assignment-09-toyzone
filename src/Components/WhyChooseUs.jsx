import React from "react";
import {
  FaCheckCircle,
  FaTruck,
  FaSmile,
  FaMoneyBillAlt,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12 container mx-auto">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-0.5 flex-1 bg-indigo-600"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-indigo-600 whitespace-nowrap">
            Why Choose Us?
          </h2>
          <span className="h-0.5 flex-1 bg-indigo-600"></span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-2">
          <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:border-r lg:last:border-r-0 border-gray-300">
            <span className="text-4xl sm:text-5xl text-yellow-400 mb-4">
              <FaCheckCircle />
            </span>
            <p className="text-red-500 font-semibold text-sm sm:text-base lg:text-lg leading-snug whitespace-pre-line">
              Original <br />
              Products
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:border-r lg:last:border-r-0 border-gray-300">
            <span className="text-4xl sm:text-5xl text-yellow-400 mb-4">
              <FaTruck />
            </span>
            <p className="text-red-500 font-semibold text-sm sm:text-base lg:text-lg leading-snug whitespace-pre-line">
              Delivers <br /> within 1–5 days
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:border-r lg:last:border-r-0 border-gray-300">
            <span className="text-4xl sm:text-5xl text-yellow-400 mb-4">
              <FaSmile />
            </span>
            <p className="text-red-500 font-semibold text-sm sm:text-base lg:text-lg leading-snug whitespace-pre-line">
              A+ Customer <br />
              Service
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:border-r lg:last:border-r-0 border-gray-300">
            <span className="text-4xl sm:text-5xl text-yellow-400 mb-4">
              <FaMoneyBillAlt />
            </span>
            <p className="text-red-500 font-semibold text-sm sm:text-base lg:text-lg leading-snug whitespace-pre-line">
              COD <br />
              Available
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:border-r lg:last:border-r-0 border-gray-300">
            <span className="text-4xl sm:text-5xl text-yellow-400 mb-4">
              <FaShieldAlt />
            </span>
            <p className="text-red-500 font-semibold text-sm sm:text-base lg:text-lg leading-snug     whitespace-pre-line">
              Secured <br />
              Payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
