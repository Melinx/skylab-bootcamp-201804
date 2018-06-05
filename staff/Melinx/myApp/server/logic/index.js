
'use strict'

const { models: {Eater, Booking, Service}} = require('data')

const logic = {
  /**
   * @param {string} name
   * @param {string} surname
   * @param {string} gmail
   * @param {string} password
   *
   * @returns {Promise<boolean>}
   */
  registerUser(name, surname, email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof name !== 'string') throw Error('eater name is not a string')

        if (!(name = name.trim()).length) throw Error('eater name is empty or blank')

        if (typeof surname !== 'string') throw Error('eater surname is not a string')

        if ((surname = surname.trim()).length === 0) throw Error('eater surname is empty or blank')

        if (typeof email !== 'string') throw Error('eater email is not a string')

        if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

        if (typeof password !== 'string') throw Error('eater password is not a string')

        if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

        return Eater.findOne({email})
          .then((email) => {
            if (email) throw Error(`Eater with email ${email} already exists`)

            return Eater.create({ name, surname, email, password})
              .then(() => true)
          })
      })

  },
  /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
  updateUser(id, name, surname, email, password, newEmail, newPassword) {

  },
  /**
   * @param {String} id
   * @param {String} email
   * @param {String} password
   *
   */
  unregisterUser(id, email, password) {

  },

  /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
  authenticateUser(email, password) {

  },
  /**
   * @param {Date} startDate
   * @param {Date} endDate
   * 
   * @returns {Promise<availability>}
   */
  getAvailableDaysForYearMonth(year, month) {
    //devuelve una array con los años y meses del año
  },

  getAvailableHoursForDate(date) { // yyyy-MM-dd

  },
  /**
   * @param {String} idUser
   * @param {String} serviceId
   * @param {Date} date
   * 
   * @returns {Promise<boolean>}
   */
  placeBooking(idUser, serviceId, date) { // yyyy-MM-dd HH:mm

  },

  /**
   * @param {String} bookingId
   * @param {String} idUser
   *
   * @returns {Promise<boolean>}
   */
  deleteBooking(idUser, bookingId) {

  },

  /**
   * @param {String} bookingId
   * @param {String} service
   * @param {String} Date
   *
   * @returns {Promise<boolean>}
   */
  updateBooking(bookingId, service, Date) {

  },

}