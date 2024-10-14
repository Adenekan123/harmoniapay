import { FormikHelpers } from "formik";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IRegisterEmail } from "../types";
import { AxiosInstance } from "../../../lib/axios/axios.instance";

interface IResponse {
  data: {
    error: string;
    code: number;
  };
}
interface IErrorResponse {
  errors: { [key: string]: string[] };
  message: string;
  data?: {
    error: string;
    code: number;
  };
}

export const registeremail = async (
  values: { email: string; identifier: string },
  helpers: FormikHelpers<IRegisterEmail>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/add-email",
      values
    );
    if (response.data.data.code === 200) {
      helpers.setStatus(true);
      localStorage.setItem("authemail", values.email);
    }
    return response.data;
  } catch (e) {
    const error = e as AxiosError<IErrorResponse>;
    helpers.setStatus(false);
    toast.error(error.response?.data.message);
    toast.error(error.response?.data.data?.error);
  } finally {
    helpers.setSubmitting(false);
  }
};
