"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const savedRemember = localStorage.getItem("rememberMe") === "true";

    if (savedUsername) setUsername(savedUsername);
    if (savedPassword) setPassword(savedPassword);
    setRememberMe(savedRemember);
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      toast.warning("Please enter username and password");
      return;
    }

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    const alreadyLoggedIn = username === savedUsername && password === savedPassword;

    if (alreadyLoggedIn) {
      toast.info("You are already logged in");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }

    if (savedUsername && savedPassword) {
      toast.error("Username or password is incorrect");
      return;
    }

    toast.success("Login successful");
    setTimeout(() => {
      router.push("/");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ToastContainer position="top-center" />

      <div className="bg-white rounded-2xl shadow-lg p-15 md:flex md:w-[1000px]">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>

          <input
            type="text"
            placeholder="Enter Username"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-4">
            <input id="remember" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button onClick={handleLogin} className="bg-[#ff9090] cursor-pointer text-white px-6 py-2 rounded-md mb-4 w-fit">
            Login
          </button>

          <div className="flex space-x-4 mb-4">
            <div className="mb-4">Or, Login with</div>
            <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
            <FcGoogle className="cursor-pointer" size={24} />
            <FaSquareXTwitter className="cursor-pointer" size={24} />
          </div>

          <p>
            Don't have an account?
            <a href="#" className="text-blue-600 hover:underline">
              Create One
            </a>
          </p>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
          <img src="/images/login.webp" alt="Login Illustration" className="w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
}
