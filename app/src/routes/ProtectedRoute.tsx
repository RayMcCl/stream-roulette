import * as React from 'react';
import {
	Redirect,
	Route
} from 'react-router-dom';

const ProtectedRoute = ({component: Component, authenticated, auth, ...props}) => {

	/**
	 * Reviews the authentication state and performs one of the following actions
	 * Authenticated: Displays the requested route
	 * Unauthenticated: Redirects to the login route
	 *
	 * @param {Object} props
	 */
	const checkAuthentication = ((props) => {
		if(authenticated) {
			return <Component {...props} />;
		} else {
			return (<Redirect to={{
				pathname: auth,
				state: {
					from: props.location
				}
			}}/>);
		}
	});

	return (
		<Route
			{...props}
			render={checkAuthentication}
		/>
	);
};

export default ProtectedRoute;