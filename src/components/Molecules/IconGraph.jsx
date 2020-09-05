import React from 'react';
import { BarChartFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const IconGraph = () => (
	<div>
		<Button size="sm">
			<BarChartFill size={24} className='watermark'/>
			<p className="iconText d-none">Gráfica</p>
		</Button>
	</div>
);

export default IconGraph;
