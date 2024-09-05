import React, { useState, useEffect } from 'react';
import TrackList from './tracklist';


const SearchResults = ({searchResults, addSong, removeSong}) => {
    return (
        <div>
           <h2>Results</h2>
           <TrackList  songs={searchResults} addSong={addSong} removeSong={removeSong}/>
        </div>
    )

};

export default SearchResults;