import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IVerify2fa } from "../../../../../API/auth/types";
import { verify2fa } from "../../../../../API/auth/signin/verify2fa";


const initialValues: IVerify2fa = {
  otp: "",
};

const validate = (values: IVerify2fa) => {
  const errors: Partial<IVerify2fa> = {};
  if (!values.otp) {
    errors.otp = "OTP required";
  } else if (values.otp.length < 7 || values.otp.length > 7) {
    errors.otp = "Must be 7 characters";
  }

  return errors;
};

export const useVerify2fa = () => {
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await verify2fa(
        { ...values },
        formikhelpers
      );
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
