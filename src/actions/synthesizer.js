import { PLAY, STOP } from '../constants';

export const play = () => {
    return { type: PLAY };
}

export const stop = () => {
    return { type: STOP };
}