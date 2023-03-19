// responsible for initializing all the microservices and thier individual servers.

// import all service apis
const gateway = require("./gateway.js");



// deploy the services
gateway.startGateway(8000);