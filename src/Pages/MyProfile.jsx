import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user.displayName);
  console.log(user);
  return (
    <div>
      <h1 className="  text-center text-xl font-semibold">
        This is My Profile{" "}
      </h1>
      <div className=" w-1/4 mt-7 mx-auto text-center  border-2">
        <img
          src={user?.photoURL || "https://via.placeholder.com/88"}
          className="h-10   rounded-full mx-auto "
          alt=""
        />
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
