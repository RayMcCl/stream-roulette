/* --- Resources --- */
import './{{pascalCase name}}.scss';

/** Interfaces */
import { IRootState } from 'REDUCERS/root/init';

/* --- Modules --- */
import * as React from 'react';
import { RouteProps } from 'react-router';

interface IReceivedProps extends RouteProps {
	/** Received Props go here */
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class {{pascalCase name}} extends React.Component<TProps, {}> {
	render () {
		return (
			<div>
				<h1>Hello World</h1> 
			</div>
		);
	}
}

export default {{pascalCase name}};