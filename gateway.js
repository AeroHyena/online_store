/**
 * This is the api gateway used in this web app. 
 * It is responsible for reading requests and rendering the requested web page.
 * It handles requesting data from the appropriate services, and uses said data to render each page.
 * A template engine - Handlebars - shall be used in the future.
 * @module gateway
 * @exports startGateway
*/


const express = require('express')
const app = express()


/** 
 * Respond to a GET request on the main page by rendering the homepage.
 * Right now "Hello World" is rendered in place of the actual homepage.
 * @param req - request object
 * @param res - response object
*/ 
app.get('/', (req, res) => {
    console.log("rendering homepage");

    res.send("Hello World");
});



/** 
 * Deploys the gateway service, and updates the log.
 * Logger shall be implemented in the future.
 * @function
 * @memberof module:gateway
 * @param port - This is the port the gateway service listens to.
*/
const startGateway = (port) => {
    app.listen(port);
    console.log("The gateway service is now deployed - listening on port " + port)
}


// export this module's api functions to be accessed by launch.js
module.exports = { startGateway };