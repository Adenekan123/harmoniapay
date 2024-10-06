import { FormikHelpers } from "formik";
import { IRegisterPhone } from "../../types";
import { AxiosInstance } from "../../../../axios/axios.instance";

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

export const registerphone = async (
  values: { phone_number: string; device_id: string },
  helpers: FormikHelpers<IRegisterPhone>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/register",
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
