export interface IRegisterPhone{
    phone_number: string;
    device_id: string;
}
export interface IVerifyPhone{
    otp: string;
    identifier: string;
}
export interface IResendVerifyPhone{
    identifier: string;
}

export interface IRegisterEmail{
    email:string;
    identifier: string;
}
export interface IVerifyEmail{
    email:string;
    otp: string;
    identifier: string;
}
export interface IResendVerifyEmail{
    identifier: string;
    email: string;
}

export interface ISignin{
    phone_number: string;
    password: string;
    device_id: string;
}
export interface IVerify2fa{
    otp: string;
}