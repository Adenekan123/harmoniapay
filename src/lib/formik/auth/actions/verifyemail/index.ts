import { useFormik } from "formik";
import { verifyemail } from "./api";
import { IVerifyEmail } from "../../types";
import { toast } from "react-toastify";

const initialValues: IVerifyEmail = {
  otp: "",
  email:"",
  identifier: "",
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
  const identifier = localStorage.getItem('authidentifier') as string
  const email = localStorage.getItem('authemail') as string
  console.log({identifier,email})
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await verifyemail(
        {...values,identifier,email},
        formikhelpers
      );
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
