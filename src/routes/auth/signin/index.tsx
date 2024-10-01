import { useState } from "react";
import { CgEye, CgEyeAlt } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="grid gap-6">
      <div className="text-center grid gap-1">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-slate-600">
          Enter your credentials to access your account
        </p>
      </div>
      <form className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200">
        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
            // placeholder="Enter your username"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <label className="font-[600] tracking-wider" htmlFor="username">
              Password:
            </label>
            <Link
              className="font-[500] text-primary text-[14px]"
              to={"/resetpassword"}
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              // placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-1 top-1 h-[85%] grid items-center px-3 bg-white"
              onClick={toggleShowPassword}
            >
              {!showPassword ? (
                <CgEye size={20} className="text-slate-400" />
              ) : (
                <FaEyeSlash size={20} className="text-slate-400" />
              )}
            </button>
          </div>
        </div>
        <div>
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[14.5px] mt-3">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center font-semibold  tracking-wide">
        <Link to="/signup">
          Need an account? <span className="text-primary">Create account</span>
        </Link>
      </div>
    </div>
  );
};
