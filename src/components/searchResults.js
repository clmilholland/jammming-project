import React, { useState, useEffect } from 'react';
import TrackList from './tracklist';


const SearchResults = ({searchResults}) => {
    console.log(searchResults)
    return (
        <div>
           <h2>Results</h2>
           <TrackList  searchResults={searchResults}/>
        </div>
    )

};

export default SearchResults;