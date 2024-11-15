import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Presto</h1>
      <p className="text-lg mb-8">Your favourite presentation app.</p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
