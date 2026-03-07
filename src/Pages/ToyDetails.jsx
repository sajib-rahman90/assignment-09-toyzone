import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import PageTitle from "../Components/PageTitle";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  const toy = toys?.find((t) => t.toyId == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!toy) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
  };

  return (
    <div className="container bg-gray-100 mx-auto px-4 py-10">
      <PageTitle title={`${toy.toyName}`} />
      {/* Toy Info */}
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-80 object-cover rounded"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">{toy.toyName}</h2>

          <p className=" font-medium mb-2">
            Rating:{" "}
            <span className="text-indigo-600 font-medium">
              {toy.rating}
            </span>{" "}
          </p>
          <p className=" font-medium mb-2">
            Seller Name:{" "}
            <span className="text-indigo-600 font-medium">
              {toy.sellerName}
            </span>
          </p>
          <p className=" font-medium mb-2">
            Seller Email:{" "}
            <span className="text-indigo-600 font-medium">
              {toy.sellerEmail}
            </span>{" "}
          </p>

          <p className=" font-medium mb-2">
            Available Quantity:{" "}
            <span className="text-indigo-600 font-medium">
              {toy.availableQuantity}
            </span>
          </p>

          <p className="text-xl font-semibold mb-4">
            Price:{" "}
            <span className="text-indigo-600 font-medium">${toy.price}</span>
          </p>

          <p className="font-medium">{toy.description}</p>
        </div>
      </div>

      {/* Try Now Form */}

      <div className="mt-10 text-center mx-auto bg-white p-6 rounded shadow max-w-md">
        <h3 className="text-xl font-semibold mb-4">Try This Toy</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Try Now
          </button>
        </form>

        {success && (
          <p className="text-green-600 mt-4">
            Toy request submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ToyDetails;
