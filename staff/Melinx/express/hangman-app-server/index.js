'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const Hangman = require('./src/logic.js')

let hangman = new Hangman('hello')
const attemptsCounter = hangman.attempts();
const app = express()

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {

    const guessed = hangman.guessed()
    const attempts = hangman.attempts()
    const status = hangman.status()
    const attemptsUsed = attemptsCounter - hangman.attempts()

    res.render('index.pug', { guessed, Hangman, attempts, status, attemptsUsed })

})

app.post('/try', (req, res) => {
    const { body: { text }} = req
    hangman.try(text)

    res.redirect('/')
})

app.get('/new-game', (req, res) => {
    hangman = new Hangman('alba');
    res.redirect('/')
  
  })

const port = process.argv[2] || 3000

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('stopping server')

    process.exit()
})