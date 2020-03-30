import React from "react";
// if we need to make changes to state add { connect }
import { connect } from "react-redux";

// Gets state from Redux
const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong };
};

// mySelectedSong is coming froms state ..
const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select A Song</div>;
  }
  return (
    <div>
        <h3>Details for: </h3>
        <p>
            Title: {mySelectedSong.title}
            <br />
            Duration: {mySelectedSong.duration}
        </p>
    </div>
  )
};

export default connect(mapStateToProps)(SongDetail);
