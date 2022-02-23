import React, { useState } from "react";

const ValidationForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    const validation = (e, field) => {
        if(e.target.value.length < 2) {
            setMessage(`Sorry, ${field} is too short`)
        } else {
            setMessage( '')
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(!message) {
            console.log('username: ' + username + ', password: ' + password)
        }
    }
        return (
            <div className='task second'>
                <form>
                    <h2>Please, log in</h2>
                    <input type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           onInput={(e) => validation(e, 'username')}
                           placeholder='username'
                    />
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           onInput={(e) => validation(e, 'password')}
                           placeholder='password'
                    />
                    <p>{message}</p>
                    <button type='submit' onClick={submitHandler}>submit</button>
                </form>
            </div>
        )
}

export default ValidationForm