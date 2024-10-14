import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IResendVerifyPhone } from "../../../../../API/auth/types";
import { resendphoneotp } from "../../../../../API/auth/signup/resendphoneotp";

const initialValues: IResendVerifyPhone = {
  identifier: "",
};

export const useResendVerifyPhone = () => {
  const identifier = localStorage.getItem("authidentifier") as string;
  return useFormik({
    initialValues,
    onSubmit: async (v, formikhelpers) => {
      const response = await resendphoneotp({...v, identifier }, formikhelpers);
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
