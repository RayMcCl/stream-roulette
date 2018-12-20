/* --- Resources --- */
import './Stream.scss';

/* --- Modules --- */
import { connect } from 'react-redux';
import {
	Row
} from 'reactstrap';

import * as React from 'react';
import { RouteProps } from 'react-router';
import Player from 'COMPONENTS/Player/Player';
import StreamControls from 'COMPONENTS/StreamControls/StreamControls';

import streamsData from 'TREDUCERS/streams/data';

interface IReceivedProps extends RouteProps {
	/** Received Props go here */
};

interface IStateProps {
	/** mapStateToProps values go here */
	streams: State.IStreamsState,
	activeStreams: number
};

interface IDispatchProps {
	/** mapDispatchToProps methods go here */
};

type TProps = IStateProps & IDispatchProps & IReceivedProps;

/** [ClassDescription] */
class Stream extends React.Component<TProps, {}> {
	render () {
		const activeStream = this.props.streams[this.props.activeStreams];

		return (
			<Row>
				<Player stream={activeStream}/>
				<StreamControls />
			</Row>
		);
	}
}

const mapStateToProps = (state: State.IRoot): IStateProps => ({
	/** Redux Selectors for data go here */
	streams: streamsData,
	activeStreams: 0
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
	/** Redux Dispatch methods go here */
	streams: streamsData,
	activeStream: 0
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
