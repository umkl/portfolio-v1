import React,{useState, createContext} from 'react'

export const SearchContext = createContext();


export const SearchProvider = (props) => {
    const [searchInput, setSearchInput] = useState("");
    
    return (
        <SearchContext.Provider value={[searchInput, setSearchInput]}>
            {props.children}
        </SearchContext.Provider>
    );
}
