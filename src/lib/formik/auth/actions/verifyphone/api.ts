import { FormikHelpers } from "formik";
import { AxiosInstance } from "../../../../axios/axios.instance";
import {IVerifyPhone } from "../../types";

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
    helpers.setStatus(false);
    console.log(e);
  } finally {
    helpers.setSubmitting(false);
  }
};
