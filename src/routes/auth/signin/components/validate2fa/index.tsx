import OTPCountdown from "./countdown";
import { SigninOTP } from "./otp";

export const Validate2fa = () => {

  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        An OTP has been sent to your 2FA app.
      </p>

      <div className="flex justify-between items-center mt-8">
        <label className="font-[600] tracking-wide" htmlFor="username">
          Verify OTP:
        </label>
        <OTPCountdown />
      </div>
      <SigninOTP />
    </>
  );
};

