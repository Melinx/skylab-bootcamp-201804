'use strict'

const { models: { Eater, Course, Order, Payment } } = require('data')

const logic = {
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

        return Eater.findOne({email})
          .then((email) => {
            if (email) throw Error(`Eater with email ${email} already exists`)

            return Eater.create({ name, lastName, email, password})
              .then(() => true)
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
    authenticateUser(email, password) {
      return Promise.resolve()
          .then(() => {
              if (typeof email !== 'string') throw Error('eater email is not a string')

              if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

              if (typeof password !== 'string') throw Error('eater password is not a string')

              if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

              return Eater.findOne({ email, password })
          })
          .then(eater => {
              if (!eater) throw Error('wrong credentials')

              return eater.id
          })
  },

  /**
   * 
   * @param {string} id
   * 
   * @returns {Promise<Eater>} 
   */
  retrieveEater(id) {
      return Promise.resolve()
          .then(() => {
              if (typeof id !== 'string') throw Error('eater id is not a string')

              if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

              return Eater.findById(id).select({ _id: 0, name: 1, lastName: 1, email: 1 })
          })
          .then(eater => {
              if (!eater) throw Error(`no eater found with id ${id}`)

              return eater
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

              return Eater.findOne({ email, password })
          })
          .then(eater => {
              if (!eater) throw Error('wrong credentials')

              if (eater.id !== id) throw Error(`no eater found with id ${id} for given credentials`)

              if (newEmail) {
                  return Eater.findOne({ email: newEmail })
                      .then(_user => {
                          if (_user && _user.id !== id) throw Error(`eater with email ${newEmail} already exists`)

                          return eater
                      })
              }

              return eater
          })
          .then(eater => {
              eater.name = name
              eater.lastName = lastName
              eater.email = newEmail ? newEmail : email
              eater.password = newPassword ? newPassword : password

              return eater.save()
          })
          .then(() => true)
  },

  /**
   * 
   * @param {string} id 
   * @param {string} email 
   * @param {string} password 
   * 
   * @returns {Promise<boolean>}
   */

  unregisterEater(eaterId, email, password) {
      return Promise.resolve()
          .then(() => {
              if (typeof id !== 'string') throw Error('eaterId is not a string')

              if (!(id = id.trim()).length) throw Error('eaterId is empty or blank')

              if (typeof email !== 'string') throw Error('eater email is not a string')

              if (!(email = email.trim()).length) throw Error('eater email is empty or blank')

              if (typeof password !== 'string') throw Error('eater password is not a string')

              if ((password = password.trim()).length === 0) throw Error('eater password is empty or blank')

              return Eater.findOne({ email, password })
          })
          .then(eater => {
              if (!eater) throw Error('wrong credentials')

              if (eater.id !== id) throw Error(`no eater found with id ${id} for given credentials`)

              return eater.remove()
          })
          .then(() => true)
  },

  /**
   * 
   * @param {string} eaterId
   * @param {string} text 
   * 
   * @returns {Promise<string>}
   */

  addOrder(eaterId, text) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              if (typeof text !== 'string') throw Error('text is not a string')

              if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

              // way 1 (step by step)
              // return Eater.findById(eaterId)
              //     .then(eater => {
              //         if (!eater) throw Error(`no eater found with id ${eaterId}`)

              //         const note = new Note({ text })

              //         eater.notes.push(note)

              //         return eater.save()
              //             .then(() => note.id)
              //     })

              // way 2 (1 step)
              return Eater.findByIdAndUpdate(eaterId, { $push: { notes: { text } } }, { new: true })
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      return eater.notes[eater.notes.length - 1].id
                  })
          })
  },

  /**
   * 
   * @param {string} eaterId
   * @param {string} noteId 
   * 
   * @returns {Promise<Note>}
   */

  retrieveNote(eaterId, noteId) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              if (typeof noteId !== 'string') throw Error('note id is not a string')

              if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

              return Eater.findById(eaterId)
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      const note = eater.notes.id(noteId)

                      if (!note) throw Error(`no note found with id ${noteId}`)

                      const { id, text } = note

                      return { id, text }
                  })
          })
  },

  /**
   * @param {string} eaterId
   * 
   * @returns {Promise<[Note]>}
   */

  listNotes(eaterId) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              return Eater.findById(eaterId)
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      return eater.notes.map(({ id, text }) => ({ id, text }))
                  })
          })
  },

  /**
   * 
   * @param {string} eaterId
   * @param {string} noteId 
   *
   * @returns {Promise<boolean>}
   */
  removeNote(eaterId, noteId) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              if (typeof noteId !== 'string') throw Error('note id is not a string')

              if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

              return Eater.findById(eaterId)
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      const note = eater.notes.id(noteId)

                      if (!note) throw Error(`no note found with id ${noteId}`)

                      note.remove()

                      return eater.save()
                  })
                  .then(() => true)
          })
  },

  /**
   * 
   * @param {string} eaterId
   * @param {string} noteId 
   * @param {string} text 
   * 
   * @returns {Promise<boolean>}
   */
  updateNote(eaterId, noteId, text) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              if (typeof noteId !== 'string') throw Error('note id is not a string')

              if (!(noteId = noteId.trim())) throw Error('note id is empty or blank')

              if (typeof text !== 'string') throw Error('text is not a string')

              if ((text = text.trim()).length === 0) throw Error('text is empty or blank')

              return Eater.findById(eaterId)
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      const note = eater.notes.id(noteId)

                      if (!note) throw Error(`no note found with id ${noteId}`)

                      note.text = text

                      return eater.save()
                  })
                  .then(() => true)
          })
  },

  /**
   * 
   * @param {string} eaterId
   * @param {string} text 
   * 
   * @returns {Promise<[Note]>}
   */
  findNotes(eaterId, text) {
      return Promise.resolve()
          .then(() => {
              if (typeof eaterId !== 'string') throw Error('eater id is not a string')

              if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')

              if (typeof text !== 'string') throw Error('text is not a string')

              if (!text.length) throw Error('text is empty')

              return Eater.findById(eaterId)
                  .then(eater => {
                      if (!eater) throw Error(`no eater found with id ${eaterId}`)

                      return eater.notes.filter(note => note.text.includes(text)).map(({ id, text }) => ({ id, text }))
                  })
          })
  }
}

module.exports = logic

 
//   getAvailableDaysForYearMonth(year, month) {

//   },

//   getAvailableHoursForDate(date) { // yyyy-MM-dd

//   },
  
//   placeBooking(idUser, serviceId, date) { // yyyy-MM-dd HH:mm

//   },

//   deleteBooking(idUser, bookingId) {

//   },
//   updateBooking(bookingId, service, Date) {

//   },