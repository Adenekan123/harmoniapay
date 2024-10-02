import {MdOutlineEmail } from "react-icons/md";
import { IProps } from "../..";

export const Email = (props:IProps) => {
  const {switcher} = props;
  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Well done! now let take your email.
      </p>
      <form className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6">
        <div className="grid gap-3">
          <label className="font-[600] tracking-wide" htmlFor="username">
            E-mail:
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
            />
            <div className="absolute right-1 top-1 h-[85%] grid items-center px-3 bg-white">
              <MdOutlineEmail size={18} />
            </div>
          </div>
        </div>

        <div>
          <button onClick={()=>switcher("verifyemail")} className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[13px] mt-3">
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
