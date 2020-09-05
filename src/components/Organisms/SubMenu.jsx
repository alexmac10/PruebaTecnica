import React from 'react';
import Title from '../Atoms/Title';
import { Navbar, Nav } from 'react-bootstrap';
import ModalTask from './ModalTask';

const SubMenu = () => (
	<Navbar className="border-bottom" variant="light">
		<Nav className="mr-auto">
			<Title title="Tareas sin iniciar" />
		</Nav>
		<Nav>
			<ModalTask movil={false}/>
		</Nav>
	</Navbar>
);

export default SubMenu;
