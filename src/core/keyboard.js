import { store } from '../store';
import { play, stop } from '../actions/synthesizer';
import Mousetrap from 'mousetrap';

Mousetrap.bind('space', () => {
    if (store.getState().isPlaying) {
        store.dispatch(stop());
    } else {
        store.dispatch(play());
    }
});