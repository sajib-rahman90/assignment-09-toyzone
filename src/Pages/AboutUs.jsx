import React from "react";
import PageTitle from "../Components/PageTitle";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <PageTitle title="About Us" />
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center py-16 ">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            About ToyZone
          </h1>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            ToyZone is a fun and trusted online toy marketplace where parents
            can easily find safe, creative, and educational toys for children of
            all ages.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#e0f5f0] grid md:grid-cols-2 gap-10 shadow items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1608889175123-8ee362201f81"
              alt="Toy store"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Text */}
          <div className="px-8 md:py-10">
            <h2 className="text-4xl font-semibold mb-4 text-indigo-600">
              Our Mission
            </h2>

            <p className="text-gray-600 font-medium mb-4">
              Our goal is simple. We want to bring joy and creativity into
              children's lives through carefully selected toys. Every toy in
              ToyZone is chosen to inspire imagination, learning, and fun.
            </p>

            <p className="text-gray-600 font-medium mb-4">
              We believe toys are more than just entertainment. They help
              children develop creativity, problem solving skills, and social
              interaction.
            </p>

            <p className="text-gray-600 font-medium">
              ToyZone offers a wide variety of toys including educational toys,
              action figures, puzzles, and creative play sets. Our team works
              hard to make sure every toy meets quality and safety standards.
            </p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-5">
              <span className="text-2xl">🧸</span>
            </div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Quality Toys
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We carefully select toys that are safe, durable, and enjoyable for
              kids.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-5">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Trusted Store
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Parents trust ToyZone because we focus on quality and customer
              satisfaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-5">
              <span className="text-2xl">😊</span>
            </div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Happy Kids
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our biggest success is seeing children happy while playing with
              our toys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
