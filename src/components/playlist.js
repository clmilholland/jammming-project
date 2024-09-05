import React from 'react';
import TrackList from './tracklist';

const Playlist = ({playlistSongs, removeSong}) => {
    //console.log(playlistTracks)
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList songs={playlistSongs} removeSong={removeSong} forRemoval={true} />
        </div>
    )
};

export default Playlist;