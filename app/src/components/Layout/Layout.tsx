/* --- Resources --- */
import './Layout.scss';
import {
	Container
} from 'reactstrap';

import HeaderNav from '../HeaderNav/HeaderNav';

/** Modules */
import * as React from 'react';

interface IReceivedProps {
	/** Received Props go here */
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class Layout extends React.Component<TProps, {}> {
	render () {
		return (
			<Container className="layout" fluid={true} noGutters={true}>
				<HeaderNav/>
				{this.props.children}
			</Container>
		);
	}
}

export default Layout;