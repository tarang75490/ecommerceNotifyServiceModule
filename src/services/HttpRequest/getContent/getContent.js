var response;
const getCustomer = (emailRequest,fastify) => {
    let customerId = emailRequest.customerId
  
        fastify.axios.get("http://localhost:3000/getProfile?customerId="+customerId).then(content => {
                    response=content.data
            }).catch(error => {
                    // console.log(error.response.data)
                    return {
                        error : error.response.data.errorCause
                    }
            })
        return response
}

module.exports ={
    getCustomer
}   