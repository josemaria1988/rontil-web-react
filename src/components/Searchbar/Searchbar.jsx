import React from 'react'
import './Searchbar.scss'
import { useSearchContext } from '../../Context/SearchContext';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

const Searchbar = () => {

    const { search, handleInput } = useSearchContext();



    return (
        
                <Input
                    id="input-with-icon-adornment"
                    type="text" placeholder="Buscar" className="search-input" onChange={handleInput} value={search}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>}/>   
    )
}

export default Searchbar