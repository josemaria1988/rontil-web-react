import React from 'react'
import './Searchbar.scss'
import { useSearchContext } from '../../Context/SearchContext';

const Searchbar = () => {

    const { search, handleInput } =useSearchContext();



    return (
        <div className="search-container">
            <input type="text" placeholder="Buscar" className="search-input" onChange={handleInput} value={search}></input>
        </div>
    )
}

export default Searchbar