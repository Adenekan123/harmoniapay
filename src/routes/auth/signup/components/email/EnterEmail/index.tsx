import { MdOutlineEmail } from "react-icons/md";
import { IProps } from "../../..";
import { useEmailReg } from "../../../../../../lib/formik/auth/actions/email";
import { useEffect } from "react";

export const EnterEmail = (props: IProps) => {
  const { values, handleSubmit, handleChange, errors, isSubmitting, status } =
    useEmailReg();
  const { switcher } = props;

  useEffect(() => {
    if (status) {
      switcher("verifyemail");
    }
  }, [switcher, status]);


  return (
    <>
      <p className="text-slate-600 mt-1 text-center">
        Well done! now let take your email.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white px-6 md:px-12 py-12 rounded-lg shadow-lg shadow-slate-200 my-6"
      >
        <div className="grid gap-3">
          <label className="font-[600] tracking-wide" htmlFor="username">
            E-mail:
          </label>
          <div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary"
              />
              <div className="absolute right-1 top-1 h-[85%] grid items-center px-3 bg-white">
                <MdOutlineEmail size={18} />
              </div>
            </div>
            {errors.email ? (
              <p className="text-red-500 pl-10 text-sm">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 disabled:bg-opacity-25 text-white font-semibold rounded-lg text-lg py-[12px] mt-3"
          >
            Verify
          </button>
        </div>
      </form>
    </>
  );
};
