import React from 'react';
import TrackList from '../tracklist/tracklist';

const Playlist = ({playlistSongs, removeSong, namePlaylist, savePlaylist}) => {

    const handlePlaylistName = (event) => {
        event.preventDefault()
        namePlaylist(event.target.value)
    };
    
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList songs={playlistSongs} removeSong={removeSong} forRemoval={true} />
            <input type='text' placeholder='Name your playlist' onChange={handlePlaylistName}/>
            <button onClick={savePlaylist}>Save Playlist</button>
        </div>
    )
};

export default Playlist;