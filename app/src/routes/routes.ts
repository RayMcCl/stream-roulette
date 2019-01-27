// import Home from './Home/Home';
// import User from './User/User';
import { Component } from 'react';
import { ConnectedComponentClass } from 'react-redux';
// import Stream from './Stream/Stream';

export interface IRoutes {
	auth?: IRoute,
	error?: Component,
	paths: Array<IRoute>
};

export interface IRoute {
	path: string;
	exact?: boolean;
	component: Component | ConnectedComponentClass<any, any>,
	protected: boolean
};

/**
 * The complete list of routes available within the SPA
 */
const routes: IRoutes = {
	paths: [
		// {
		// 	path: '/',
		// 	exact: true,
		// 	component: Home,
		// 	protected: false
		// },
		// {
		// 	path: '/user',
		// 	component: User,
		// 	protected: true
		// },
		// {
		// 	path: '/stream',
		// 	component: Stream,
		// 	protected: false
		// }
	]
};

export default routes;