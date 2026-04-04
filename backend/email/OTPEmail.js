import sendEmail from '../services/emailService.js' ;

export async function sendOTPEmail(user , purpose , otp , expiresIn){
    return sendEmail({
        to : user.email ,
        subject : `Hey here is your ${purpose} OTP` ,
        text : `Your OTP Code : ${otp} expires in ${expiresIn}` ,
    });
}