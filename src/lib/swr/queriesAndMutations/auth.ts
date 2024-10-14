import useSWRMutation from "swr/mutation"
import { resend2fa } from "../../../API/auth/signin/resend2fa"

export const useResend2FaOTP = () =>{
    return useSWRMutation('/user/resend-2fa-otp',resend2fa)
}