import { Email } from "./components/email/email";
import { EmailOTP } from "./components/email/otp";
import { BasicInformation } from "./components/basicinformation";
import Successful from "./components/successful";
import { Phone } from "./components/phone/phone";
import { PhoneOTP } from "./components/phone/otp";

import { useCallback, useMemo, useState } from "react";

export enum Esteps {
  phone,
  verifyphone,
  email,
  verifyemail,
  basic,
  successful,
}

export interface IProps{
  switcher:(step: keyof typeof Esteps) => void
}

export const SignUp = () => {
  const [signedUp, setSeignedUp] = useState(false);
  const [step, setStep] = useState<Esteps>(Esteps["phone"]);

  const switchStep = useCallback((step: keyof typeof Esteps) => {
    setStep(Esteps[step]);
  }, []);

  const onSignedUp = useCallback(() => {
    switchStep("successful");
    setSeignedUp(true);
  }, [switchStep]);
  const screen = useMemo(() => {
    switch (step) {
      case Esteps["phone"]:
        return <Phone switcher={switchStep} />;
      case Esteps["verifyphone"]:
        return <PhoneOTP switcher={switchStep} />;
      case Esteps["email"]:
        return <Email switcher={switchStep} />;
      case Esteps["verifyemail"]:
        return <EmailOTP switcher={switchStep} />;
      case Esteps["basic"]:
        return <BasicInformation onSignedUp={onSignedUp} />;
      default:
        return null;
    }
  }, [step,onSignedUp,switchStep]);
  return (
    <div className="grid">
      {!signedUp ? (
        <>
          <h2 className="text-3xl font-bold text-center">Join HarmoniaPay</h2>
          {screen}
        </>
      ) : (
        <Successful />
      )}
    </div>
  );
};
