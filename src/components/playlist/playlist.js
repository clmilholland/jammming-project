import React from 'react';
import TrackList from '../tracklist/tracklist';
import styles from './playlist.module.css';

const Playlist = ({playlistSongs, removeSong, namePlaylist, savePlaylist}) => {

    const handlePlaylistName = (event) => {
        event.preventDefault()
        namePlaylist(event.target.value)
    };
    
    return (
        <div className={styles.container}>
            <h2>Playlist</h2>
            <div className={styles.trackContainer}>
                <TrackList 
                    songs={playlistSongs} 
                    removeSong={removeSong} 
                    forRemoval={true} 
                />
            </div>
            <div className={styles.saveContainer}>
                <input className={styles.input} type='text' placeholder='Name your playlist' onChange={handlePlaylistName}/>
                <button className={styles.button} onClick={savePlaylist}>Save Playlist</button>
            </div>    
        </div>
    )
};

export default Playlist;