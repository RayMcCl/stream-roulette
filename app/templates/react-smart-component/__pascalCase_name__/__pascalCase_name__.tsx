/* --- Resources --- */
import './{{pascalCase name}}.scss';

/** Interfaces */
import { IRootState } from 'REDUCERS/root/init';

/* --- Modules --- */
import { connect } from 'react-redux';
import * as React from 'react';

interface IReceivedProps {
	/** Received Props go here */
};

interface IStateProps {
	/** mapStateToProps values go here */
};

interface IDispatchProps {
	/** mapDispatchToProps methods go here */
};

type TProps = IStateProps & IDispatchProps & IReceivedProps;

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

const mapStateToProps = (state: IRootState): IStateProps => ({
	/** Redux Selectors for data go here */
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
	/** Redux Dispatch methods go here */
});

export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});
