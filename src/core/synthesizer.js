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
  loop = new Tone.Sequence(function (time, note) {
    if (note) {
      synth.triggerAttackRelease(note, '8n', time);
    }
  }, beats.map(beat => {
    return beat.on ? beat.note : false;
  }), '8n');

  loop.loop = true;
  loop.start(0);

  Tone.Transport.start();
};

export const stop = () => {
  loop.stop();
  Tone.Transport.stop();
};
