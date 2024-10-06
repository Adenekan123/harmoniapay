import { useFormik } from "formik";
import { IRegisterPhone } from "../../types";
import { toast } from "react-toastify";
import { useAppContext } from "../../../../../context/app/useAppContext";
import { registerphone } from "./api";

const initialValues: IRegisterPhone = {
  phone_number: "",
  device_id: "",
};

const validate = (values: IRegisterPhone) => {
  const errors: Partial<IRegisterPhone> = {};
  if (!values.phone_number) {
    errors.phone_number = "Phone number required";
  } else if (values.phone_number.length < 11) {
    errors.phone_number = "Must be 11 characters";
  }

  return errors;
};

export const usePhoneReg = () => {
  const { deviceid } = useAppContext();
  return useFormik({
    initialValues,
    validate,
    onSubmit: async (values, formikhelpers) => {
      const response = await registerphone(
        {
          ...values,
          phone_number: values.phone_number.replace("+234", "0"),
          device_id: deviceid as string,
        },
        formikhelpers
      );
      if (response?.data?.identifier)
        localStorage.setItem("authidentifier", response.data.identifier);
      toast.success(response?.message);
    },
  });
};
