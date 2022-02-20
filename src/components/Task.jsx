import React from "react";
const markAsDone = {
    textDecoration: 'line-through'
}

const Task = ({ changeDone, text, id, isDone, deleteTask, editTask, isEdit, handleChange }) => {

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

    console.log(isDone)
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
                    <button onClick={(e) => editTask(e, id)} className='tasksList-btn' type='button'>{isEdit ? '✓' : '🖊'}</button>
                    <button onClick={(e) => deleteTask(e, id)} className='tasksList-btn' type='button'>X</button>
                </div>
            </li>
    )
}
export default Task