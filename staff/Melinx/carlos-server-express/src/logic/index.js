'use strict'

const mongoose = require('mongoose')
const Note = require('../models/Note.js')

module.exports = {

    listNotes() {
        return Note.find({})
    },

    createNote(text) {
        return Note.create({ text })
    },

    retrieveNote(id) {
        return Note.findById({ _id: id })
    },

    updateNote(id) {
        return Note.findByIdAndUpdate({ _id: id }, { $set: { text } })
    },

    deleteNote(id) {
        return Note.findById({ _id: id })
    },
}