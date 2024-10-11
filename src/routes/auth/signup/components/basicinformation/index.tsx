import { useEffect, useState } from "react";
import { BiCheckShield } from "react-icons/bi";
import { CgEye } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import OTPInput from "react-otp-input";
import ReactPasswordChecklist from "react-password-checklist";
import { useBasicReg } from "../../../../../lib/formik/auth/actions/basic";

const messages = {
  minLength: "8 characters",
  specialChar: "Special character",
  number: "Number",
  capital: "Capital letter",
  match: "Match",
};
interface IProps {
  onSignedUp: () => void;
}
export const BasicInformation = (props: IProps) => {
  const { onSignedUp } = props;
  // const [passcode, setPasscode] = useState<string>();
  // const [confirm_passcode, setConfirm_passcode] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  // const [password, setPassword] = useState("");
  // const [password_confirmation, setPassword_confirmation] = useState("");

  const { values, handleSubmit, handleChange, errors, isSubmitting, status } =
    useBasicReg();

  useEffect(() => {
    if (status) {
      onSignedUp();
    }
  }, [onSignedUp, status]);

  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Lastly! Let get your basis information.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="font-[600] tracking-wide" htmlFor="username">
              First name:
            </label>
            <input
              type="text"
              className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              value={values.first_name}
              onChange={handleChange}
              name="first_name"
            />
            {errors.first_name ? (
              <p className="text-red-500 pl-10 text-sm">{errors.first_name}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <label className="font-[600] tracking-wide" htmlFor="username">
              Last name:
            </label>
            <input
              type="text"
              className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              value={values.last_name}
              onChange={handleChange}
              name="last_name"
            />
            {errors.last_name ? (
              <p className="text-red-500 pl-10 text-sm">{errors.last_name}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Password:
          </label>
          <div className="relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              onChange={handleChange}
              name="password"
              value={values.password}
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
        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Confirm Password:
          </label>
          <div>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full py-[12px] px-6 border ${
                  errors.password_confirmation
                    ? "border-red-500 focus:outline-red-500"
                    : "border-slate-300 focus:outline-primary"
                } rounded-lg `}
                onChange={handleChange}
                name="password_confirmation"
                value={values.password_confirmation}
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
              value={values.password}
              valueAgain={values.password_confirmation}
              className="grid grid-cols-2 md:grid-cols-3 gap-1  text-xs"
              iconSize={12}
              iconComponents={{
                ValidIcon: <BiCheckShield color="green" />,
                InvalidIcon: <IoClose color="red" />,
              }}
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
            value={values.passcode}
            onChange={(v)=>handleChange({target:{value:v,name:'passcode'}})}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className={`${
                  errors.passcode
                    ? "focus:outline-red-500 border-red-500"
                    : "focus:outline-primary border-slate-300"
                } text-lg font-semibold`}
              />
            )}
            inputStyle={{
              width: "100%",
              height: 44,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
            containerStyle={{ gap: 12 }}
          />
        </div>
        <div className="grid gap-2">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Confirm transaction pin:
          </label>
          <OTPInput
            value={values.confirm_passcode}
            onChange={(v)=>handleChange({target:{value:v,name:'confirm_passcode'}})}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className={`${
                  errors.confirm_passcode
                    ? "focus:outline-red-500 border-red-500"
                    : "focus:outline-primary border-slate-300"
                } text-lg font-semibold`}
              />
            )}
            inputStyle={{
              width: "100%",
              height: 44,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
            containerStyle={{ gap: 16 }}
          />
        </div>
        <div>
          <button
          type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[12px] mt-3"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
