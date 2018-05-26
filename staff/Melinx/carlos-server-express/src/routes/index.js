
'use strict' // ROUTES

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('../logic/index')
const listnotes = require('./handlers/listnotes')

const router = express.Router()
const bodyParserJSON = bodyParser.json() 
const app = express()

router.get('/listnotes', listnotes)

router.post('/createnote', bodyParserJSON, (req, res) => {

    const { body: { text } } = req

    return logic.createNote(text)
        .then(note => {
            res.json({ status: 'OK', data: `note added with text: ${text}` })
        })
        .catch(err => {
            res.json(err.message)
        })
})

router.get('/retrieve/:id', (req, res) => {
    const { params: { id } } = req
    
    return logic.retrieveNote(id)

        .then(note => {
            res.json({ status: 'OK', data: note })
        })
        .catch(err => {
            res.json(err.message)
        })
})

router.put('/update/:id', bodyParserJSON, (req, res) => {
    const { params: { id }, body: { text } } = req

    return logic.updateNote(id)

        .then(updatedNote => {
            res.json({ status: 'OK', data: updatedNote })
        })
        .catch(err => {
            res.json(err.message)
        })
})

router.delete('/delete/:id', (req, res) => {
    const { params: { id } } = req

    logic.deleteNote(id)

        .then(deletedNote => {
            res.json({ status: 'OK', data: deletedNote })
        })
        .catch(err => {
            res.json(err.message)
        })

})

module.exports = router