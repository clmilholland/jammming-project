import React from 'react';
import Track from './track';

const TrackList = ({songs, addSong, removeSong, forRemoval}) => {
    return (
        <div>
            {songs.map((song) => {
                return (
                    <Track 
                        key={song.id} 
                        song={song} 
                        addSong={addSong}
                        removeSong={removeSong}
                        forRemoval={forRemoval}
                    />
                )
            })}
        </div>
    )
}

export default TrackList;