import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }
    console.log(name, email, password, photo);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((res) => {
            toast.success("Registation Succesfull!");
            console.log(res);
          })
          .catch((err) => {
            toast.error(err);
          });
        toast.success("Registation Succesfull!");
        console.log(res);
      })
      .catch((err) => {
        const errorMessage = err.message;
        if (errorMessage) {
          toast.error(errorMessage);
          // alert(errorMessage);
        }
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        console.log("user", user);
        toast.success("Login Succesfull!");
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log("error", errorMessage);
        if (errorMessage) {
          toast.error(errorMessage);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Photo */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <input
              type="text"
              placeholder="Enter your PhotoURL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-9 cursor-pointer z-20"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>

          <div className="py-10 flex justify-center items-center ">
            <button
              onClick={handleGoogleSignIn}
              className="p-2 w-full font-semibold bg-gray-300 rounded-full cursor-pointer"
            >
              Continue With Google Login
            </button>
          </div>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
