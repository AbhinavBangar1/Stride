import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from 'dotenv';
dotenv.config()

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

async function sendEmail({to , subject , text , html}) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const emailSender = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "stride.task@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token, 
      },
    });

    const info = await emailSender.sendMail({
      from: "stride.task@gmail.com",
      to ,
      subject ,
      text ,
      html ,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default sendEmail ;

