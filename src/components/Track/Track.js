import React from "react";
import { addTrack, deleteTrack, changeStatus } from "../../redux/actions";
import { connect } from "react-redux"; // HOC that providing information component
import "./style.css";

function Track(props) {
  const {id, artist, song, list, favFlag, changeStatus, deleteTrack} = props;

  return(
    <div className="trackDiv">
      <input
        type="text"
        defaultValue={artist}
        placeholder="Artist"
      />

      <input
        type="text"
        defaultValue={song}
        placeholder="Song"
      />

      <button
        onClick={(event) => {deleteTrack(list, id)}}
      >&times;</button>

      <input
        className="checkboxInput"
        type='checkbox'
        onClick={(event) => {changeStatus(list, id)}}
      />
    </div>
  )
}
const dispatcherToProps = (dispatcher) => ({
  changeStatus: (list, id) => dispatcher(changeStatus(list, id)),
  addTrack: (list, artist, song) => dispatcher(addTrack(list, artist, song)),
  deleteTrack: (list, id) => dispatcher(deleteTrack(list, id)),
});

export default connect(null, dispatcherToProps)(Track);
