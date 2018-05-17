//task-app 1.0.0

const express = require('express')
const bodyParser = require('body-parser')

const port = process.argv[2]

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))

const tasks = []

//export logic.
// let tasks = tasks.splice(',', 1)

app.get('/', (req, res) => {
    res.send(`<html>
    <head>
         <title> Task-App </title>
    </head>
    <body>
        <form action="/add-task" method="POST">
            <textarea name="task" placeholder="add your task here"></textarea>
            <button type="submit"> Add! </button>
        </form>
    </body>
    </html>
    `)
})

app.post('/add-task', (req, res) => {
    const { body: { task } } = req

    tasks.push(task.timeStamp())

    res.send(`<html>
        <head>
            <title> Task-App </title>
        </head>
        <body>
            <form action="/add-task" method="POST">
                <textarea name="task" placeholder="add your task here"></textarea>
                <button type="submit"> Add! </button>
            </form>

            <ul>
            ${tasks.map(task => `<li>${task}<button>"x"</button></li>`)}
            </ul>
         </body>
    </html>`)
})

app.delete('/delete-task:taskToRemove', (req,res) => {
    const { body: { tasks } } = req
    let taskToRemove = ''
    tasks.remove({task:req.params.taskToRemove})

    res.send(`<html>
    <head>
        <title> Task-App </title>
    </head>
    <body>
        <form action="/delete-task" method="DELETE">
            <textarea name="task" placeholder="add your task here"></textarea>
            <button type="submit"> Add! </button>
        </form>

        <ul>
        ${tasks.map(task => `<li>${task}<button> X</button> </li>`)}
        </ul>
     </body>
</html>`)
})


app.listen(port, () => console.log (`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})