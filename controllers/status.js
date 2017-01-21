'use strict'

const Package = require('../package.json')

module.exports = {
    //Adding the functions
    status:(request, reply) => {
        reply({
            project: Package.name,
            version: Package.version,
            author: Package.author,
            license: Package.license
        })
    }
}