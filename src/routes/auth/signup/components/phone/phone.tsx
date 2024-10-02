import { forwardRef, LegacyRef, useState } from "react";

import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {IProps } from "../..";

const CustomInput = forwardRef(
  (props: DefaultInputComponentProps, ref: LegacyRef<HTMLInputElement>) => (
    <input
      ref={ref}
      type="text"
      className="w-full py-[14.5px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
      onChange={props.onChange}
      placeholder="+234 9076308204"
    />
  )
);


export const Phone = (props:IProps) => {
  const {switcher} = props;
  const [value, setValue] = useState<string>();
  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Get started by verifying your phone number.
      </p>
      <form className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6">
        <div className="grid gap-3">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Phone number:
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={(e) => setValue(e)}
            defaultCountry="NG"
            inputComponent={CustomInput}
            
          />
        </div>

        <div>
          <button onClick={()=>switcher("verifyphone")} type="button" className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[13px] mt-3">
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
