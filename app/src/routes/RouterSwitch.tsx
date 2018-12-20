
import * as React from 'react';
import { connect } from 'react-redux';

import {
	Switch,
	Route,
	withRouter
} from 'react-router-dom';

import Routes from './routes';
import ErrorRoute from './Error/Error';
import ProtectedRoute from './ProtectedRoute';

/**
 * A switch which handles URL changes to the routes
 *
 * @param {Object} props
 */
class RouterSwitch extends React.Component<any> {
	render () {
		return (
			<Switch>
				{Routes.paths.map((route) => {
					// return route.protected ?
					// 	<ProtectedRoute
					// 		key={route.path}
					// 		authenticated={true}
					// 		auth={Routes.auth.path}
					// 		{...route}
					// 	/> :
						return <Route key={route.path} {...route} />;
				})}
				{/* <Route key={Routes.auth.path} {...Routes.auth}/> */}
				<Route component={ErrorRoute} />
			</Switch>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	};
};

export default withRouter(connect(mapStateToProps)(RouterSwitch));
