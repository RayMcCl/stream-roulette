import * as React from 'react';

// Use HashRouter if the application will be running locally
// Use BrowserRouter if the application will be run from a server
import {
	BrowserRouter as Router,
} from 'react-router-dom';

import 'RESOURCES/scss/global.scss';

// import RouterSwitch from 'ROUTES/RouterSwitch';
import Layout from 'COMPONENTS/Layout/Layout.component';
import ImageTile from 'COMPONENTS/ImageTile/ImageTile.component';
import ImageGrid from 'COMPONENTS/ImageGrid/ImageGrid.component';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout>
					<ImageGrid>
						<ImageTile/>
						<ImageTile src="https://static-cdn.jtvnw.net/ttv-boxart/Resident%20Evil%202-85x113.jpg" />
					</ImageGrid>
				</Layout>
			</Router>
		);
	}
}
