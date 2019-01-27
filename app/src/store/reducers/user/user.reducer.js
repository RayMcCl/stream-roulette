import {
    SET_USER_STATE
} from './user.actions';

export default (state, action) => {
    let newState = {};

    switch (action.type) {
        case SET_USER_STATE: {
            newState = Object.assign({}, state, action.payload);
            break;
        }
        default: {
            newState = state;
        }
    }

    return newState;
};
