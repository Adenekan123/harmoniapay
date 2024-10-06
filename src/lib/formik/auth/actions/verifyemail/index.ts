import { useFormik } from "formik";
import { verifyemail } from "./api";
import { IVerifyEmail } from "../../types";
import { toast } from "react-toastify";

const initialValues: IVerifyEmail = {
  otp: "",
  email:localStorage.getItem('authemail') as string,
  identifier: localStorage.getItem('authidentifier') as string,
};

const validate = (values: IVerifyEmail) => {
  const errors: Partial<IVerifyEmail> = {};
  if (!values.otp) {
    errors.otp = "OTP is required";
  } else if (values.otp.length < 7 || values.otp.length > 7) {
    errors.otp = "Must be 7 characters";
  }

  return errors;
};

export const useVerifyEmail = () => {
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await verifyemail(
        values,
        formikhelpers
      );
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
