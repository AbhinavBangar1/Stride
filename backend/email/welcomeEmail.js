import sendEmail from '../services/emailService.js';

export async function sendWelcomeEmail(user){
    return sendEmail({
        to : user.email ,
        subject : "Welcome to Stride" ,
        text : "Hey!! Welcome to Stride",
    }) ;
}

