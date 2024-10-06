import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import {IVerifyEmail } from "../../types";

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
    helpers.setStatus(false);
    console.log(e);
  } finally {
    helpers.setSubmitting(false);
  }
};
