import { forwardRef, LegacyRef, useEffect } from "react";

import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IProps } from "../../..";
import { usePhoneReg } from "../../../../../../lib/formik/auth/actions/phone";

const CustomInput = forwardRef(
  (props: DefaultInputComponentProps, ref: LegacyRef<HTMLInputElement>) => (
    <input
      ref={ref}
      type="text"
      name="phone_number"
      className="w-full py-[14.5px] pl-4 focus:outline-inherit outline-offset-0"
      onChange={props.onChange}
      placeholder="+234 9076308204"
    />
  )
);

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
          <PhoneInput
            placeholder="Enter phone number"
            value={values.phone_number}
            onChange={(e) =>
              handleChange({ target: { value: e, name: "phone_number" } })
            }
            defaultCountry="NG"
            inputComponent={CustomInput}
            className={`bg-white border rounded-md pl-3 ${
              errors.phone_number
                ? "border-red-500 a-red-500"
                : "border-slate-300 outline-primary"
            }`}
          />
          {errors.phone_number ? (
            <p className="text-red-500 pl-10 text-sm">{errors.phone_number}</p>
          ) : null}
        </div>

        <div>
          <button
            // onClick={() => switcher("verifyphone")}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-600 disabled:opacity-25 text-white font-semibold rounded-lg text-lg py-[13px] mt-3"
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
