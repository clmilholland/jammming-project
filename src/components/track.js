import React from 'react';

const Track = (searchResult) => {
    return (
        <div>
            <h3>{searchResult.searchResult.name}</h3>
            <p>
                {searchResult.searchResult.artist} | {searchResult.searchResult.album}
            </p>
        </div>
    )
};

export default Track;