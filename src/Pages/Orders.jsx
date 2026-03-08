import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="w-full mx-auto bg-gray-100 p-8 ">
      <PageTitle title="My Orders" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          My Orders
        </h1>

        <div className=" space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white  rounded-xl shadow-sm hover:shadow-md transition p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-5"
            >
              <div className="w-full md:w-32 h-40 md:h-24 shrink-0">
                <img
                  src={order.image}
                  alt={order.toyName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {order.toyName}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Order Date: {order.date}
                </p>
              </div>

              <div className="font-semibold text-indigo-600 text-lg">
                ${order.price}
              </div>

              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
