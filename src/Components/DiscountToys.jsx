import React from "react";
import { FaArrowRight } from "react-icons/fa";
import toysImg from "/kids toys.jpg";
const DiscountToys = () => {
  const scrollToToys = () => {
    document
      .getElementById("popular-toys")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-[#e0f5f0] rounded-2xl overflow-hidden container mx-auto my-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left side Text Content */}
        <div className="flex-1 py-10 px-6 md:px-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600 mb-4 leading-tight">
            25% Off All Toys Today
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-sm mx-auto md:mx-0">
            We are currently offering a substantial discount of 25% on all toys
            available in our store.
          </p>

          <button
            onClick={scrollToToys}
            className="inline-flex items-center gap-2  bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition  px-6 text-sm sm:text-base"
          >
            Shop Now <FaArrowRight />
          </button>
        </div>

        {/* Right side Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={toysImg}
            alt="Toys"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountToys;
