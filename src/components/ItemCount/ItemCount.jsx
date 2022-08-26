import React from "react";
import './ItemCount.scss'


const ItemCount = ({precio, counter, onAdd, onDecrement}) => {


    return (
        <div className="count-box">
            <button onClick={onDecrement} className="count-btn">-</button>
            <span className="count-field">{counter}</span>
            <button onClick={onAdd} className="count-btn">+</button>
            <span className="count-field">$ {precio*counter}</span>
        </div>
    )
}

export default ItemCount