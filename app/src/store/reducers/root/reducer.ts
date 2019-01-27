/** Root Reducer */

export const reducer = (reducers) => {
	let newState;

	return function (state, action) {
		switch (action.type) {
			default:
				return reducers(state, action);
		}
	};
};