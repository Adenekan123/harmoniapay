import { useEffect, useState } from "react";
import { CgEye } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ISwitcherProps } from "../..";
import { useSignin } from "../../../../../lib/formik/auth/signin";

export const Credentials = (props:ISwitcherProps) => {
  const { switcher } = props;
  const { values, handleSubmit, handleChange, errors, isSubmitting, status } =
    useSignin();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  useEffect(()=>{
    if(status) switcher("verify2fa")
  },[status,switcher])
  return (
    <div className="grid gap-6">
      <div className="text-center grid gap-1">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-slate-600">
          Enter your credentials to access your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-gray-200"
      >
        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Phone number:
          </label>
          <input
            type="text"
            className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            // placeholder="Enter your username"
          />
          {errors.phone_number ? (
            <p className="text-red-500  text-sm">{errors.phone_number}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <label className="font-[600] tracking-wider" htmlFor="username">
              Password:
            </label>
            <Link
              className="font-[500] text-secondary text-[14px]"
              to={"/resetpassword"}
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              name="password"
              value={values.password}
              onChange={handleChange}
              // placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-1 top-1 h-[85%] grid items-center px-3 bg-white"
              onClick={toggleShowPassword}
            >
              {!showPassword ? (
                <CgEye size={20} className="text-secondary" />
              ) : (
                <FaEyeSlash size={20} className="text-secondary" />
              )}
            </button>
            {errors.password ? (
              <p className="text-red-500  text-sm">{errors.password}</p>
            ) : null}
          </div>
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-gray-800 disabled:opacity-25 text-white font-semibold rounded-lg text-lg py-[12px] mt-3"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center font-semibold  tracking-wide">
        <Link to="/signup">
          Need an account?{" "}
          <span className="text-secondary">Create account</span>
        </Link>
      </div>
    </div>
  );
};
