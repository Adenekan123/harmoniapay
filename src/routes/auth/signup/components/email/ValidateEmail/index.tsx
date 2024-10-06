import { IProps } from "../../..";
import OTPCountdown from "./countdown";
import { EmailOTP } from "./otp";

export const ValidateEmail = (props:IProps) => {
    const { switcher } = props;
    const email = localStorage.getItem("authemail") as string 

  // Implement your logic to validate the phone number and send the OTP
  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        An OTP has been sent to {email}.
      </p>

      <div className="flex justify-between items-center mt-8">
        <label className="font-[600] tracking-wide" htmlFor="username">
          Verify Email:
        </label>
        <OTPCountdown />
      </div>
      <EmailOTP switcher={switcher}/>
    </>
  );
};

