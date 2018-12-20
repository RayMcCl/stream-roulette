/* --- Resources --- */
import './ImageTile.scss';

/** Modules */
import {
	Col
} from 'reactstrap';

import * as React from 'react';

interface IReceivedProps {
	/** The tile's displayed title */
	title: string;
	/** The primary image for the tile */
	image: IScreenshot;
	/** The image src of the tile */
	imageSrc: string;
	/** The title's route */
	titleRoute: string;
	/** The tile image's route */
	imageRoute: string;
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class ImageTile extends React.Component<TProps, {}> {
	render () {
		return (
			<Col>
				<div className="tile">
					<img className="tile-background" src={this.props.imageSrc} />
					<span className="tile-title">{this.props.title}</span>
				</div>
			</Col>
		);
	}
}

export default ImageTile;