import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Reducer from "./redux/reducers";
import TracksList from "./components/TrackList";
import {MainPage} from "./components/StyledComponents";

const store = createStore(Reducer); // Creating redux storage

function App() {
  return (
    <Provider store={store}>
      <MainPage>
        <TracksList list={'first'}/>
        <TracksList list={'second'}/>
        <TracksList list={'third'}/>
      </MainPage>
    </Provider>
  );
}

export default App;
