/* --- Resources --- */
import './HeaderNav.scss';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button
} from 'reactstrap';
import {
	Link
} from 'react-router-dom';

/** Modules */
import * as React from 'react';

interface IReceivedProps {
	/** Received Props go here */
};

type TProps = IReceivedProps;

/** [ClassDescription] */
class HeaderNav extends React.Component<TProps, {}> {
	toggle: boolean;
	state: {
		isOpen: boolean
	};

	constructor (props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	render () {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand tag={Link} to="/">Stream Roulette</NavbarBrand>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={Link} to="/stream">Stream</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default HeaderNav;