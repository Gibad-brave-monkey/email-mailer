require("dotenv").config();
const mailer = require("nodemailer");

import { IMailOptions } from "./interfaces";

// TODO: Надо допитизировать, пока нет времени на это(прочитать доку по этой библиотеке)
const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_APP,
  },
});

const mailOptions: IMailOptions = {
  from: "ilyas.gibadullin.199819987@gmail.com",
  to: "ilyas.gibadullin.199819987@gmail.com",
  subject: "ILYAS GIBADULLIN",
  text: "test message",
};

transporter.sendMail(mailOptions, (err: Error) => {
  console.log(err.message);
});
