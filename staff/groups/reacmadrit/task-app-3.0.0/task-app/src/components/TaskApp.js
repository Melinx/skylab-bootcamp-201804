import React, { Component } from 'react'
import UpdateLists from './UpdateLists'

class TaskApp extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
            listTodos: [],
            listDones: []
        }

        this.addTask = this.addTask.bind(this)
        this._handlerAddingTask = this._handlerAddingTask.bind(this)
        this.markDone = this.markDone.bind(this)
    }

    // removed promise when removed listTasks var
    addTask(e) {
        e.preventDefault()
        let listTodos = {
            desc: this.state.inputText,
            done: false,
            id: Date.now()
        }
        this.setState(prevState => {
            return {
                inputText: '',
                listTodos
            }
        })
    }

    _handlerAddingTask(e) {
        let inputText = e.target.value
        this.setState({
            inputText
        })
    }

    //
    markDone(iden) {
        let tasksDone = this.state.listTodos.map(function (v) {
            if (v.id === iden) {
                v.done = true
            }
            return tasksDone // changed from v
        })

        this.setState({
            listTodos: this.listTodos,
            listDones: this.tasksDone //changes from listTodos to listDones
        })
    }

    render() {
        return <div>
            <h1> Task App </h1 >
            <h2> Add Task </h2>

            <form onSubmit={this.addTask}>

                <input type="text" onChange={this._handlerAddingTask} value={this.state.inputText} />
                <input type="submit" />

            </form>

            <UpdateLists listTodos={this.state.listTodos} listDones={this.state.listDones} onMarkDone={this.markDone}>

            </UpdateLists>
        </div >
    }
}

export default TaskApp  