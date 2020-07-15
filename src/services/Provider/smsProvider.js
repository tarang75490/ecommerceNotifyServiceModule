const fs = require("fs")
const hbs = require('hbs');
const nodemailer = require('nodemailer')
const config = require('../../config/index')
const smptMailer = require('../../helper/smptMailer')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
class SMSProvider {
    constructor(fastify, emailRequest) {
        this.fastify = fastify
        this.emailRequest = emailRequest
        
        const template_content = fs.readFileSync(`${__dirname}/../../templates/email/`+ this.emailRequest.templateName + `.hbs`, 'utf8')
        this.htmlContent = template_content
    }
    sendSMS(){

        
        
    }
}

module.exports = SMSProvider