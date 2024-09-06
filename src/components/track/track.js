import React, { useEffect } from 'react';
import styles from './track.module.css';


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
                <button onClick={removingSong} className={styles.removeButton} />
            )
        } else {
            return (
                <button onClick={addingSong} className={styles.addButton} />
            )
        }
    }

    return (
        <div className={styles.container}>
            <h3>{song.name}</h3>
            <p>
                {song.artist} | {song.album}
            </p>
            <div className={styles.buttonContainer}>{addRemove()}</div>
        </div>
    )
};

export default Track;