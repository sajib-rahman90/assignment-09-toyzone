import React from "react";
import error_404 from "../assets/error-404.png";
import PageTitle from "../Components/PageTitle";

const ErrorPage = () => {
  return (
    <div>
      <PageTitle title="Error Page" />
      <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-5 lg:p-20 md:p-10  space-y-3">
        <div>
          <img src={error_404} alt="" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-semibold text-[#001931]">
            Oops, page not found!
          </h1>
          <p className="text-xl font-normal ">
            The page you are looking for is not available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
