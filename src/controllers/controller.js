const service = require('../services/services')

const HttpError = require('../models/errors/httpError')


exports.sendOTPByEmail= async (req, res) => {
    try {
         service.sendOTPByEmail(req.fastify, req.body,(response,error)=>{
            if(error){
                return res.status(200).send({
                    status: 'success',
                    data: error
                })
                 
            }else{
                console.log(response,123)
                return res.status(200).send({
                    status: 'success',
                    data: "Email Send Successfully"
                })
            }
        })
        
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Unable to send OTP", e.message)
    }
}

exports.sendOTPBySMS= async (req, res) => {
    try {
        let response = await service.sendOTPBySMS(req.fastify, req.body)
        // if(response.error){
        //     res.code(400)
        //         throw new HttpError('faliure', 22005,response.error)
        // }
        return res.status(200).send({
            status: 'success',
            data: "SMS Send Successfully"
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Unable to send OTP", e.message)
    }
}


exports.verifyOTP = async (req,res) => {
    try {
        service.verifyOTP(req.fastify, req.body,(response,error)=>{
           if(error){
               return res.status(200).send({
                   status: 'success',
                   data: error
               })
                
           }else{
               console.log(response,123)
               return res.status(200).send({
                   status: 'success',
                   data: response,
                   message:"Verified Successfully"
               })
           }
       })
       
   } catch (e) {
       res.code(500)
       throw new HttpError('faliure', 2001, "Unable to Verify Otp", e.message)
   }
}



