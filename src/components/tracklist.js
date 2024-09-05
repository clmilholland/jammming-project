import React from 'react';
import Track from './track';

const TrackList = ({searchResults}) => {
    console.log(searchResults)
    return (
        <div>
            {searchResults.map((searchResult) => {
                return (
                    <Track key={searchResult.id} searchResult={searchResult}/>
                )
            })}
        </div>
    )
}

export default TrackList;