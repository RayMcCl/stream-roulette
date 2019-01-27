/* --- Resources --- */
import './ImageGrid.style.scss';

/** Component */
import * as React from 'react';
import { Props } from './ImageGrid.types';

/** Modules */


/** ImageGrid [ClassDescription] */
const ImageGrid : React.FunctionComponent<Props> = (props) => (
	<div className="image-grid">
		{props.children}
	</div>
);

export default ImageGrid;