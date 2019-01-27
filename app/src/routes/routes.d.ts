import { Component } from 'react';
import { ConnectedComponentClass } from 'react-redux';
export interface IRoutes {
    auth?: IRoute;
    error?: Component;
    paths: Array<IRoute>;
}
export interface IRoute {
    path: string;
    exact?: boolean;
    component: Component | ConnectedComponentClass<any, any>;
    protected: boolean;
}
/**
 * The complete list of routes available within the SPA
 */
declare const routes: IRoutes;
export default routes;
