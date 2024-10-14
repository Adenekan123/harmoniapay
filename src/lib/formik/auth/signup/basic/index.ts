import { useFormik } from "formik";
import { toast } from "react-toastify";
import { IRegisterBasicInfo, registerbasicinfo } from "../../../../../API/auth/signup/basicinfo";

const initialValues: IRegisterBasicInfo = {
  identifier: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirmation: "",
  passcode: "",
  confirm_passcode: "",
};

const validate = (values: IRegisterBasicInfo) => {
  const errors: Partial<IRegisterBasicInfo> = {};

  if (!values.first_name) {
    errors.first_name = "Firstname is required";
  } else if (values.first_name?.length < 3) {
    errors.first_name = "Firstname should be atleast 3 characters";
  }

  if (!values.last_name) {
    errors.last_name = "Lastname is required";
  } else if (values.last_name?.length < 3) {
    errors.last_name = "Lastname should be atleast 3 characters";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password?.length < 3) {
    errors.password = "Password should be atleast 3 characters";
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "Passwords do not match";
  }

  if (!values.passcode) {
    errors.passcode = "Passcode is required";
  } else if (values.passcode?.length < 4) {
    errors.passcode = "Passcode should be  4 characters";
  }
  if (!values.confirm_passcode) {
    errors.confirm_passcode = "Please confirm your passcode";
  } else if (values.confirm_passcode?.length < 4) {
    errors.confirm_passcode = "Passcode should be  4 characters";
  } else if (values.passcode !== values.confirm_passcode) {
    errors.confirm_passcode = "Passcode does not match";
  }

  return errors;
};

export const useBasicReg = () => {
  const identifier = localStorage.getItem("authidentifier") as string;
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await registerbasicinfo(
        { ...values, identifier },
        formikhelpers
      );
      if (response?.data?.error) toast.warning(response?.data.error);
    },
  });
};
