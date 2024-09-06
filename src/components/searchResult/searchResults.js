import React, { useState, useEffect } from 'react';
import TrackList from '../tracklist/tracklist';
import styles from './searchResult.module.css'


const SearchResults = ({searchResults, addSong, removeSong}) => {
    
    return (
        <div className={styles.container}>
           <h2>Results</h2>
           <div className={styles.trackContainer}>
            <TrackList  songs={searchResults} addSong={addSong} removeSong={removeSong}/>
           </div>
           
        </div>
    )

};

export default SearchResults;