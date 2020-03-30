import React from "react";
import { connect } from "react-redux";

// Gets state from Redux
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

const SongDetail = (props) => {
    console.log(props)
  return <div>Song Detail</div>;
};

export default connect(mapStateToProps) (SongDetail);
