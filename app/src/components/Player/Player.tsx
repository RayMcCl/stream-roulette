/* --- Resources --- */
import './Player.scss';

/** Modules */
import * as React from 'react';
import TwitchPlayer from '../TwitchPlayer/TwitchPlayer';

interface IReceivedProps {
	/** Received Props go here */
	stream: IStream;
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class Player extends React.Component<TProps, {}> {
	render () {
		return (
			<div className="player col-12">
				<TwitchPlayer></TwitchPlayer>
			</div>
		);
	}
}

export default Player;