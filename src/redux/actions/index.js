export const actionType = {
    ADD_TRACK:'1',
    CHANGE_STATUS: '2',
    DELETE_TRACK: '3'
};

export const deleteTrack = (list, id) =>({
    type: actionType.DELETE_TRACK,
    payload: { list, id}
});

export const addTrack = (list, artist, song) => ({
    type: actionType.ADD_TRACK,
    payload: {list, artist, song}
});

export const changeStatus = (list, id) =>({
    type: actionType.CHANGE_STATUS,
    payload: {list, id}
});