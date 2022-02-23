import React, { Component } from "react";

class CounterClass extends Component {
    state = {
        number: 0
    }

    increment = () => {
        this.setState({number: this.state.number + 1})
    }

    decrement = () => {
        this.setState({number: this.state.number - 1})
    }
    render() {
        return (
            <div className='task first'>
                <div>{this.state.number}</div>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button></div>
            </div>
        )
    }
}
export default CounterClass