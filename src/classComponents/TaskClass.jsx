import React from "react";

const markAsDone = {
    textDecoration: 'line-through'
}

const TaskClass = ({ changeDone, text, id, isDone, deleteTask, toggleEditTask, isEdit, handleChange }) => {

    const showTask = () => {
        if(isEdit) {
            return <input type='text' value={text} onChange={(e) => handleChange(e, text)}/>
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
                <button onClick={(e) => deleteTask(e, id)} className='tasksList-btn' type='button'>X</button>
            </div>
        </li>
    )
}
export default TaskClass