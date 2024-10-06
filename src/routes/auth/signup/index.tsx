
import { BasicInformation } from "./components/basicinformation";
import Successful from "./components/successful";

import { useCallback, useMemo, useState } from "react";
import { EnterPhone,ValidatePhone } from "./components/phone";
import { EnterEmail, ValidateEmail } from "./components/email";

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
        return <EnterPhone switcher={switchStep}/>;
      case Esteps["verifyphone"]:
        return <ValidatePhone switcher={switchStep} />;
      case Esteps["email"]:
        return <EnterEmail switcher={switchStep} />;
      case Esteps["verifyemail"]:
        return <ValidateEmail switcher={switchStep} />;
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
