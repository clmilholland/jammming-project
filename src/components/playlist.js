import React from 'react';
import TrackList from './tracklist';

const Playlist = ({playlistSongs, removeSong, namePlaylist}) => {

    const handlePlaylistName = (event) => {
        event.preventDefault()
        namePlaylist(event.target.value)
    };
    //console.log(playlistTracks)
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList songs={playlistSongs} removeSong={removeSong} forRemoval={true} />
            <input type='text' placeholder='Name your playlist' onChange={handlePlaylistName}/>
            <button>Save Playlist</button>
        </div>
    )
};

export default Playlist;