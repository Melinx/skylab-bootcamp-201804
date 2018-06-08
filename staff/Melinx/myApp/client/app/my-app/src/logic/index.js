'use strict'

const eatersApi = require('api')

eatersApi.url = 'http://localhost:4000/api'

const logic = {
    userId: 'NO-ID',

    registerEater(name, surname, email, password) {
        return eatersApi.registerEater(name, surname, email, password)
    },

    login(email, password) {
        return eatersApi.authenticateEater(email, password)
            .then(id => {
                this.eaterId = id
                return true
            })
    },

    
}

module.exports = logic