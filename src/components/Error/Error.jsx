import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  return (
    <>
      <Navbar />
      <div className="space-y-5 text-center h-[80vh] flex flex-col justify-center">
        <div className="w-screen p-5">
          <img src="/src/assets/error.jpg" className="rounded-xl mx-auto" />
        </div>
        <h3 className="text-4xl font-bold text-red-400">
          404 - Page Not Found
        </h3>
        <p className="text-lg">
          Oops! The page you are looking for doesn't exist.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="btn rounded-full p-10 text-xl font-bold hover:bg-[#0EA106] hover:text-white"
          >
            Go Back to Homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
