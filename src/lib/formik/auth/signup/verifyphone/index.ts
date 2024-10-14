import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IVerifyPhone } from "../../../../../API/auth/types";
import { verifyphone } from "../../../../../API/auth/signup/verifyphone";

const initialValues: IVerifyPhone = {
  otp: "",
  identifier: "",
};

const validate = (values: IVerifyPhone) => {
  const errors: Partial<IVerifyPhone> = {};
  if (!values.otp) {
    errors.otp = "OTP required";
  } else if (values.otp.length < 7 || values.otp.length > 7) {
    errors.otp = "Must be 7 characters";
  }

  return errors;
};

export const useVerifyPhone = () => {
  const identifier = localStorage.getItem("authidentifier") as string;
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await verifyphone(
        { ...values, identifier },
        formikhelpers
      );
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
