import {
  SET_CURRENT_BEAT,
  SET_BEAT_NOTE,
  PLAY,
  STOP,
  TOGGLE_BEAT_ON,
  SET_CURRENT_PLAYING_BEAT
} from '../constants';
import {
  playPattern,
  stop
} from '../core/synthesizer';

const initialState = {
  isPlaying: false,
  currentBeat: 0,
  currentPlayingBeat: -1,
  beats: ['C4', 'D4', 'C4', 'E4', 'C4', 'C4', 'C4', 'C4'].map((note, id) => {
    return {
      note,
      id,
      on: false
    }
  }),
  keys: ['C4', 'C#4', 'D4', 'D#4', 'E4', 'E#4', 'F4', 'F#4', 'G4', 'G#4', 'A4'].map(key => { return { key } })
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
        isPlaying: false,
        currentPlayingBeat: -1
      };
    case PLAY:
      playPattern(state.beats);

      return {
        ...state,
        isPlaying: true
      };
    case TOGGLE_BEAT_ON:
      beats = state.beats;
      beat = state.beats[action.beatId];

      beat.on = typeof action.toggle === 'boolean' ? action.toggle : !beat.on;

      return {
        ...state,
        beats
      };
    case SET_CURRENT_PLAYING_BEAT:
      return {
        ...state,
        currentPlayingBeat: action.beatId
      };
    default:
      return state;
  }
}
