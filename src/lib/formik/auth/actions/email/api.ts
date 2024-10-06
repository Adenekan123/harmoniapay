import { FormikHelpers } from "formik";
import { IRegisterEmail } from "../../types";
import { AxiosInstance } from "../../../../axios/axios.instance";

interface IResponse {
  data: {
    error: string;
    code: number;
  };
}
// interface IErrorResponse {
//   errors: { identifier: string[] };
//   message: string;
// }

export const registeremail = async (
  values: { email: string; identifier: string },
  helpers: FormikHelpers<IRegisterEmail>
) => {
  helpers.setSubmitting(true);
  try {
    const response = await AxiosInstance.post<IResponse>(
      "/user/add-email",
      values
    );
    if (response.data.data.code === 200) {
      helpers.setStatus(true);
      localStorage.setItem("authemail", values.email);
    }
    return response.data;
  } catch (e) {
    helpers.setStatus(false);
    console.log(e);
  } finally {
    helpers.setSubmitting(false);
  }
};
