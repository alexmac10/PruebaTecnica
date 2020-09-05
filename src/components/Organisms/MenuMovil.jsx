import React from 'react';
import { Navbar } from 'react-bootstrap';
import IconTask from '../Molecules/IconTask';
import { NavLink } from 'react-router-dom';
import IconGraph from '../Molecules/IconGraph';
import IconConfig from '../Molecules/IconConfig';

const MenuMovil = (props) => (
	<Navbar fixed="bottom" bg="primary" variant="dark" className="d-flex justify-content-between">
		<NavLink to="/" activeClassName="activo">
			<IconTask />
		</NavLink>
		<NavLink to="/" activeClassName="activo">
			<IconGraph />
		</NavLink>
		<NavLink to="/" activeClassName="activo">
			<IconConfig />
		</NavLink>
	</Navbar>
);

export default MenuMovil;
