import {
    SET_STREAMS_STATE
} from './streams.actions';

export default (state, action) => {
    let newState = {};

    switch (action.type) {
        case SET_STREAMS_STATE: {
            newState = Object.assign({}, state, action.payload);
            break;
        }
        default: {
            newState = state;
        }
    }

    return newState;
};
