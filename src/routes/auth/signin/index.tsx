import { useCallback, useMemo, useState } from "react";
import { Credentials } from "./components/credentials";
import { Validate2fa } from "./components/validate2fa";

export enum ESignInsteps {
  credentials,
  verify2fa,
}

export interface ISwitcherProps {
  switcher: (step: keyof typeof ESignInsteps) => void;
}

export const Signin = () => {
  const [step, setStep] = useState<ESignInsteps>(ESignInsteps["credentials"]);

  const switchStep = useCallback((step: keyof typeof ESignInsteps) => {
    setStep(ESignInsteps[step]);
  }, []);

  const screen = useMemo(() => {
    switch (step) {
      case ESignInsteps["credentials"]:
        return <Credentials switcher={switchStep} />;
      case ESignInsteps["verify2fa"]:
        return <Validate2fa />;
      default:
        return null;
    }
  }, [step, switchStep]);
  return (
    <div className="grid">
      {screen}
    </div>
  );
};
