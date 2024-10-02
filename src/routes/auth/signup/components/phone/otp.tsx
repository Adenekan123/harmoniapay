import { useCallback, useState } from "react";

import OtpInput from "react-otp-input";
import CustomCountdown from "../countdown";
import { CountdownRenderProps } from "react-countdown";
import {IProps } from "../..";

export const PhoneOTP = (props:IProps) => {
  const {switcher} = props;
  const [otp, setOtp] = useState("");

//   const sendOTP = useCallback(()=>{
//     // Send OTP to the entered phone number
//     // Here you can call your API to send OTP
//     // Once the OTP is sent, set the seconds to 60
//     // and disable the resend button
//     setSeconds(60);
//   },[])

const renderer = useCallback(
    ({ minutes, seconds, completed, api }: CountdownRenderProps) => {
      if (completed) {
        // Render a complete state

        return <button className="bg-transparent text-primary font-semibold" onClick={() => api.start()}>Resend OTP</button>;
      } else {
        // Render a countdown
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    },
    []
  );

  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        An OTP has been sent to ******04.
      </p>
      <form className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6">
        <div className="grid gap-3">
          <div className="flex justify-between items-center">
            <label className="font-[600] tracking-wide" htmlFor="username">
              Verify Phone:
            </label>
            <CustomCountdown seconds={150000} renderer={renderer} />
          </div>
          <OtpInput
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
          <button onClick={()=>switcher("email")} className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[13px] mt-3">
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
