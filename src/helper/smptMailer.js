const nodemailer = require('nodemailer')

module.exports = function (smtpConfig, mailData) {
    // console.log('nodemailer',smtpConfig,mailData)
    let transporter = nodemailer.createTransport(smtpConfig)
 
    return transporter.sendMail(mailData)
}