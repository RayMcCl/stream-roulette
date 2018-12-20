/* --- Resources --- */
import './Home.scss';

/** Interfaces */
// import { IRootState } from 'REDUCERS/root/init';

/* --- Modules --- */
import { connect } from 'react-redux';
import {
	Container,
	Row
} from 'reactstrap';

import * as React from 'react';
import { RouteProps } from 'react-router';
import ImageTile from 'COMPONENTS/ImageTile/ImageTile';
import streams from 'TREDUCERS/streams/data';
import Player from 'COMPONENTS/Player/Player';

interface IReceivedProps extends RouteProps {
	/** Received Props go here */
}

interface IStateProps {
	/** mapStateToProps values go here */
	streams: State.IStreamsState
}

interface IDispatchProps {
	/** mapDispatchToProps methods go here */
}

type TProps = IStateProps & IDispatchProps & IReceivedProps;

/** [ClassDescription] */
class Home extends React.Component<TProps, {}> {

	constructor(props: TProps) {
		super(props);
	}

	render () {
		const streamsDOM = streams.map((stream) => <ImageTile image={stream.screenshots[0]} title={stream.name} imageSrc={stream.screenshots[0].path} titleRoute={stream.type} imageRoute={'' + stream.id} />)

		return (
			<div>
				<Container>
					<Row>
						{streamsDOM}
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = (state): IStateProps => ({
	/** Redux Selectors for data go here */
	streams
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
	/** Redux Dispatch methods go here */
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
