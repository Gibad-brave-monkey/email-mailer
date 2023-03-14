"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var mailer = require("nodemailer");
var transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_APP,
    },
});
var mailOptions = {
    from: "ilyas.gibadullin.199819987@gmail.com",
    to: "ilyas.gibadullin.199819987@gmail.com",
    subject: "ILYAS GIBADULLIN",
    text: "test message",
};
transporter.sendMail(mailOptions, function (err) {
    console.log(err.message);
});
