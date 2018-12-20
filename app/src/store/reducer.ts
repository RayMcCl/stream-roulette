import { combineReducers } from 'redux';

// Root Reducer
import { reducer as rootReducer } from './reducers/root/reducer';

// Additional Reducers
// import { reducer as userReducer } from './reducers/user/generators';

// Combines the provided reducers
const REDUCERS = combineReducers({
	// userReducer
});

// Exports the combined reducers as substates of the root reducer
export default rootReducer;