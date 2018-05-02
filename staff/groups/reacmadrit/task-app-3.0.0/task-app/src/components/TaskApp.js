// smart

import React, { Component } from 'react'
import UpdateLists from './UpdateLists'

class TaskApp extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',           
            ListTasks: [],
        }
        this.addTask = this.addTask.bind(this)
        this._taskDone = this._taskDone.bind(this)
        this._handlerAddingTask = this._handlerAddingTask.bind(this)
    }

    addTask(e) {
        e.preventDefault()
                let id=Date.now();
                // return Promise.resolve()
                // .then(() => {
                    let taskToAdd = {
                        id:id,
                        delete:false,
                        done:false,
                        li:<li key={id}><button id={id}  onClick={this._taskDone}>gone</button>{this.state.inputText}</li>}
                    this.setState(prevState => {
                        return {
                            inputText: '',
                            ListTasks: [...prevState.ListTasks, taskToAdd]
                        }
                    })
                // }) 
    }

    _taskDone(e){
      
        let id=e.target.id;
        let newArr =this.state.ListTasks.map(elm => {
            
           if(elm.id.toString() === id){
            elm.done=true;    
            return elm }
           else {
               return elm }
        });
        this.setState({
            ListTasks:newArr
        })
       
    }

    // for onChange type input, so it automatically updates
    _handlerAddingTask(e) {
        let inputText = e.target.value
        this.setState({
            inputText
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
            <UpdateLists ListTasks={this.state.ListTasks}> </UpdateLists>
       
        </div>
    }
}


export default TaskApp  
