import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { PlayFill, StopFill, ArrowClockwise, FlagFill } from 'react-bootstrap-icons';

const ItemListTask = (props) => (
	<ListGroup.Item>
		<Row>
			<Col xs={5} className='text-left'>Tarea 1</Col>
			<Col xs={3} className='text-center'>00:00:00</Col>
			<Col xs={4} className='text-right'>
				<PlayFill color="green" size={24}/>
			</Col>
			<Col xs={4} className="d-none text-right">
				<FlagFill color="blue" size={24}/>
				<ArrowClockwise color="royalblue" size={24}/>
				<StopFill color="red" size={24} />
			</Col>
		</Row>
	</ListGroup.Item>
);

export default ItemListTask;
