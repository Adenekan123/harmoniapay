import { useEffect } from "react";

import OtpInput from "react-otp-input";
import { IProps } from "../../..";
import { useVerifyPhone } from "../../../../../../lib/formik/auth/actions/verifyphone";

export const PhoneOTP = (props: IProps) => {
  const { switcher } = props;

  const { values, handleSubmit, handleChange, isSubmitting, status } =
    useVerifyPhone();

  useEffect(() => {
    if (status) {
      switcher("email");
    }
  }, [switcher, status]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6"
      >
        <OtpInput
          value={values.otp}
          onChange={(v) => handleChange({ target: { value: v, name: "otp" } })}
          numInputs={7}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="focus:outline-primary text-lg font-semibold"
              disabled={isSubmitting}
            />
          )}
          inputStyle={{
            width: "100%",
            height: 44,
            border: "1px solid #ddd",
            borderRadius: 4,
          }}
          containerStyle={{ gap: 4 }}
        />

        <div>
          <button
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg text-lg py-[12px] mt-3 disabled:opacity-5"
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
