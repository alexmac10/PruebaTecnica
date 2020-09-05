import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Sliders } from 'react-bootstrap-icons';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const ButtonOrder = () => (
	<div>
		<Button size="sm" variant="light" className="d-md-none">
			<Sliders size={14} />
		</Button>
		<Dropdown className="d-none d-md-block">
			<Dropdown.Toggle variant="light">
				<Sliders size={14} />
				<span> Ordenar</span>
			</Dropdown.Toggle>
			<DropdownMenu>
				<Dropdown.Item>Tareas Completadas</Dropdown.Item>
				<Dropdown.Item>Tareas Cortas</Dropdown.Item>
				<Dropdown.Item>Tareas Medias</Dropdown.Item>
				<Dropdown.Item>Tareas Largas</Dropdown.Item>
			</DropdownMenu>
		</Dropdown>
	</div>
);

export default ButtonOrder;
