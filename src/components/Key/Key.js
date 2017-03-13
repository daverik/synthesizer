require('normalize.css/normalize.css');
require('./Key.scss');

import React from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import { setBeatNote } from '../../actions/beat';

var synth = new Tone.Synth().toMaster();

let Key = ({ dispatch, note }) => {
  return (
    <div className="key" onClick={dispatch.bind(this, setBeatNote(note))}>
        { note }
    </div>
  );
};

const mapStateToProps = () => {
  return {
  };
};

Key = connect(mapStateToProps)(Key)

export default Key;
