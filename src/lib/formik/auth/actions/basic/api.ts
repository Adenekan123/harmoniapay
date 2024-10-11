import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";

interface IResponse {
  data: {
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
    if (response.data.data.code === 200) {
      helpers.setStatus(true);
    }
    return response.data;
  } catch (e) {
    helpers.setStatus(false);
    console.log(e);
  } finally {
    helpers.setSubmitting(false);
  }
};
