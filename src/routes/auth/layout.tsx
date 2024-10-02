import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="h-screen w-full bg-bgBase">
      <div className="header border-b px-12 h-[70px] flex items-center shadow-lg shadow-slate-100 bg-white">
        <img src="/images/logo2.png" />
      </div>
      <div className="max-w-md mx-auto mt-[15%] lg:mt-[4%] rounded-md px-4 md:px-0">
        <Outlet />
      </div>
    </div>
  );
};
