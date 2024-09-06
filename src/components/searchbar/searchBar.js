import React, { useState } from "react";
import styles from './searchbar.module.css';

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
        <div className={styles.container}>
                <input type="text"  onChange={handleSearch} placeholder="Search for a song" className={styles.input}/>
                <button onClick={search} className={styles.button}>Search</button> 
        </div>
    )
};

export default SearchBar;