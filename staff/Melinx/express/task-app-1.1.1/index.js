// TASK-APP-1.1.1

'use strict'

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const port = process.argv[2]

app.use(bodyParser.urlencoded({ extended: false })) // middleware

const tasks = []


app.get('/', (req, res) => {

    let todoList = tasks.find(v => !v.done)
    let doneList = tasks.find(v => v.done)
    res.send(`<html>
    <head>
        <title>tasks App</title>
    </head>
    <body>
        <form action="/add-task" method="POST">
            <textarea name="task" placeholder="write a task"></textarea>
            <button type="submit">keep</button>
        </form>
        ${todoList ? (`<ul>
        <h2>To do:</h2>
            ${tasks.map(task => !task.done ? `<li>${task.task}</li><a href="/markdone-task?id_msg=${task.id_msg}"><button>MarkDone</button></a>` : null).join('')}
        </ul>`) : `<div></div>`
        }
        ${doneList ? (`<ul>
        <h2>Done:</h2>
            ${tasks.map(task => task.done ? `<li>${task.task}</li><a href="/delete-task?id_msg=${task.id_msg}"><button>Delete</button></a>` : null).join('')}
        </ul>`) : `<div></div>`
        }
    </body>
</html>`)
})

app.get('/delete-task', (req, res) => {
    const { query: { id_msg } } = req
    tasks.forEach((v, i) => {
        if (v.id_msg === parseInt(id_msg)) {
            tasks.splice(i, 1)
        }
    })
    res.redirect('/')
})

app.post('/add-task', (req, res) => {
    const { body: { task } } = req
    tasks.push({
        task: task,
        done: false,
        id_msg: Date.now()
    })
    res.redirect('/')
})

app.get('/markdone-task', (req, res) => {
    const { query: { id_msg } } = req
    tasks.forEach(v => {
        if (v.id_msg === parseInt(id_msg)) {
            v.done = true
        }
    })

    res.redirect('/')
})

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})