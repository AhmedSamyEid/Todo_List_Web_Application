"use client";

import { FcGoogle } from "react-icons/fc";
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function LoginPage() {
  



  

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-[10px] shadow-lg p-10  flex flex-col md:flex-row w-full max-w-[1500px] min-h-[500px]">
        <div className="md:w-[700px] w-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>

          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Enter Username"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-black" />
            <input
              type="password"
              placeholder="Enter Password"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>

          <div className="flex items-center mb-4">
            <input id="remember" type="checkbox"  className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button  className="bg-[#ff9090] hover:bg-[#f87272] text-white px-6 py-2 rounded-md mb-4 w-fit">
            Login
          </button>

          <div className="flex items-center mb-4">
            <span className="mr-2">Or, Login with</span>
            <FaFacebook className="text-blue-600 mx-1 cursor-pointer" size={20} />
            <FcGoogle className="mx-1 cursor-pointer" size={20} />
            <FaSquareXTwitter className="mx-1 cursor-pointer" size={20} />
          </div>

          <p className="text-sm">
            Don't have an account?
            <a href="#" className="text-blue-600 hover:underline">
              Create One
            </a>
          </p>
        </div>

        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center">
          <img src="/images/login.webp" alt="Login Illustration" className="w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
}
