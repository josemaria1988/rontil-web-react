import React from "react";
import './ItemCount.scss'


const ItemCount = ({counter, onAdd, onDecrement}) => {


    return (
        <div className="count-box">
            <button onClick={onDecrement} className="count-btn">-</button>
            <span className="count-field">{counter}</span>
            <button onClick={onAdd} className="count-btn">+</button>
        </div>
    )
}

export default ItemCount