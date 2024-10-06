import { useFormik } from "formik";
import { verifyphone } from "./api";
import { IResendVerifyPhone } from "../../types";
import { toast } from "react-toastify";

const initialValues: IResendVerifyPhone = {
  identifier: "",
};

export const useResendVerifyPhone = () => {
  const identifier = localStorage.getItem("authidentifier") as string;
  return useFormik({
    initialValues,
    onSubmit: async (v, formikhelpers) => {
      const response = await verifyphone({...v, identifier }, formikhelpers);
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
