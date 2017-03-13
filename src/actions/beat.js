import { SET_CURRENT_BEAT, SET_BEAT_NOTE, TOGGLE_BEAT_ON } from '../constants';

export const setCurrentBeat = (beatId) => {
    return {
        type: SET_CURRENT_BEAT,
        beatId
    }
}

export const setBeatNote = (note) => {
    return {
        type: SET_BEAT_NOTE,
        note
    }
}

export const toggleBeatOn = (beatId, toggle) => {
    return {
        type: TOGGLE_BEAT_ON,
        beatId,
        toggle
    }
}