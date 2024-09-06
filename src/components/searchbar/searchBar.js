import React, { useState } from "react";

const SearchBar = ({setSearch}) => {

    const [userInput, setUserInput] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();
        setUserInput(event.target.value);
    };

    const search = () => {
        setSearch(userInput);
    }

    return (
        <div>
            <input type="text"  onChange={handleSearch} placeholder="Search for a song"/>
            <button onClick={search}>Search</button>
        </div>
    )
};

export default SearchBar;