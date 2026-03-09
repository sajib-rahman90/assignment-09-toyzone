import React from "react";
import ToyCards from "../Components/ToyCards";
import HomeSlider from "../Components/HomeSlider";
import PageTitle from "../Components/PageTitle";
import WhyChooseUs from "../Components/WhyChooseUs";
import DiscountToys from "../Components/DiscountToys";

const Home = () => {
  return (
    <div className="w-full mx-auto bg-gray-100 p-8 ">
      <PageTitle title="Home" />
      <section>
        <HomeSlider />
      </section>
      <section>
        <ToyCards />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <DiscountToys />
      </section>
    </div>
  );
};

export default Home;
