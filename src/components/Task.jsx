import React from "react";

const markAsDone = {
    textDecoration: 'line-through'
}

const Task = ({ changeDone, text, id, isDone, deleteTask, toggleEditTask, isEdit, editTask }) => {

    const showTask = () => {
        if(isEdit) {
            return <input type='text' value={text} onChange={(e) => editTask(e, id)}/>
        }
        if(isDone) {
            return <p style={markAsDone}>{text}</p>
        } else {
            return <p>{text}</p>
        }
    }

    let task = showTask()
    return (
        <li>
            <input type='checkbox'
                   onChange={() => changeDone(id)}
                   className='check'
                   value={isDone}
            />
            {task}
            <div className="btn-holder">
                <button onClick={(e) => toggleEditTask(e, id)} className='tasksList-btn' type='button'>{isEdit ? '✓' : '🖊'}</button>
                <button onClick={(e) => this.deleteTask(e, id)} className='tasksList-btn' type='button'>X</button>
            </div>
        </li>
    )
}
export default Task