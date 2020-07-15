var response;
const updateCustomer = (emailRequest,fastify) => {
    let customerId = emailRequest.customerId
    let otp = emailRequest.otp
        fastify.axios.post("http://localhost:3000/updateProfile?customerId="+customerId,{otp:otp}).then(content => {
                    // console.log(content)
                    response=content.data
            }).catch(error => {
                console.log(error)
                    response = {
                        error:"Unable to update"
                    }
            })
        return response
}

module.exports ={
    updateCustomer
}   