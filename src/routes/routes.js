const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/sentOTPbyEmail",
        handler: controllers.sendOTPByEmail,
        schema: documentation.sendOTPByEmail,
        preValidation: validators.validateSendOTPByEmailRequest
    },
    {
        method: "POST",
        url: "/sentMessagebyEmail",
        handler: controllers.sendMessageByEmail,
        schema: documentation.sendMessageByEmail,
        preValidation: validators.validateSendMessageByEmailRequest
    },
    // {
    //     method: "POST",
    //     url: "/sentOTPbySMS",
    //     handler: controllers.sendOTPBySMS,
    //     schema: documentation.sendOTPBySMS,
    //     preValidation: validators.validateSendOTPBySmsRequest
    // },
    // {
    //     method:"POST",
    //     url:"/verifyOTP",
    //     handler: controllers.verifyOTP,
    //     schema: documentation.verifyOTP,
    //     preValidation: validators.validateVerifyOTP
    // }
]



module.exports = routes