import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import { IVerifyPhone } from "../../types";
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
  values: IVerifyPhone,
  helpers: FormikHelpers<IVerifyPhone>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/validate-new-user-otp",
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
