exports.sendOTPByEmail = {
    description: 'send OTP by Email',
    tags: ['Notify Service'],
    summary: 'SEND OTP BY Email',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId",
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}


exports.sendOTPBySMS = {
    description: 'send OTP by SMS',
    tags: ['Notify Service'],
    summary: 'SEND OTP BY SMS',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "email":{
                "type":"string"
            }
    
        },
        "required": [
            "customerId",
            "email"
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

// exports.verifyOTP = {
//     description: 'Verify OTP',
//     tags: ['Notify Service'],
//     summary: 'Verify',
//     body:{
//         "type": "object",
//         "properties": {
//             "customerId": {
//                 "type": "string"
//             },
//             "otp":{
//                 "type":"string"
//             }
    
//         },
//         "required": [
//             "customerId",
//             "otp"
//         ]
//     },
//     response: {
//         200: {
//             description: 'Successful response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string",
//                     "enum": ['failiure', 'success'],
//                 },
//                 "message": {
//                     "type": "string"
//                 },
//                 "data": {
//                     "type": "object"
//                 }
//             },
//             "required": [
//                 "status",
//                 "data"
//             ]
//         },
//         400: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code"
//             ]
//         },
//         500: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code",
//                 "errorCause"
//             ]
//         }
//     }
// }
