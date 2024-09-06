import React, { useEffect } from 'react';


const Track = ({song, addSong, removeSong, forRemoval}) => {

    const addingSong = (event) => {
        addSong(song);
    }

    const removingSong = (event) => {
        removeSong(song);
    }

    const addRemove = () => {
        if (forRemoval) {
            return (
                <button onClick={removingSong}>Remove</button>
            )
        } else {
            return (
                <button onClick={addingSong}>Add</button>
            )
        }
    }

    return (
        <div>
            <h3>{song.name}</h3>
            <p>
                {song.artist} | {song.album}
            </p>
            {addRemove()}
        </div>
    )
};

export default Track;