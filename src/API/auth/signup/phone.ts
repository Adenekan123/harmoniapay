import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IRegisterPhone } from "../types";
import { AxiosInstance } from "../../../lib/axios/axios.instance";

interface IResponse {
  data: {
    identifier: string;
    error?:string
  };
  message?: string;
}
interface IErrorResponse {
  errors: {[key:string]:string[]};
  message: string;
  data?: {
    error: string;
    code:number
  };
}

export const registerphone = async (
  values: { phone_number: string; device_id: string },
  helpers: FormikHelpers<IRegisterPhone>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/register",
      values
    );
    if (response.status === 200) {
      if (response.data.message) toast.success(response.data.message);
    }
    helpers.setStatus(true);
    return response.data;
  } catch (e) {
    const error = e as AxiosError<IErrorResponse>
    helpers.setStatus(false);
    toast.error(error.response?.data.message);
    toast.error(error.response?.data.data?.error);
  } finally {
    helpers.setSubmitting(false);
  }
};
