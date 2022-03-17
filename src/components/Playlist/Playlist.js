import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
  const handleNameChange = ({target})=>{
    props.onNameChange(target.value)
  }
  return <div className="Playlist">
  <input value={props.playlistname} onChange={handleNameChange} />
  <TrackList tracks={props.playlisttrack} onRemove={props.onRemove} isRemoval={true} />
  <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
  </div>
}
export default Playlist;
