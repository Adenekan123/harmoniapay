import { FormikHelpers } from "formik";

import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { IVerifyEmail } from "../types";
import { AxiosInstance } from "../../../lib/axios/axios.instance";

interface IResponse {
  data: {
    identifier: string;
  };
  message: string;
}
interface IErrorResponse {
  errors: { [key: string]: string[] };
  message: string;
  data?: {
    error: string;
    code: number;
  };
}

export const verifyemail = async (
  values: IVerifyEmail,
  helpers: FormikHelpers<IVerifyEmail>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/validate-email-otp",
      values
    );
    helpers.setStatus(true);
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
