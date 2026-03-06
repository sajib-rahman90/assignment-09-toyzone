import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  const toys = useLoaderData();
  const sliderToys = toys.slice(0, 5);

  return (
    <div className="w-full auto bg-gray-100 py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Toys
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sliderToys.map((toy) => (
            <SwiperSlide key={toy.toyId}>
              <div className="bg-white rounded-xl  transition duration-300 overflow-hidden">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{toy.toyName}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
