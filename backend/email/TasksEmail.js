import sendEmail from '../services/emailService.js' ;

export async function sendTaskUpdateEmail(user , tasks){
    return sendEmail({
        to : user.email ,
        subject : "Your Tasks for Today" ,
        text : tasks ,
    });
}