import { store } from '../store';
import { setCurrentPlayingBeat } from '../actions/beat';
import Tone from 'tone';

const synth = new Tone.Synth({
  oscillator: {
    type: 'sawtooth'
  },
  envelope: {
    attack: 0.001,
    sustain: 0.2,
    release: 2
  }
}).toMaster();

let loop;

export const playPattern = (beats) => {
  loop = new Tone.Sequence((time, { note, index }) => {
    store.dispatch(setCurrentPlayingBeat(index));

    if (note) {
      synth.triggerAttackRelease(note, '8n', time);
    }
  }, beats.map((beat, index) => {
    return {
      note: beat.on ? beat.note : false,
      index
    }
  }), '8n');

  loop.loop = true;
  loop.start(0);

  Tone.Transport.start();
};

export const stop = () => {
  loop.stop();
  Tone.Transport.stop();
};
