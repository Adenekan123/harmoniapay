import { useEffect } from "react";

import "react-phone-number-input/style.css";
import { IProps } from "../../..";
import { usePhoneReg } from "../../../../../../lib/formik/auth/signup/phone";

export const EnterPhone = (props: IProps) => {
  const { switcher } = props;
  const { values, handleSubmit, handleChange, errors, isSubmitting, status } =
    usePhoneReg();
  useEffect(() => {
    if (status) {
      switcher("verifyphone");
    }
  }, [switcher, status]);
  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Get started by verifying your phone number.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6"
      >
        <div className="grid gap-3">
          <label className="font-[600] tracking-wide" htmlFor="username">
            Phone number:
          </label>
          <input
            type="text"
            name="phone_number"
            className={`w-full py-[12px] pl-4 border-slate-300 focus:outline-primary outline-offset-0 border rounded-md ${
              errors.phone_number
                ? "focus:outline-red-500"
                : " focuse:outline-primary"
            } `}
            onChange={handleChange}
            value={values.phone_number}
            placeholder="+234 9076308204"
          />

          {errors.phone_number ? (
            <p className="text-red-500  text-sm">{errors.phone_number}</p>
          ) : null}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-gray-800 disabled:opacity-25 text-white font-semibold rounded-lg text-lg py-[12px] mt-3"
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
