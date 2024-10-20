import { BiTransferAlt } from "react-icons/bi";
import { IoTrendingUpOutline } from "react-icons/io5";
import {
  PiArrowRight,
  PiCurrencyCircleDollarDuotone,
  PiCurrencyCircleDollarFill,
  PiHandWithdrawDuotone,
  PiInfo,
  PiPiggyBankDuotone,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="notifation border border-amber-300 bg-amber-100 text-black font-[500]  rounded-md px-4 md:px-6 py-3 flex gap-4 md:text-sm text-xs mb-6">
        <span>
          <PiInfo size={20} className="text-amber-500" />
        </span>
        <p>
          Weldone! activate your account by completing your KYC status{" "}
          <Link to="/kyc" className="underline font-bold">
            here
          </Link>
        </p>
      </div>
      <div className="grid gap-9">
        <div className="welcome grid gap-1">
          <p className="text-xl md:text-2xl">
            Welcome, <span className="font-bold">James Bond</span>
          </p>
          <p className="text-sm text-slate-500">Let work on your money.</p>
        </div>

        <div className="overview grid gap-4">
          <p className="text-md md:text-lg font-[500] tracking-wide">
            Account Overview
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-black rounded-xl text-white relative z-[1] grid gap-8 px-5 py-6 md:p-8 ">
              <div className="grid gap-3">
                <div className="flex gap-6 items-center">
                  <span>
                    <PiCurrencyCircleDollarFill
                      className="text-secondary"
                      size={36}
                    />
                  </span>
                  <p className=" text-sm md:text-md font-[600]">
                    Account Balance
                  </p>
                </div>
                <p className="text-xs md:text-sm text-gray-400 max-w-60" style={{lineHeight:1.7}}>
                  Your balance will appear here when you open USD account
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-6 items-center">
                    <p className="text-sm md:text-md font-[600]">
                      Create USD account
                    </p>
                    <span>
                      <PiArrowRight className="text-secondary" size={24} />
                    </span>
                  </div>
                </div>
                <div className="absolute right-6 -bottom-6">
                  <img
                    src="/images/wallet.png"
                    alt=""
                    className="h-24 md:h-28"
                  />
                </div>
              </div>
            </div>
            <div className="bg-green-500 rounded-xl text-white relative z[1] grid gap-8 px-5 py-6 md:p-8">
              <div className="grid gap-3">
                <div className="flex gap-6 items-center">
                  <span className="w-[2.1rem] h-[2.1rem] rounded-full bg-green-700 text-white text-secondary flex justify-center items-center">
                    <BiTransferAlt className="text-white" size={24} />
                  </span>
                  <p className="text-sm md:text-md font-[600]">Exchange Rate</p>
                </div>
                <p className="text-xs md:text-sm text-green-50 max-w-60" style={{lineHeight:1.7}}>
                  Sometimes our rate changes in split seconds
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="flex gap-6 items-center">
                    <p
                      className="text-md font-[600]"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      $1 = 1506.00 NGN
                    </p>
                    <span>
                      <PiArrowRight className="text-white" size={24} />
                    </span>
                  </div>
                </div>
                <div className="absolute right-6 -bottom-2">
                  <IoTrendingUpOutline
                    scale={40}
                    size={70}
                    className="text-green-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-actions grid gap-4 max-w-6xl mt-6">
          <p className="text-md md:text-lg font-[500] tracking-wide">
            Quick Actions
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to={"/"}
              className="bg-black grid gap-2 px-5 py-6 md:px-8 rounded-lg"
            >
              <p className="text-sm md:text-md text-white font-[600]">
                Withdrawal
              </p>
              <div className="flex justify-between items-center gap-10">
                <p className="text-xs md:text-sm text-gray-400 max-w-60 leading-relaxed">
                  Withdraw directly to your local Bank
                </p>
                <div className="relative -bottom-3">
                  <PiHandWithdrawDuotone className="text-secondary w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>
            </Link>
            <Link
              to={"/"}
              className="bg-black grid gap-2 px-5 py-6 md:px-8 rounded-lg"
            >
              <p className="text-sm md:text-md text-white font-[600]">Convert</p>
              <div className="flex justify-between items-center gap-10">
                <p className="text-xs md:text-sm text-gray-400 max-w-60 leading-relaxed">
                  Convert currency to your local currency
                </p>
                <div className="relative -bottom-3">
                  <PiCurrencyCircleDollarDuotone className="text-secondary w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>
            </Link>
            <Link
              to={"/"}
              className="bg-black grid gap-2 px-5 py-6 md:px-8 rounded-lg"
            >
              <p className="text-sm md:text-md text-white font-[600]">Earn</p>
              <div className="flex justify-between items-center gap-10">
                <p className="text-xs md:text-sm text-gray-400 max-w-60 leading-relaxed">
                  Get up to $200 by referring users
                </p>
                <div className="relative -bottom-3">
                  <PiPiggyBankDuotone className="text-secondary w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
