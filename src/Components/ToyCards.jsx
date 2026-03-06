import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const ToyCards = () => {
  const toys = useLoaderData();
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Popular Toys
      </h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-8">
        {toys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {toy.toyName}
              </h3>

              <div className="flex items-center gap-1 mb-2">
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= Math.round(toy.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{toy.rating}</span>
              </div>

              <p className="text-sm text-gray-600 mb-1">
                Available:{" "}
                <span className="font-medium">{toy.availableQuantity}</span>
              </p>

              <p className="text-lg font-bold text-indigo-600 mb-4">
                ${toy.price}
              </p>

              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCards;
