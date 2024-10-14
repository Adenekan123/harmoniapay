import { FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { AxiosInstance } from "../../../lib/axios/axios.instance";

interface IResponse {
  message?: string;
  errors?: {
    [key: string]: string[];
  };
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
export interface IRegisterBasicInfo {
  identifier: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  passcode: string;
  confirm_passcode: string;
}

export const registerbasicinfo = async (
  values: IRegisterBasicInfo,
  helpers: FormikHelpers<IRegisterBasicInfo>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/basic-detail",
      values
    );
    if (response.status === 200) {
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
