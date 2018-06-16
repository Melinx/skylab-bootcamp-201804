'use strict'

const { mongoose, models: { Eater, Course, Order, Payment } } = require('data')

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

                return Eater.findOne({ email })
                    .then((res) => {
                        if (res) throw Error(`Eater with email ${email} already exists`)

                        return Eater.create({ name, lastName, email, password })
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
    authenticateEater(email, password) {
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

                return eater._id
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

    unregisterEater(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('eater id is not a string')

                if (!(id = id.trim()).length) throw Error('eater id is empty or blank')

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
     * DOCUM:
     * 
     * Should list FIRST and SECOND courses separately, each day of the week. 
     * 
     * @returns {Promise<string>}
     * 
     * @param {first<boolean>}
     * 
     * @returns{Array} 
     */

    listCoursesByDay(first = false) {
        return Promise.resolve()
            .then(() => {
                const today = new Date()
                let dayAvail = today.getDay()
                let category = first !== 'true' ? 'firstCourse' : 'secondCourse';

                return Course.find({ category, dayAvail })
                    .then((courses) => {
                        if (!courses) throw Error(`no courses were found on ${currentDay}`)
                        return courses
                    })
            })
    },


    createCourse(category, image, dishName, temp, baseFood, dayAvail) {
        return Promise.resolve()
            .then(() => {
                if (typeof category !== 'string') throw Error('course category is not a string')

                if (!(category = category.trim()).length) throw Error('course category is empty or blank')

                if (typeof image !== 'string') throw Error('course image is not a string')

                if (!(image = image.trim()).length) throw Error('course image is empty or blank')

                if (typeof dishName !== 'string') throw Error('course dishName is not a string')

                if (!(dishName = dishName.trim()).length) throw Error('course dishName is empty or blank')

                if (typeof temp !== 'string') throw Error('course temp is not a string')

                if (!(temp = temp.trim()).length) throw Error('course temp is empty or blank')

                if (typeof baseFood !== 'string') throw Error('course baseFood is not a string')

                if (!(baseFood = baseFood.trim()).length) throw Error('course baseFood is empty or blank')

                if (typeof dayAvail !== 'string') throw Error('course dayAvail is not a string')

                if (!(dayAvail = dayAvail.trim()).length) throw Error('course dayAvail is empty or blank')

                return Course.findOne({ dishName })
                    .then((res) => {
                        if (res) throw Error(`Course with dishName ${dishName} already exists`)

                        return Course.create({ category, image, dishName, temp, baseFood, dayAvail })
                            .then(() => true)
                    })
            })


    },

    // FUNC retrieveCourse allows first and second course selection before proceeding w creating order 
    retrieveCourse(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('course id is not a string')

                if (!(id = id.trim()).length) throw Error('course id is empty or blank')

                return Course.findById(id).select({ _id: 0, category: 1, dishName: 1, image: 1, temp: 1, baseFood: 1, dayAvail: 1 })
            })
            .then(course => {
                if (!course) throw Error(`no eater found with id ${id}`)

                return course
            })
    },



    /**
     * 
     * Each order must contain only 1 first course and 1 second course. 
     * Not an option to do only one course or two of the same category, it must be a first and a second.
     * 
     * @param {string} eaterId 
     * @param {date = Date.now()} date - it works as a timestamp to know if order was placed on time (by 11am)
     * @param {string} firstCourse 
     * @param {string} secondCourse 
     * @param {Date} pickupDate - will tell the business which time eater will go pick up their food.
     * @param {[status = 'processing']} (default order status is processing, other status will be paid)
     *  
     */

    createOrder(eaterId, firstCourse, secondCourse, pickupDate, status) {
     
        console.log('firstCourse: ', firstCourse);

        return Promise.resolve()
            .then(() => {

                if (typeof eaterId !== 'string') throw Error('eater id is not a string')
                if (!(eaterId = eaterId.trim()).length) throw Error('eater id is empty or blank')
                if (typeof firstCourse !== 'string') throw Error('first course id is not a string')
                if (!(firstCourse = firstCourse.trim()).length) throw Error('first course id is empty or blank')
                if (typeof secondCourse !== 'string') throw Error('second course id is not a string')
                if (!(secondCourse = secondCourse.trim()).length) throw Error('second course id is empty or blank')
                
                if(pickupDate !== undefined){
                    //if (typeof pickupDate !== 'date') throw Error('pickUp id is not a string')
                    //if (!(pickupDate = pickupDate.trim()).length) throw Error('eater id is empty or blank')
                }

                const timeOrdered = new Date().getHours()
                if (timeOrdered > 19) throw Error('cannot proceed with order, too late.')

                return Order.create({ eaterId, firstCourse, secondCourse, status })
                    .then((res) => {
                        return res
                    })
            })
    }

}
module.exports = logic

