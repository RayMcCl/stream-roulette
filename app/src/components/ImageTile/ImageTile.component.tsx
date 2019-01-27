/* --- Resources --- */
import './ImageTile.style.scss';

/** Modules */
import * as React from 'react';
import { Props } from './ImageTile.types';
import * as defaultImage from 'RESOURCES/img/critikal.png';

/** [ClassDescription] */
const ImageTile : React.FunctionComponent<Props> = (props) => (
	<div className="image-tile">
		<img src={props.src || defaultImage} alt="Image not found" className="image"></img>
	</div>
);

export default ImageTile;