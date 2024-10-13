import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import { IVerify2fa } from "../../types";
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

export const verify2fa = async (
  values: IVerify2fa,
  helpers: FormikHelpers<IVerify2fa>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/validate-2fa-otp",
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
