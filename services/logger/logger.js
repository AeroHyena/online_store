/**
 * This service is responsible for handling logging and tracking of events.
 * @module logger
 * @exports startLogger
*/


const express = require('express')
const app = express()


/** 
 * Deploys the logger service.
 * @function
 * @memberof module:logger
 * @param port - This is the port the gateway service listens to.
*/
const startLogger= (port) => {
    app.listen(port);
    console.log("The logger service is now deployed - listening on port " + port)
}


// export this module's api functions to be accessed by launch.js
module.exports = { startLogger };
