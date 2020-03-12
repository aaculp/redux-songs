import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "I Want It That Way", duration: "1:05" },
    { title: "No Diggity", duration: "3:05" },
    { title: "Macarena", duration: "4:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    
    return selectedSong
};

export default combineReducers({
    // the keys are what would be in state "songs, selectedSong"
    // values are the reducers
    songs: songsReducer,
    selectedSong: selectedSongReducer
})