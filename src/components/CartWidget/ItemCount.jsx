import React, { useState } from "react";
import './ItemCount.scss'


const ItemCount = () => {


   let [counter, setCounter] = useState(1)

    const handleSumar = () => {
        if(counter < 10) setCounter(counter + 1)
    }

    const handleRestar = () => {
        if(counter > 1) setCounter(counter - 1)
    }

    return (
        <div className="count-box">
            <button onClick={handleRestar} className="count-btn">-</button>
            <span className="count-field">{counter}</span>
            <button onClick={handleSumar} className="count-btn">+</button>
        </div>
    )
}

export default ItemCount