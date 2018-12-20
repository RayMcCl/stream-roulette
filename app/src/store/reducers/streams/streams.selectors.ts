/**
 * Selector: Retrieves the user's state from the global state, returns an empty object if user isn't present
 * 
 * @param {Object} state The global state
 * @returns {Object} The user state
 */
export const getStreamsState = (state) => {
    return state.streams || {};
}