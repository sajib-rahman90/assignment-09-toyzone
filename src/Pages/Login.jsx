import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signOutUserFunc,
    sendPasswordResetEmailFunc,
    user,
    setUser,
  } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
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

  const handleSignOut = () => {
    // signOut(auth)
    signOutUserFunc()
      .then(() => {
        toast.success("Sign Out Succesfull!");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    // signInWithPopup(auth, googleProvider)
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setUser(res.user);
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

  const handlResetPassword = () => {
    // sendPasswordResetEmail(auth, email)
    sendPasswordResetEmailFunc(email)
      .then((res) => {
        toast.success("Check your email to reset password");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // console.log(email);
  };

  console.log(email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        {user ? (
          <div className="text-center space-y-3">
            <img
              src={user?.photoURL || "https://via.placeholder.com/88"}
              className="h-20 w20 rounded-full mx-auto"
              alt=""
            />
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p>{user?.email}</p>
            <button
              onClick={handleSignOut}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogIn} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Login to your account
            </h2>
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              className="cursor-pointer"
              onClick={handlResetPassword}
              type="button"
            >
              Reset Password!
            </button>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>

            <div className="py-10 flex justify-center items-center ">
              <button
                onClick={handleGoogleSignIn}
                className="p-2 w-full font-semibold bg-gray-300 rounded-full cursor-pointer"
              >
                Continue With Google Login
              </button>
            </div>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
