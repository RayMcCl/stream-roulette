import * as React from 'react';

// Use HashRouter if the application will be running locally
// Use BrowserRouter if the application will be run from a server
import {
	BrowserRouter as Router,
} from 'react-router-dom';

import 'RESOURCES/scss/global.scss';

import RouterSwitch from 'ROUTES/RouterSwitch';
import Layout from 'COMPONENTS/Layout/Layout';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout>
					<RouterSwitch />
				</Layout>
			</Router>
		);
	}
}
