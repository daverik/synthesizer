import { SET_CURRENT_BEAT, SET_BEAT_NOTE, TOGGLE_BEAT_ON, SET_CURRENT_PLAYING_BEAT } from '../constants';

export const setCurrentBeat = (beatId) => {
    return {
        type: SET_CURRENT_BEAT,
        beatId
    }
}

export const setCurrentPlayingBeat = (beatId) => {
    return {
        type: SET_CURRENT_PLAYING_BEAT,
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