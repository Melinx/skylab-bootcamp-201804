'use strict';

var axios = require('axios');

var eatersApi = {
    url: 'NO-URL',

    token: 'NO-TOKEN',

    /**
     * @param {string} name
     * @param {string} lastName
     * @param {string} gmail
     * @param {string} password
     *
     * @returns {Promise<boolean>}
     */

    registerEater: function registerEater(name, lastName, email, password) {
        var _this = this;

        return Promise.resolve().then(function () {
            if (typeof name !== 'string') throw Error('eater name is not a string');

            if (!(name = name.trim()).length) throw Error('eater name is empty or blank');

            if (typeof lastName !== 'string') throw Error('eater lastName is not a string');

            if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank');

            if (typeof email !== 'string') throw Error('eater email is not a string');

            if (!(email = email.trim()).length) throw Error('eater email is empty or blank');

            if (typeof password !== 'string') throw Error('eater password is not a string');

            if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank');

            return axios.post(_this.url + '/eaters', { name: name, lastName: lastName, email: email, password: password }).then(function (_ref) {
                var status = _ref.status,
                    data = _ref.data;

                if (status !== 201 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    },


    /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */

    authenticateEater: function authenticateEater(email, password) {
        var _this2 = this;

        return Promise.resolve().then(function () {
            if (typeof email !== 'string') throw Error('eater email is not a string');

            if (!(email = email.trim()).length) throw Error('eater email is empty or blank');

            if (typeof password !== 'string') throw Error('eater password is not a string');

            if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank');

            return axios.post(_this2.url + '/auth', { email: email, password: password }).then(function (_ref2) {
                var status = _ref2.status,
                    data = _ref2.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                var _data$data = data.data,
                    id = _data$data.id,
                    token = _data$data.token;


                _this2.token = token;

                return id;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    },


    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<Eater>} 
     */

    retrieveEater: function retrieveEater(eaterId) {
        var _this3 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('eater id is not a string');

            if (!(id = id.trim()).length) throw Error('eater id is empty or blank');

            //     return Eater.findById(id).select({ _id: 0, name: 1, lastName: 1, email: 1 })
            // 
            return axios.get(_this3.url + '/eaters/' + id, { headers: { authorization: 'Bearer ' + _this3.token } }).then(function (_ref3) {
                var status = _ref3.status,
                    data = _ref3.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return data.data;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
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

    updateEater: function updateEater(id, name, lastName, email, password, newEmail, newPassword) {
        var _this4 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('eater id is not a string');

            if (!(id = id.trim()).length) throw Error('eater id is empty or blank');

            if (typeof name !== 'string') throw Error('eater name is not a string');

            if (!(name = name.trim()).length) throw Error('eater name is empty or blank');

            if (typeof lastName !== 'string') throw Error('eater lastName is not a string');

            if ((lastName = lastName.trim()).length === 0) throw Error('eater lastName is empty or blank');

            if (typeof email !== 'string') throw Error('eater email is not a string');

            if (!(email = email.trim()).length) throw Error('eater email is empty or blank');

            if (typeof password !== 'string') throw Error('eater password is not a string');

            if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank');

            return axios.patch(_this4.url + '/eaters/' + id, { name: name, lastName: lastName, email: email, password: password, newEmail: newEmail, newPassword: newPassword }, { headers: { authorization: 'Bearer ' + _this4.token } }).then(function (_ref4) {
                var status = _ref4.status,
                    data = _ref4.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    },


    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    unregisterEater: function unregisterEater(id, email, password) {
        var _this5 = this;

        return Promise.resolve().then(function () {
            if (typeof id !== 'string') throw Error('eater id is not a string');

            if (!(id = id.trim()).length) throw Error('eater id is empty or blank');

            if (typeof email !== 'string') throw Error('eater email is not a string');

            if (!(email = email.trim()).length) throw Error('eater email is empty or blank');

            if (typeof password !== 'string') throw Error('eater password is not a string');

            if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank');

            return axios.delete(_this5.url + '/eaters/' + id, { headers: { authorization: 'Bearer ' + _this5.token }, data: { email: email, password: password } }).then(function (_ref5) {
                var status = _ref5.status,
                    data = _ref5.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return true;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });
        });
    },


    /**
     * DOCUM:
     * 
     * Should list courses each day of the week; Monday through Friday. 
     * 
     * @returns {Promise<string>}
     */

    listCoursesByDay: function listCoursesByDay() {
        var _this6 = this;

        return Promise.resolve().then(function () {
            var today = new Date();
            var currentDay = today.getDay();

            return axios.get(_this6.url + '/courses/').then(function (_ref6) {
                var status = _ref6.status,
                    data = _ref6.data;

                if (status !== 200 || data.status !== 'OK') throw Error('unexpected response status ' + status + ' (' + data.status + ')');

                return data.data;
            }).catch(function (err) {
                if (err.code === 'ECONNREFUSED') throw Error('could not reach server');

                if (err.response) {
                    var message = err.response.data.error;


                    throw Error(message);
                } else throw err;
            });

            // Course.find({ dayAvail: currentDay })
            //     .then((courses) => {
            //         if (!courses) throw Error(`no courses were found on ${currentDay}`)
            //         return courses
            //     })
        });
    }
};
module.exports = eatersApi;