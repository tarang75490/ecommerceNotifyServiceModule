const fs = require("fs")
const hbs = require('hbs');
const nodemailer = require('nodemailer')
const config = require('../../config/index')
const smptMailer = require('../../helper/smptMailer')
const Handlebars = require('handlebars')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
class EmailProvider {
    constructor(fastify, emailRequest) {
        this.fastify = fastify
        this.emailRequest = emailRequest
        this.templateName = emailRequest.templateName
        const template_content = fs.readFileSync(`${__dirname}/../../templates/email/`+ this.emailRequest.templateName + `.hbs`, 'utf8')
      
        this.htmlContent = template_content
    }

    sendEmail(){

        const receiver = this.emailRequest
        // console.log(receiver)
        var template = Handlebars.compile(this.htmlContent)
        var data = null;
        switch(this.templateName){
            case "otp":
                data = {
                    "name":receiver.userName,
                    "otp":receiver.otp
                }
                break;
            case "welcome":
                data = {
                    "name":receiver.userName,
                    "otp":receiver.otp
                }
                break;
            case "bill":
                data = {
                    "name":receiver.userName,
                    "data":receiver.data,
                    "totalAmount":receiver.totalAmount
                }
                break;
        }

        
        var result = template(data)
        const options = 
            {
                pool:true,
                service:"gmail",
                port: 587,
                secure: true, 
                auth: {
                user: config.emailProvider.senderEmail,
                pass: config.emailProvider.senderPassword
                },
            }
        // let transporter = nodemailer.createTransport(options);
        let message = {
            from: "COLOSSAL <"+config.emailProvider.sendEmail+">",
            to: receiver.userName+" <"+receiver.email+">",
            subject: this.emailRequest.subject,
            html: result,            
            attachments:[{
                filename: 'heart_icon.jpg',
                path: __dirname +'/heart_icon.jpg',
                cid: 'unique@nodemailer.com' //same cid value as in the html img src
            }],
        };
        return smptMailer(options,message)

        // verify connection configuration
        transporter.verify(function(error, success) {
            if (error) {
            console.log(error);
            } else {
            console.log("Server is ready to take our messages");
            }
        });
    }
}

module.exports = EmailProvider