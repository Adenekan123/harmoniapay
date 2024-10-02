import { useState } from "react";
import {  BiCheckShield } from "react-icons/bi";
import {  CgEye } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import OTPInput from "react-otp-input";
import ReactPasswordChecklist from "react-password-checklist";

const messages={
  minLength: "8 characters",
  specialChar: "Special character",
  number: "Number",
  capital: "Capital letter",
  match: "Match",
}
interface IProps{
  onSignedUp:()=>void;
}
export const BasicInformation = (props:IProps) => {
  const {onSignedUp} = props;
  const [otp, setOtp] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const [password, setPassword] = useState("");

  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Lastly! Let get your basis information.
      </p>
      <form className="grid gap-5 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="font-[600] tracking-wide" htmlFor="username">
              First name:
            </label>
            <input
              type="text"
              className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-[600] tracking-wide" htmlFor="username">
              Last name:
            </label>
            <input
              type="text"
              className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Password:
          </label>
          <div>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
                onChange={(e) => setPassword(e.target.value)}
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
            <ReactPasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              className="grid grid-cols-2 md:grid-cols-3 gap-1  text-xs"
              iconSize={12}
              iconComponents={{ValidIcon:<BiCheckShield color="green"/>,InvalidIcon:<IoClose color="red"/>}}
              itemClassName="items-center flex"
              messages={messages}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Set transaction pin:
          </label>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className="focus:outline-primary text-lg font-semibold"
              />
            )}
            inputStyle={{
              width: "100%",
              height: 50,
              border: "1px solid #ddd",
              borderRadius: 4,
            }}
            containerStyle={{ gap: 4 }}
          />
        </div>
        <div>
          <button onClick={onSignedUp} className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[13px] mt-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
