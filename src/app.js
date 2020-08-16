const config = require('./config/index')

// Require the framework and instantiate it
const fastify = require('fastify')(
  {
    logger: { level: config.server.logLevel }
  })

// Connect to DB
const mongoose = require('mongoose')
const mongodbConfig = config.mongodb
var options = {
  autoIndex: false, // Don't build indexes
  // db:{
  //   safe:true
  // },
  
  poolSize: mongodbConfig.poolSize, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
 
}
mongoose.connect(mongodbConfig.baseURL + mongodbConfig.dbName, options)
  .then(() => {
    fastify.log.info('MongoDB connected...')

    var debug = mongodbConfig.debug == "true" ? true : false
    mongoose.set('debug', debug)
  })
  .catch(err => {
    fastify.log.error(err)
    process.exit(1)
  })

mongoose.plugin((schema) => {
  schema.options.toJSON = {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      delete ret._id;
      delete ret.id;
    }
  };
});
//cross-origin  
fastify.register(require('fastify-cors'), {
  origin: '*',
});



// Register fastify axios
fastify.register(require('fastify-axios'))

// Import Swagger Options
const swagger = require('./config/swagger')


// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Import Routes
const routes = require('./routes/routes.js')
routes.forEach((route, index) => {
  fastify.route(route)
})

// Import and Register Routes
fastify.decorateRequest('fastify', fastify);

const HttpError = require("./models/errors/httpError")
fastify.setErrorHandler(function (error, request, reply) {
  if (error instanceof HttpError) {
    fastify.log.debug(error)

    if (error.errorCause) {
      return reply.send({
        status: error.status, message: error.message,
        code: error.code, errorCause: error.errorCause
      })  
    } else {
      reply.send({
        status: error.status,
        message: error.message, code: error.code
      })
    }
  } else if (error) {
    fastify.log.debug(error)
    
    reply.send({ status: 'faliure', message: error.message, errorCause: "", code: 15000 })
  } else {
    reply.send();
  }
})

// Run the server!
appconfig = config.server
const host = '0.0.0.0';
const PORT = process.env.PORT ||5000
fastify.listen(PORT,host, function (err, address) {
  if (err) {  
    fastify.log.error(err)
    process.exit(1)
  } else {
    // fastify.swagger()
    fastify.log.info(`server listening on ${PORT}`)
  }
});
