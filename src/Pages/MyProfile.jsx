import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const { user, updateProfileFunc } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await updateProfileFunc(name, photoURL);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Something went wrong!");
      console.log(error);
    }

    setLoading(false);
  };

  if (!user) {
    return (
      <p className="text-center mt-10 text-lg font-medium">No user found</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      <div className="max-w-md w-full my-10 p-6  rounded-xl bg-white shadow-md ">
        <h1 className="text-2xl font-semibold text-center mb-6">My Profile</h1>

        {/* User Info Section */}
        <div className="text-center mb-6">
          <img
            src={user.photoURL || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h2 className="text-xl font-semibold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Update Form Section */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Update Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border p-2 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Update Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photoURL"
              className="w-full border p-2 rounded-lg"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
