/* --- Resources --- */
import './Layout.style.scss';

/** Modules */
import * as React from 'react';
import { Props } from './Layout.types';

import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

import {
	Button
} from 'reactstrap';

/** [ClassDescription] */
const Layout : React.FunctionComponent<Props> = (props) => (
	<div className="layout">
		<Header />
		{/* {props.children} */}
		<Button>Next Stream</Button>
		<Footer />
	</div>
);

export default Layout;