import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import {IResendVerifyPhone } from "../../types";

interface IResponse {
  data: {
    identifier: string;
  };
  message: string;
}
// interface IErrorResponse {
//   errors: { identifier: string[] };
//   message: string;
// }


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
    helpers.setStatus(false);
    console.log(e);
  } finally {
    helpers.setSubmitting(false);
  }
};
