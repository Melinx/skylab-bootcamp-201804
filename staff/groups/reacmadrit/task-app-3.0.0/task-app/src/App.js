// smart

import React, { Component } from 'react'
import UpdateLists from './UpdateLists'

class TaskApp extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
            listTasks: [],
            listTodos: [],
            listDones: []
        }
        this.addTask = this.addTask.bind(this)
        this._handlerAddingTask = this._handlerAddingTask.bind(this)
        this.filterTasks = this.filterTasks.bind(this)
        this.markDone=this.markDone.bind(this)
    }

    addTask(e) {
        e.preventDefault()

        return Promise.resolve()
            .then(() => {
                let taskToAdd = { desc: this.state.inputText, done: false, id: Date.now() }
                this.setState(prevState => {
                    return {
                        inputText: '',
                        listTasks: [...prevState.listTasks, taskToAdd]
                    }
                })
            })
            .then(() => {
                this.filterTasks()
            })
    }

    filterTasks() {

        let _listTodos = this.state.listTasks.filter(v => {
            return v.done === false
        })
        let _listDones = this.state.listTasks.filter(v => {
            return v.done === true
        })
        console.log(this.state.listTasks)
        console.log(_listTodos)
        this.setState({
            listTodos: _listTodos,
            listDones: _listDones
        })
    }

    // for onChange type input, so it automatically updates
    _handlerAddingTask(e) {
        let inputText = e.target.value
        this.setState({
            inputText
        })
    }
    markDone(iden) {
        let tasksDone=this.state.listTasks.map(function(v) {
            if (v.id===iden) {
                v.done=true
            }
            return v
        })

        this.setState({
         listTasks: tasksDone
        })
    }
    render() {
        return <div>
            <h1> Task App </h1>
            <h2> Add Task </h2>

            <form onSubmit={this.addTask}>

                <input type="text" onChange={this._handlerAddingTask} value={this.state.inputText} />
                <input type="submit" />


            </form>

        <UpdateLists listTodos={this.state.listTodos} listDones={this.state.listDones} onMarkDone={this.markDone}>
                
            </UpdateLists>
        </div>
    }
}


export default TaskApp  
