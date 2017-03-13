require('normalize.css/normalize.css');
require('./Beat.scss');

import React from 'react';
import { connect } from 'react-redux'
import { setCurrentBeat, toggleBeatOn } from '../../actions/beat';

let Beat = ({ dispatch, ...props }) => {

  const toggleAndSet = () => {
    dispatch(toggleBeatOn(props.id));
    dispatch(setCurrentBeat(props.id));
  };

  let classes = '';

  if (props.on) {
    classes += ' on';
  }

  if (props.selected) {
    classes += ' selected';
  }

  if (props.isPlaying) {
    classes += ' is-playing';
  }

  return (
    <div className={`beat ${classes}` } onClick={toggleAndSet}>
      { props.note }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const beat = state.beats[props.id];

  return {
    note: beat.note,
    selected: state.currentBeat === props.id,
    isPlaying: state.currentPlayingBeat === props.id,
    on: beat.on
  };
};

Beat = connect(mapStateToProps)(Beat)

export default Beat;
