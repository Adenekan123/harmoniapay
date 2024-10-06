import { useCallback, useEffect } from "react";
import { CountdownRenderProps } from "react-countdown";
import { BiLoader } from "react-icons/bi";
import CustomCountdown from "../../countdown";
import { useResendVerifyPhone } from "../../../../../../lib/formik/auth/actions/resendphoneOTP";

const OTPCountdown = () => {
  const {
    submitForm: resend,
    isSubmitting: resending,
    status: sent,
  } = useResendVerifyPhone();

  const renderer = useCallback(
    ({ minutes, seconds, completed, api }: CountdownRenderProps) => {
      if (completed) {
        // Render a complete state
        return (
          <button
            disabled={resending}
            className="bg-transparent text-primary font-semibold disabled:text-gray-400"
            onClick={resend}
          >
            Resend OTP {resending && <BiLoader />}
          </button>
        );
      } else {
        // Render a countdown
        if (sent) api.start();
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    },
    [resend, resending, sent]
  );

  useEffect(() => {
    console.log("restarting");
  }, []);
  return <CustomCountdown seconds={4000} renderer={renderer} />;
};

export default OTPCountdown;
