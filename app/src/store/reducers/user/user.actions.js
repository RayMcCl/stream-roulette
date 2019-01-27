export const SET_USER_STATE = 'USER/SetState';

/**
 * Action Creator: Sets the user state
 * 
 * @param {Object} val The object to assign the user state to
 */
export const setUserState = (val) => {
    return {
        type: SET_USER_STATE,
        payload: val
    };
}