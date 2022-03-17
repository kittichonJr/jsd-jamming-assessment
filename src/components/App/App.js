import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchRsults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import {useState, useEffect} from 'react'
import Spotify from '../../utils/Spotify';

function App(props) {
  const [searchResults, setSearchResults] = useState(
    [
      // {
      //    id:'',
      //    name: '',
      //    artist: '',
      //    album: '',
      // }
  ]);
    const [playListName, setPlayListName] = useState('My Playlist');
    const [playListTracks, setPlayListTracks] = useState(
      [
        // {
        //   id:'',
        //   name:'',
        //   artist:'',
        //   album:'',
        // }
      ])

      const addTrack = (tracks)=>{
        if (playListTracks.find(savedTrack => savedTrack.id === tracks.id )){ // check song in array if had jsut notice
          return alert('Your already add this song.')
        }else{
          return setPlayListTracks(prev => [tracks, ...prev]) // if not add it too array
        }
      }
      const removeTrack = (tracks) =>{
        return setPlayListTracks((inTracks)=>
          inTracks.filter(track => track.id !== tracks.id) // later explain not yet understood
        )
      }
      const updatePlaylistName = (name)=>{
        console.log(name)
        setPlayListName(name)
      }
      const savePlaylist = ()=>{
        const trackId = playListTracks.map(track =>{
          return track.id
        })
        Spotify.savePlaylist(playListName,trackId)
        // Reset playlist
        setPlayListTracks([])
        setPlayListName('New Playlist')
      }
      const search = (searchs) =>{
        const searched = Spotify.search(searchs)
        searched.then(res => setSearchResults(res))
      }
      useEffect(()=>{
        Spotify.getAccessToken()
      },[])
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchRsults searchResults = {searchResults} onAdd={addTrack} />
          <Playlist playlistname={playListName} 
          playlisttrack={playListTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
