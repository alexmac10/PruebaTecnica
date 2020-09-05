import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Title from '../Atoms/Title';
import ButtonOrder from '../Molecules/ButtonOrder';
import ButtonConfig from '../Molecules/ButtonConfig';
import ButtonGraph from '../Molecules/ButtonGraph';

const MainMenu = (props) => (
	<Navbar fixed="top" className="border-bottom" bg="light" variant="light">
		<Nav className="mr-auto">
			<Title title='Mis tareas'/>
		</Nav>
		<Nav>
			<ButtonGraph />
		</Nav>
		<ButtonOrder />
		<ButtonConfig />
	</Navbar>
);

export default MainMenu;
