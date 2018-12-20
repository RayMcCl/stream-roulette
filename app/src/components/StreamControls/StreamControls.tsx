/* --- Resources --- */
import './StreamControls.scss';

/** Interfaces */

/* --- Modules --- */
import { connect } from 'react-redux';
import * as React from 'react';
import {
	Container,
	Col,
	Row,
	Button
} from 'reactstrap';

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
class StreamControls extends React.Component<TProps, {}> {
	render () {
		return (
			<Container fluid={true} className="ml-auto">
				<Row>
					<Col>
						<Button>Previous Stream</Button>
					</Col>
					<Col className="textRight">
						<Button>Next Stream</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: State.IRoot): IStateProps => ({
	/** Redux Selectors for data go here */
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
	/** Redux Dispatch methods go here */
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamControls);
