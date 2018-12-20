export const SET_STREAMS_STATE = 'USER/SetState';

/**
 * Action Creator: Sets the streams state
 * 
 * @param {Object} val The object to assign the streams state to
 */
export const setStreamsState = (val) => {
    return {
        type: SET_STREAMS_STATE,
        payload: val
    };
}