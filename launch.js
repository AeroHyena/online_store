/** 
 * This script is responsible for initializing all the services and their individual servers.
 * It imports the api of each service module, and executes the start function of each service.
 * The order of priority in which the services are deployed is logger => gateway => everything else.
 * @module
*/


// import all service apis
const gateway = require("./gateway.js");


// deploy each api in the order of priority
gateway.startGateway(8000);