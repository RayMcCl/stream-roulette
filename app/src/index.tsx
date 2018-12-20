/* --- Resources --- */
import 'bootstrap/dist/css/bootstrap.min.css';

/* --- Modules --- */

// Loads in the necessary Babel Polyfills for Browser support
import "@babel/polyfill";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'STORE/store';
import App from './app';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);