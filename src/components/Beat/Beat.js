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

  return (
    <div className={`beat ${props.on ? 'on' : ''}` } onClick={toggleAndSet}>
      { props.note }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const beat = state.beats[props.id];

  return {
    note: beat.note,
    selected: state.currentBeat === props.id,
    on: beat.on
  };
};

Beat = connect(mapStateToProps)(Beat)

export default Beat;
