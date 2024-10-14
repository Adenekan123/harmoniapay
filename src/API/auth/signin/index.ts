import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ISignin } from "../types";
import { AxiosInstance, setAxiosToken } from "../../../lib/axios/axios.instance";

interface IResponse {
  token: string;
  message?: string;
}
interface IErrorResponse {
  errors: { [key: string]: string[] };
  message: string;
  data?: {
    error: string;
    code: number;
  };
}

export const signin = async (
  values: { phone_number: string; password: string; device_id: string },
  helpers: FormikHelpers<ISignin>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>("/user/login", values);
    if (response.status === 200) {
      setAxiosToken(response.data.token);
      if (response.data.message) toast.success(response.data.message);
      helpers.setStatus(true);
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
