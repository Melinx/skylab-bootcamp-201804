import React from 'react'

function UpdateLists(props) {
    let todoList = props.listTodos.map(v => {
    return <li key={v.id}><button onClick={props.onMarkDone(v.id)}>✅</button>{v.desc} </li>
    })
    let doneList = props.listDones.map(v => {
        return <li key={v.id}>
        <button>
            ❌</button> {v.desc} </li>
    })

    return (
        <div>
            {props.listTodos.length > 0 ?
                <div>
                    <h2>TO DO</h2>
                    <ul>{todoList}</ul>
                </div>
                : undefined}
            {props.listDones.length > 0 ?
                <div>
                    <h2>DONE</h2>
                    <ul>{doneList}</ul>
                </div>
                : undefined}
        </div>

    )
}


export default UpdateLists