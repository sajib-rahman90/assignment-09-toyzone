import React from "react";
import { useLoaderData } from "react-router";
import ToyCards from "../Components/ToyCards";
import HomeSlider from "../Components/HomeSlider";
import PageTitle from "../Components/PageTitle";

const Home = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="w-full mx-auto bg-gray-100 p-8 ">
      <PageTitle title="Home" />
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
