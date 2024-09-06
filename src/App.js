import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/playlist/playlist';
import SearchResults from './components/searchResult/searchResults';
import SearchBar from './components/searchbar/searchBar';
import Spotify from './utilities/spotify';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  
  const search = (userInput) => {
    Spotify.search(userInput).then(setSearchResults); 
  }
    
  const [playlistSongs, setPlaylistSongs] = useState([]);
  
  const addSong = (song) => {
    setPlaylistSongs((playlist) => [song, ...playlist])
  }
  const removeSong = (song) => {
    setPlaylistSongs((playlist) => playlist.filter((songs) => songs.id !== song.id))
  }

  const [playlist, setPlaylist] = useState('New Playlist');

  const namePlaylist = (name) => {
    setPlaylist(name);
  }
  console.log(playlist)

  const savePlaylist = () => {

  };

//console.log(playlistTracks)

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setSearch={search}/>
        <SearchResults searchResults={searchResults} addSong={addSong} />
        <Playlist 
          playlistSongs={playlistSongs} 
          removeSong={removeSong} 
          namePlaylist={namePlaylist} 
          savePlaylist={savePlaylist}
        />
      </header>
    </div>
  );
}

export default App;
