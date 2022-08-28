import React from "react";
import './ItemCount.scss'

const ItemCount = ({precio, counter, onAdd, onDecrement}) => {



    return (
        <div className="count-box">

            <button onClick={onDecrement} className="count-btn">-</button>
            <span className="count-field">{counter}</span>
            <button onClick={onAdd} className="count-btn">+</button>

            <button onClick={onDecrement} className="btn-card">-</button>
            <span className="titulo-card">{counter}</span>
            <button onClick={onAdd} className="btn-card">+</button>
            <div>
            <span className="count-field">$ {precio*counter}</span>
            </div>

        </div>
    )
}

export default ItemCount