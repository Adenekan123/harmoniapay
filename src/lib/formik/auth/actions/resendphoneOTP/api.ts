import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import { IResendVerifyPhone } from "../../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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

export const verifyphone = async (
  values: IResendVerifyPhone,
  helpers: FormikHelpers<IResendVerifyPhone>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/resend-new-user-otp",
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
