const config = require('./../config/index')
const EmailProvider = require('./Provider/emailProvider')
const SMSProvider = require('./Provider/smsProvider')

const sendOTPByEmail = function (fastify, emailRequest) {
        console.log(emailRequest)
        emailRequest={
            email:"Tarangkhetan111@gmail.com",
            userName:"Tarang",
            templateName:"otp"
        }
        const emailProvider = new EmailProvider(fastify, emailRequest);
        return emailProvider.sendEmail();
}


const sendOTPBySMS = function (fastify, emailRequest) {
    // const smsProvider = new SMSProvider(fastify, emailRequest);
    // return smsProvider.sendEmail();
}


module.exports = {
    sendOTPByEmail,
    sendOTPBySMS
}