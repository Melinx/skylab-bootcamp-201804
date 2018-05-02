import React from 'react'

function UpdateLists(props) {
    let todoList = props.ListTasks.map(v => {
        if(!v.done) return v.li
    })
    let doneList = props.ListTasks.map(v => {
        if(v.done) return v.li
    })

    return (
                <div>
                    <h2>TO DO</h2>
                    <ul>{todoList}</ul>
                    <h2>DONE</h2>
                    <ul>{doneList}</ul>
                    
                </div>
    )
}


export default UpdateLists