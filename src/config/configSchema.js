const configSchema = {
    "type": "object",
    "properties": {
        "server": {
            "type": "object",
            "properties": {
                "port": {
                    "type": "string"
                },
                "logLevel": {
                    "type": "string"
                }
            },
            "required": [
                "port",
                "logLevel"
            ]
        },
        "emailProvider":{
            "type":"object",
            "properties":{
                "senderEmail":{
                    "type":"string"
                },
                "senderPassword":{
                    "type":"string"
                }
            },
            "required": [
                "senderEmail",
                "senderPassword"
            ]
        },
        "maxPaginationSize": {
            "type": "string"
        },
        "environment": {
            "type": "string"
        },
        "mongodb": {
            "type": "object",
            "properties": {
                "baseURL": {
                    "type": "string"
                },
                "dbName": {
                    "type": "string"
                },
                "debug": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "poolSize": {
                    "type": "integer"
                }
            },
            "required": [
                "baseURL",
                "dbName",
                "debug",
                "username",
                "password",
                "poolSize"
            ]
        }
    },
    "required": [
        "server",
        "maxPaginationSize",
        "environment",
        "mongodb",
        "emailProvider"
    ]
}

module.exports = configSchema;
