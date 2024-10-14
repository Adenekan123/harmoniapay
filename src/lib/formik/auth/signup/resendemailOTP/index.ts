import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IResendVerifyEmail } from "../../../../../API/auth/types";
import { registeremail } from "../../../../../API/auth/signup/email";


const initialValues: IResendVerifyEmail = {
  identifier: localStorage.getItem("authidentifier") as string,
  email: localStorage.getItem("authemail") as string,
};

export const useResendVerifyEmail = () => {
  return useFormik({
    initialValues,
    onSubmit: async (values, formikhelpers) => {
      const response = await registeremail(values, formikhelpers);
      if (response?.data?.error) toast.warning(response?.data.error);
    },
  });
};
