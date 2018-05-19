'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./src/logic.js')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {

    const { query: { error } } = req

    res.render('index')
})

app.post('/new-game', (req, res) => {

    const { body: { word } } = req

    let hangman = new Hangman(word)
    let wordToGuess = hangman.guessed().join(" ")
    
    res.redirect('/',{ wordToGuess })
})

app.post('/game', (req, res) => {
    const { body: { word } } = res
  
    hangman.try(wordToGuess)
    let splitwordToGuess = hangman.guessed()

    res.redirect('/')
})



const port = process.argv[2] || 3000

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('stopping server')

    process.exit()
})