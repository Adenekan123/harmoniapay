import { IProps } from "../../..";
import OTPCountdown from "./countdown";
import { PhoneOTP } from "./otp";

export const ValidatePhone = (props:IProps) => {
    const { switcher } = props;

  // Implement your logic to validate the phone number and send the OTP
  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        An OTP has been sent to ******04.
      </p>

      <div className="flex justify-between items-center mt-8">
        <label className="font-[600] tracking-wide" htmlFor="username">
          Verify Phone:
        </label>
        <OTPCountdown />
      </div>
      <PhoneOTP switcher={switcher}/>
    </>
  );
};

