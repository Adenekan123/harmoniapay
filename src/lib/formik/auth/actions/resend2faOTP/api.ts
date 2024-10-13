import { AxiosInstance } from "../../../../axios/axios.instance";
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

export const resend2fa = async () => {
  try {
    const response = await AxiosInstance.get<IResponse>("/user/resend-2fa-otp");
    return response.data;
  } catch (e) {
    const error = e as AxiosError<IErrorResponse>;
    toast.error(error.response?.data.message);
    toast.error(error.response?.data.data?.error);
  }
};
