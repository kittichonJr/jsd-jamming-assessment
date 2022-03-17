import './TrackList.css'
import Track from '../Track/Track';

function TrackList(props){
const {tracks, onAdd, onRemove, isRemoval} = props;
    return <div className="TrackList">
        {
            (tracks.length >= 1) &&
            tracks.map((track) => <Track 
            key={track.id} 
            track={track} 
            onAdd={onAdd} 
            onRemove={onRemove} 
            isRemoval={isRemoval}
            />)
        }
    </div>
}
export default TrackList;