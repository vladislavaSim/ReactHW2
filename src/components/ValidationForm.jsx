import React, { Component } from "react";

class ValidationForm extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    changeHandler = (e, field) => {
        this.setState( {[field]: e.target.value})
    }

    validation = (e, field) => {
        if(this.state[field].length < 2) {
            this.setState( {message: `Sorry, ${field} is too short`} )
        } else {
            this.setState( {message: ''})
        }
        console.log((this.state[field]))
    }

    submitHandler = (e) => {
        e.preventDefault()
        if(!this.state.message) {
            console.log('username: ' + this.state.username + ', password: ' + this.state.password)
        }
    }

    render() {
        return (
            <div className='task second'>
                <form>
                    <h2>Please, log in</h2>
                    <input type="text"
                           value={this.state.username}
                           onChange={(e) => this.changeHandler(e, 'username')}
                           onInput={(e) => this.validation(e, 'username')}
                           placeholder='username'
                    />
                    <input type="password"
                           value={this.state.password}
                           onChange={(e) => this.changeHandler(e, 'password')}
                           onInput={(e) => this.validation(e, 'password')}
                           placeholder='password'
                    />
                    <p>{this.state.message}</p>
                    <button type='submit' onClick={this.submitHandler}>submit</button>
                </form>
            </div>
        )
    }
}

export default ValidationForm