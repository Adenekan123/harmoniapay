import { useFormik } from "formik";
import { toast } from "react-toastify";
import { registeremail } from "./api";
import { IRegisterEmail } from "../../types";

const initialValues: IRegisterEmail = {
  email: "",
  identifier: "",
};

const validate = (values: IRegisterEmail) => {
  const errors: Partial<IRegisterEmail> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email";
  }

  return errors;
};

export const useEmailReg = () => {
const identifier = localStorage.getItem("authidentifier") as string;
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await registeremail({...values,identifier}, formikhelpers);
      if (response?.data?.error) toast.warning(response?.data.error);
    },
  });
};
