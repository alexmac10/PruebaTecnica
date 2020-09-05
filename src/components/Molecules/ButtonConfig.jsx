import React from 'react';
import { Button } from 'react-bootstrap';
import { GearFill } from 'react-bootstrap-icons';

const ButtonConfig = () => (
	<Button className="d-none d-md-block" variant="light" size="sm">
		<GearFill size={16}/>
	</Button>
);

export default ButtonConfig;
