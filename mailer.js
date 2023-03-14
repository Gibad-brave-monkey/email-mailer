require("dotenv").config();
const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_APP,
  },
});

const mailOptions = {
  from: "ilyas.gibadullin.199819987@gmail.com",
  to: "ilyas.gibadullin.199819987@gmail.com",
  subject: "ILYAS GIBADULLIN",
  text: "test message",
};

transporter.sendMail(mailOptions, (err) => {
  console.log(err);
});
