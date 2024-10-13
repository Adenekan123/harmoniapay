import { useFormik } from "formik";
import { ISignin } from "../../types";
import { useAppContext } from "../../../../../context/app/useAppContext";
import { signin } from "./api";

const initialValues: ISignin = {
  phone_number: "",
  password: "",
  device_id: "",
};

const validate = (values: ISignin) => {
  const errors: Partial<ISignin> = {};
  if (!values.phone_number) {
    errors.phone_number = "Phone number required";
  } else if (values.phone_number.length < 11) {
    errors.phone_number = "Must be 11 characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters";
  }

  return errors;
};

export const useSignin = () => {
  const { deviceid } = useAppContext();
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      await signin(
        {
          ...values,
          phone_number: values.phone_number.replace("+234", "0"),
          device_id: deviceid as string,
        },
        formikhelpers
      );
    },
  });
};
