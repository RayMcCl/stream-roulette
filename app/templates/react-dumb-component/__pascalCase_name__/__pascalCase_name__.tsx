/* --- Resources --- */
import './{{pascalCase name}}.scss';

/** Modules */
import * as React from 'react';

interface IReceivedProps {
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