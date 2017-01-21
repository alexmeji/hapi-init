'use strict'

const Status = require('../controllers/status')

exports.register = (server, options, next) => {
    server.route({
        path: '/',
        method: 'GET',
        handler: Status.status
    })

    next()
}

exports.register.attributes = {
    name: 'status'
}

