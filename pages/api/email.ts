/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

export default (req: any, res: any) => {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.REACT_APP_EMAIL,
            pass: process.env.REACT_APP_EMAIL_PASS,
        },
        secure: true,
    })
    const mailData = {
        from: req.body.email,
        to: process.env.REACT_APP_EMAIL,
        subject: `Message From ${req.body.fullName}`,
        text: 'aaaaaa',
        html: `<div>${req.body.content}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200).end();
}