import React from 'react';
import { GearFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const IconConfig = () => (
	<>
		<Button size="sm">
			<GearFill size={24} className='watermark'/>
			<p className="iconText d-none d-none">Configuración</p>
		</Button>
	</>
);

export default IconConfig;
