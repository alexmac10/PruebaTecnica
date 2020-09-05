import React from 'react';
import ListTask from '../Organisms/ListTask';
import MenuMovil from '../Organisms/MenuMovil';
import { Container } from 'react-bootstrap';
import ButtonFab from '../Molecules/ButtonFab';
import MainMenu from '../Organisms/MainMenu';

const Tasks = (props) => (
	<div>
		<header>
			<MainMenu />
		</header>
		<Container className="spaceContainer position-relative">
			<ListTask />
			<ButtonFab />
		</Container>
		<footer className="d-md-none">
			<MenuMovil />
		</footer>
	</div>
);

export default Tasks;
