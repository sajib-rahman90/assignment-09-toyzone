import React from "react";
import { Link, useLoaderData } from "react-router";
import ToyCards from "../Components/ToyCards";
import HomeSlider from "../Components/HomeSlider";

const Home = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="w-full mx-auto bg-gray-100 p-8 ">
      <section>
        <HomeSlider />
      </section>
      <section>
        <ToyCards />
      </section>
    </div>
  );
};

export default Home;
