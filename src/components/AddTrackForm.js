import React from "react";
import {addTrack} from "../redux/actions";
import {connect} from "react-redux";
import {FormDiv, FormInput, ListDiv} from "./StyledComponents"; // HOC that providing information component

function AddTrackForm(props) {
  const {list, addTrack} = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);

    let data = {
      artist: formData.get('artist'),
      song: formData.get('song')
    }

    addTrack(list, data.artist, data.song);
    event.target.reset();
  }

  return (

    <form onSubmit={handleSubmit}>
      <FormDiv>

      <label>
        Artist Name:
        <FormInput type="text" name="artist"/>
      </label>

      <label>
        Song Name:
        <FormInput type="text" name="song"/>
      </label>

      <FormInput type="submit" value="Add"/>

      </FormDiv>
    </form>
  )
}

const dispatcherToProps = (dispatcher) => ({
  addTrack: (list, artist, song) => dispatcher(addTrack(list, artist, song))
});

export default connect(null, dispatcherToProps)(AddTrackForm);