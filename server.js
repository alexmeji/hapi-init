'use strict'

const Hapi = require('hapi');

//Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3000'
})

server.register([
    //Add the routes
    require('./routes/status')
], (err) => {
    if(err) {
        throw err;
    }
})

//Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at ' + server.info.uri);
})