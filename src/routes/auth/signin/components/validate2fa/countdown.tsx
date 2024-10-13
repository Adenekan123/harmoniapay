import { useCallback, useEffect, useState } from "react";
import { CountdownRenderProps } from "react-countdown";
import { BiLoader } from "react-icons/bi";
import CustomCountdown from "../../../countdown";
import { useResend2FaOTP } from "../../../../../lib/swr/queriesAndMutations/auth";

const OTPCountdown = () => {
  const { trigger, isMutating: resending } = useResend2FaOTP();
  const [sent, setSent] = useState(false);

  const handleResend = useCallback(async () => {
    const response = await trigger();
    if (response?.sent) setSent(true);
  }, [trigger]);

  const renderer = useCallback(
    ({ minutes, seconds, completed, api }: CountdownRenderProps) => {
      if (completed) {
        // Render a complete state
        return (
          <button
            disabled={resending}
            className="bg-transparent text-primary font-semibold disabled:text-gray-400"
            onClick={handleResend}
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
    [resending, sent, handleResend]
  );

  useEffect(() => {
    console.log("restarting");
  }, []);
  return <CustomCountdown seconds={180000} renderer={renderer} />;
};

export default OTPCountdown;
