import { createContext, useContext, useState, useEffect } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        const text = e.target.value
        setSearch(text)
    }
    useEffect(() => {

    }, [search])

    return (
        <SearchContext.Provider value={{search, handleInput}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    return useContext(SearchContext)
}