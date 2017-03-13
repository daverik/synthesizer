require('normalize.css/normalize.css');
require('./Synthesizer.scss');

import React from 'react';
import { connect } from 'react-redux'
import Key from '../Key/Key';
import Beat from '../Beat/Beat';
import { play, stop } from '../../actions/synthesizer';

let Synthesizer = ({ dispatch, keys, beats, isPlaying }) => {

  return (
    <div className="synthesizer">
      <div className="synthesizer-name">Synthesizer</div>
      <div className="beats-container">
        {beats.map((beat) => {
          return (<Beat key={beat.id} id={beat.id} />);
        })}
      </div>
      <div className="keys-container">
        {keys.map((key) => {
          return (<Key key={key.key} note={key.key} />);
        })}
      </div>
      { isPlaying ?
        (<button onClick={dispatch.bind(this, stop())}>Stop</button>) :
        (<button onClick={dispatch.bind(this, play())}>Play</button>)
      }
    </div>
  );
};

const mapStateToProps = ({ keys, beats, isPlaying }) => {
  return {
    keys,
    beats,
    isPlaying
  };
};

Synthesizer = connect(mapStateToProps)(Synthesizer)

export default Synthesizer;
