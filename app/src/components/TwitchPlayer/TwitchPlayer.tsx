/* --- Resources --- */
import './TwitchPlayer.scss';

/** Modules */
import * as React from 'react';

const Twitch = window.Twitch;

interface IReceivedProps {
	/** Received Props go here */
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class TwitchPlayer extends React.Component<TProps, {}> {

	componentDidMount () {
		/** Fetches the embeded player and begins connection to stream */
		const embed = new Twitch.Embed("twitch-embeded", {
			width: 854,
			height: 480,
			channel: "moistcr1tikal",
			layout: "video",
			autoplay: false
		});

		/** Autoplays the stream once the player loads */
		embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
			var player = embed.getPlayer();
			player.play();
		});
	}

	render () {
		const player = <div id="twitch-embeded"></div>;

		return (
			<div id="twitch-player">
				{player}
			</div>
		);
	}
}

export default TwitchPlayer;