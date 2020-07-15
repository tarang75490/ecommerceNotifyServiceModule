const config = require('./../config/index')
const EmailProvider = require('./Provider/emailProvider')
const SMSProvider = require('./Provider/smsProvider')
const Nexmo = require('nexmo');
const get = require('./HttpRequest/getContent/getContent')
const post = require('./HttpRequest/postContent/postContent')

  const generateOTP=() =>{ 
          
        // Declare a digits variable  
        // which stores all digits 
        var digits = '0123456789'; 
        let OTP = ''; 
        for (let i = 0; i < 4; i++ ) { 
            OTP += digits[Math.floor(Math.random() * 10)]; 
        } 
        return OTP; 
    } 
const sendOTPByEmail  =  (fastify, emailRequest,callback) => {
    
        console.log(emailRequest)
        let customerId = emailRequest.customerId
        fastify.axios.get("http://localhost:3000/getProfile?customerId="+customerId).then(async (content) => {
                        console.log(content.data)
                        let customerInfo=content.data
                        var otp = generateOTP()
            
                        var emailContent={
                            email:customerInfo.data.email,
                            userName:customerInfo.data.userName,
                            templateName:"otp",
                            subject:"Email Vertification",
                            otp:(otp).toString()
                        }
                        fastify.axios.post("http://localhost:3000/updateProfile?customerId="+customerId,{otp:otp}).then(async (content) => {
                                    
                                    const emailProvider = new EmailProvider(fastify, emailContent);
                                    const response = await  emailProvider.sendEmail()
                                    callback(response)

                                }).catch(error => {
                                     callback(null,error.response.data.message) 
                            })
                       
                 }).catch(error => {
                    callback(null,error.response.data.errorCause)
                 })
}


const sendOTPBySMS = function (fastify, smsRequest) {

    const Nexmo = require('nexmo');

    const nexmo = new Nexmo({
      apiKey: 'd03f285c',
      apiSecret: 'FiqxVGwBJPux9KBn',
    });
    
    const from = 'Vonage APIs';
    const to = '917549053161';
    const text = 'Hello from Vonage SMS API';
    
    nexmo.message.sendSms(from, to, text);
    
}

const verifyOTP = function (fastify,verifyRequest,callback) {
    console.log(verifyRequest)
    let customerId = verifyRequest.customerId
    fastify.axios.get("http://localhost:3000/getProfile?customerId="+customerId).then(async (content) => {
                    console.log(content.data)
                    let customerInfo=content.data.data
                
                    if(customerInfo.otp !== verifyRequest.otp){
                        callback(null,"Incorrect OTP")
                    }else{
                    fastify.axios.post("http://localhost:3000/updateProfile?customerId="+customerId,{otpVerified:true}).then(async (content) => {
                                
                                callback("Verified Successfuly")

                            }).catch(error => {
                                 callback(null,error.response.data.message) 
                        })
                    }
                   
             }).catch(error => {
                callback(null,error.response.data.errorCause)
             })
}


const sendEmail  =  (fastify, emailRequest,callback) => {
    
    console.log(emailRequest)
    let customerId = emailRequest.customerId
    fastify.axios.get("http://localhost:3000/getProfile?customerId="+customerId).then(async (content) => {
                    console.log(content.data)
                    let customerInfo=content.data
                    var otp = generateOTP()
        
                    var emailContent={
                        email:customerInfo.data.email,
                        userName:customerInfo.data.userName,
                        templateName:"otp",
                        subject:"Email Vertification",
                        otp:(otp).toString()
                    }
                    fastify.axios.post("http://localhost:3000/updateProfile?customerId="+customerId,{otp:otp}).then(async (content) => {
                                
                                const emailProvider = new EmailProvider(fastify, emailContent);
                                const response = await  emailProvider.sendEmail()
                                callback(response)

                            }).catch(error => {
                                 callback(null,error.response.data.message) 
                        })
                   
             }).catch(error => {
                callback(null,error.response.data.errorCause)
             })
}














module.exports = {
    sendOTPByEmail,
    sendOTPBySMS,
    verifyOTP
}