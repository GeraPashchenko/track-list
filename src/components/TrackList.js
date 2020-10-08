import React from "react";
import {connect} from "react-redux"; // HOC that providing information component
import Track from "./Track/Track";
import AddTrackForm from "./AddTrackForm";
import {FormDiv, ListDiv, TracksDiv} from './StyledComponents';

function TracksList(props) {
  const {tracksList, list} = props;

  let favouriteTracks = tracksList[list].filter(song => song.favFlag);
  let tracks = tracksList[list].filter(song => !song.favFlag);

  favouriteTracks.sort((a, b) => {
    let songA = a.song.toLowerCase();
    let songB = b.song.toLowerCase();
    return (songA < songB) ? -1 : (songA > songB) ? 1 : 0;
  });

  tracks.sort((a, b) => {
    let songA = a.song.toLowerCase();
    let songB = b.song.toLowerCase();
    return (songA < songB) ? -1 : (songA > songB) ? 1 : 0;
  });


  return (
    <ListDiv>
      <TracksDiv>
        {favouriteTracks.map(track => <Track list={list} key={track.id} id={track.id} artist={track.artist} song={track.song} favFlag={track.favFlag}/>)}
        {tracks.map(track => <Track list={list} key={track.id} id={track.id} artist={track.artist} song={track.song} favFlag={track.favFlag}/>)}
      </TracksDiv>

        <AddTrackForm list={list} />

    </ListDiv>
  )
}

const storeToProps = (store) => ({
  tracksList: store.tracksList
});

export default connect(storeToProps, null)(TracksList);
