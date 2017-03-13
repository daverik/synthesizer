import { SET_CURRENT_BEAT, SET_BEAT_NOTE, PLAY, STOP, TOGGLE_BEAT_ON } from '../constants';
import { playPattern, stop } from '../core/synthesizer';

const initialState = {
  isPlaying: false,
  currentBeat: 0,
  beats: ['C4', 'D4', 'C4', 'E4', 'C4', 'C4', 'C4', 'C4'].map((note, id) => {
    return {
      note,
      id,
      on: false
    }
  }),
  keys: [{
    key: 'C4'
  }, {
    key: 'C#4'
  }, {
    key: 'D4'
  }, {
    key: 'E4'
  }, {
    key: 'F4'
  }, {
    key: 'G4'
  }]
};

export default function app(state = initialState, action) {
  let beats, beat;

  switch (action.type) {
    case SET_CURRENT_BEAT:
      return {
        ...state,
        currentBeat: action.beatId
      };
    case SET_BEAT_NOTE:
      beats = state.beats;

      beats[state.currentBeat].note = action.note;

      return {
        ...state,
        beats
      };
    case STOP:
      stop();

      return {
        ...state,
        isPlaying: false
      };
    case PLAY:
      playPattern(state.beats);

      return {
        ...state,
        isPlaying: true
      };
    case TOGGLE_BEAT_ON:
      beats = state.beats;
      beat  = state.beats[action.beatId];

      beat.on = typeof action.toggle === 'boolean' ? action.toggle : !beat.on;

      return {
        ...state,
        beats
      };
    default:
      return state;
  }
}