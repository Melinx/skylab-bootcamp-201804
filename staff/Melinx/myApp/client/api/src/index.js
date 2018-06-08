'use strict'

const axios = require('axios')

const eatersApi = {
    url: 'http://localhost:4000/api',

    token: 'NO-TOKEN',
    
    /**
     * @param {string} name
     * @param {string} lastName
     * @param {string} gmail
     * @param {string} password
     *
     * @returns {Promise<boolean>}
     */

    registerEater(name, lastName, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof lastName !== 'string') throw Error('eater lastName is not a string')

                if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')


                return axios.post(`${this.url}/eaters`, { name, lastName, email, password })
                    .then(({ status, data }) => {
                        if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },


    /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */

    authenticateEater(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return Eater.findOne({ email, password })


                return axios.post(`${this.url}/auth`, { email, password })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        const { data: { id, token } } = data

                        this.token = token

                        return id
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<Eater>} 
     */

    retrieveEater(eaterId) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                //     return Eater.findById(id).select({ _id: 0, name: 1, lastName: 1, email: 1 })
                // 
                return axios.get(`${this.url}/eaters/${id}`, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return data.data
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
    },

    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */

    updateEater(id, name, lastName, email, password, newEmail, newPassword) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                if (typeof name !== 'string') throw Error('eater name is not a string')

                if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

                if (typeof lastName !== 'string') throw Error('eater lastName is not a string')

                if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return axios.patch(`${this.url}/eaters/${id}`, { name, lastName, email, password, newEmail, newPassword }, { headers: { authorization: `Bearer ${this.token}` } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
            })
            
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    unregisterEater(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

                if (typeof email !== 'string') throw Error('eater email is not a string')

                if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

                if (typeof password !== 'string') throw Error('eater password is not a string')

                if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

                return axios.delete(`${this.url}/eaters/${id}`, { headers: { authorization: `Bearer ${this.token}` }, data: { email, password } })
                    .then(({ status, data }) => {
                        if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                        return true
                    })
                    .catch(err => {
                        if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                        if (err.response) {
                            const { response: { data: { error: message } } } = err

                            throw Error(message)
                        } else throw err
                    })
                })
    },

    /**
     * DOCUM:
     * 
     * Should list courses each day of the week; Monday through Friday. 
     * 
     * @returns {Promise<string>}
     */

    listCoursesByDay() {
        return Promise.resolve()
            .then(() => {
                const today = new Date()
                let currentDay = today.getDay()

                return axios.get(`${this.url}/courses/`)
                .then(({ status, data }) => {
                    if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

                    return data.data
                })
                .catch(err => {
                    if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

                    if (err.response) {
                        const { response: { data: { error: message } } } = err

                        throw Error(message)
                    } else throw err
                })
                
                // Course.find({ dayAvail: currentDay })
                //     .then((courses) => {
                //         if (!courses) throw Error(`no courses were found on ${currentDay}`)
                //         return courses
                //     })

            })
    }
}
module.exports = eatersApi
