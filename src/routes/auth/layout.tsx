import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className=" min-h-screen w-full bg-bgBase">
      <div className="header border-b px-12 h-[70px] flex items-center shadow-lg shadow-slate-100 bg-white">
        <img src="/images/logo2.png" />
      </div>
      <div className="max-w-lg mx-auto mt-[15%] lg:mt-[2%] rounded-md px-4 md:px-0">
        <Outlet />
      </div>
    </div>
  );
};
