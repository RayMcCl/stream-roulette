/* --- Resources --- */
import './Header.style.scss';

/** Component */
import * as React from 'react';
import { Props } from './Header.types';

/** Modules */
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
	DropdownItem
} from 'reactstrap';
 
/** Header [ClassDescription] */
const Header : React.FunctionComponent<Props> = (props) => (
	<div className="header">
		<Navbar expand="md">
			<NavbarBrand href="/">Stream Roulette</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse navbar>
				<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/components/">Streams</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/reactstrap/reactstrap">Categories</NavLink>
				</NavItem>
				{/* <NavItem>
					<NavLink href="https://github.com/reactstrap/reactstrap">Sign In</NavLink>
				</NavItem> */}
				<UncontrolledDropdown nav inNavbar>
					<DropdownToggle nav caret>
						raymccl
					</DropdownToggle>
					<DropdownMenu right>
						<DropdownItem>
							Settings
						</DropdownItem>
						<DropdownItem>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
	</div>
);

export default Header;