import React from "react";
import './ItemCount.scss'


const ItemCount = ({precio, counter, onAdd, onDecrement}) => {


    return (
        <div className="count-box">
            <button onClick={onDecrement} className="btn-counter">-</button>
            <span className="count-numbers">{counter}</span>
            <button onClick={onAdd} className="btn-counter">+</button>
            <span className="count-numbers">$ {precio*counter}</span>
        </div>
    )
}

export default ItemCount