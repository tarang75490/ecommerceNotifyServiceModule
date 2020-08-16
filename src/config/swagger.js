const keys = require('./index')


exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Notify  Service APIs',
      description: 'Notify Related APIs',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    // host: 'localhost:'+keys.server.port, 
    host:"colossalnotify-service.herokuapp.com",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}