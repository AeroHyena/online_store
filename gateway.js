// this is the api gateway used in this app.
// it is responsible for reading requests and routing them to the appropriate services


const express = require('express')
const app = express()


// Respond to a GET request on the main page
app.get('/', (req, res) => {
    console.log("rendering homepage");

    res.send("Hello World");
});



// create the startGateway function that deploys the gateway service
const startGateway = (port) => {
    app.listen(port);
    console.log("The gateway service is now deployed - listening on port " + port)
}


// export this module's api functions to be accessed by launch.js
module.exports = { startGateway };