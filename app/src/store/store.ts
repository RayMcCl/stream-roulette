import { createStore } from 'redux';
import Middleware from './middleware';
import Reducer from './reducer';
import Init from './init';

// Initializes the store with the provided reducer and middleware
const STORE = createStore(Reducer, Init, Middleware);

// Subscribes the handleChange method to the Store to watch changes (optional)
STORE.subscribe(handleChange);

function handleChange() {

	// Callback to handle any changes to the state
	// console.log(STORE.getState());
}

export default STORE;