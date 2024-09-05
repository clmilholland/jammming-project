import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TrackList from './components/tracklist';
import SearchResults from './components/searchResults';

function App() {

  const [searchResults, setSearchResults] = useState([
    {
        name: 'White Iverson',
        artist: 'Post Malone',
        album: 'Stoney-Delux',
        id: 1
    },
    {
        name: 'Georgia Time',
        artist: 'Riley Green',
        album: 'Georgia Time',
        id: 2
    },
    {
        name: "Fix'n To Break",
        artist: 'Bailey Zimmerman',
        album: 'Religiously',
        id: 3
    },
    {
        name: '28',
        artist: 'Zach Bryan',
        album: 'The Great American Bar Scene',
        id: 4
    }
]);




  return (
    <div className="App">
      <header className="App-header">
        <SearchResults searchResults={searchResults} />
        
    
      </header>
    </div>
  );
}

export default App;
