import React, { useState, useCallback } from "react";
import styles from './searchbar.module.css';

const SearchBar = ({setSearch}) => {

    const [userInput, setUserInput] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();
        setUserInput(event.target.value);
        
    };

    const search = (event) => {
        event.preventDefault();
        setSearch(userInput);
    }

    

    return (
        <div className={styles.container}>
                <input type="text" value={userInput} onChange={handleSearch} placeholder="Search for a song" className={styles.input}/>
                <button onClick={search} className={styles.button}>Search</button> 
        </div>
    )
};

export default SearchBar; 