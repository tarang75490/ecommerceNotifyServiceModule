const HttpError = require('../models/errors/httpError')



exports.validateSendOTPByEmailRequest = function (req, res, done) {
 if (!req.body.customerId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Customer Id is missing'))
    }else{
        done()
    }
}

exports.validateSendOTPBySmsRequest = function (req, res, done) {
    if (!req.body.email) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Email is missing'))
    }else if (!req.body.customerId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Customer Id is missing'))
    }else{
        done()
    }
}



// exports.validateVerifyOTP = function (req, res, done) {
//     if (!req.body.otp) {
//         res.code(400)
//         done(new HttpError('faliure', 20001, 'OTP is missing'))
//     }else if (!req.body.customerId){
//         res.code(400)
//         done(new HttpError('faliure', 20001, 'Customer Id is missing'))
//     }else{
//         done()
//     }
// }
