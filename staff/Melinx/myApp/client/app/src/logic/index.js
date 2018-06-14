const eatersApi = require('api')

eatersApi.url = 'http://localhost:4000/api'

const logic = {
    userId: 'NO-ID',

    eaterId(eaterId) {
        if (eaterId) {
            this._eaterId = this.eaterId
            return
        }
        return this._eaterId
    },
    
    isLogged(){
        return eatersApi.token() ? true : false
    },

    registerEater(name, surname, email, password) {
        return eatersApi.registerEater(name, surname, email, password)
            .then(() => {
                return true
            })
    },

    login(email, password) {
        return eatersApi.authenticateEater(email, password)
            .then(id => {
                this.eaterId(id)
                // eaterId = data.id
                return id
            })
    },

    logout(){
        sessionStorage.clear();
        this.userId = 'NO-ID'
        
        return true
        // eatersApi.token()
    }
 
}

module.exports = logic