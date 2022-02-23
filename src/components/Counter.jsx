import React, { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0)


    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        setNumber(number - 1)
    }

        return (
            <div className='task first'>
                <div>{number}</div>
                <div>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button></div>
            </div>
        )
}
export default Counter