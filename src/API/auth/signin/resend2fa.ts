import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../../lib/axios/axios.instance";

interface IResponse {
  data: {
    message: string;
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
    if(response.status === 200){
        toast.success(response.data.message);
        toast.success(response.data.data.message);
    }

    return {...response.data,sent:true};
  } catch (e) {
    const error = e as AxiosError<IErrorResponse>;
    toast.error(error.response?.data.message);
    toast.error(error.response?.data.data?.error);
  }
};
