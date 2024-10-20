import { Outlet } from "react-router-dom";
import Aside from "./dashboard.aside";
import { TbBell, TbUserSquareRounded } from "react-icons/tb";
import MobileMenu from "./dashboard.mobile.menu";

export const DashboardLayout = () => {
  return (
    <div className="bg-bgBase grid grid-cols-12 h-screen">
      <aside className="lg:col-span-2 bg-black lg:py-6 fixed bottom-0 lg:relative w-full z-10">
        <Aside/>
        <MobileMenu/>
      </aside>
      <main className=" col-span-12 lg:col-span-10">
        <div className="flex flex-col">
          <div className="h-[70px] bg-white px-4 md:px-24 shadow-sm flex justify-between items-center">
            <h2 className="font-semibold">Dashboard</h2>
            <div className="flex gap-8 items-center">
              <TbBell className="h-6 w-6 md:h-7 md:w-7" />
              <TbUserSquareRounded  className="h-6 w-6 md:h-7 md:w-7" />
            </div>
          </div>
          <div className="flex-1 bg-red px-4 md:px-24 py-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
