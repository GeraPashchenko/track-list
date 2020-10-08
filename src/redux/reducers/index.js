import {actionType} from "../actions";

// initial storage state
const initialStore = {
  tracksList: {
    first: [{artist: 'Aaaaa', song: 'dddd', favFlag: false, id: 0}, {artist: 'VVVV',song: 'aaa', favFlag: false, id: 1}, {artist: 'aaaaa', song: 'bbb', favFlag: true, id: 2}],
    second: [{artist: '', song: '', favFlag: false, id: ''}],
    third: [{artist: '', song: '', favFlag: false, id: ''}]
  },
  title: "Name",
}

// pure reducer function
export default function reduser(state = initialStore, action) {

  switch (action.type) {

    case (actionType.ADD_TRACK):
      return ({
        ...state,
        tracksList: {
          ...state.tracksList,
          [action.payload.list]: [...state.tracksList[action.payload.list], {
            id: state.tracksList[action.payload.list].length,
            artist: action.payload.artist,
            song: action.payload.song,
            favFlag: false
          }]
        }
      });


    // logic for updating create input value in state
    case (actionType.CHANGE_STATUS):
      return ({
        ...state,
        tracksList: {
          ...state.tracksList,
          [action.payload.list]: state.tracksList[action.payload.list].map((element) => {
            if (element.id === action.payload.id) {
             element.favFlag = !element.favFlag
            }
            return element;
          })
        }
      });


    // logic for removing task from task list from state
    case
    (actionType.DELETE_TRACK)
    :
      return ({
        ...state,
        tracksList: {
          ...state.tracksList,
          [action.payload.list]: state.tracksList[action.payload.list].filter((element) =>
            element.id !== action.payload.id)
        }
      });

    default:
      return state;
  }
}
