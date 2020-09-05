import React from 'react';
import { JournalCheck } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const IconTask = () => (
	<div>
		<Button size="sm">
			<JournalCheck size={24} />
			<p className="iconText ">Mis tareas</p>
		</Button>
	</div>
);

export default IconTask;
