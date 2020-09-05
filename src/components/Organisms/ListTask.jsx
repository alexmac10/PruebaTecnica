import React from 'react';
import ItemListTask from '../Molecules/ItemListTask';
import { ListGroup, Row, Col, Card } from 'react-bootstrap';
import SubMenu from './SubMenu';

const array = Array(25).fill('');

const ListTask = (props) => {
	return (
		<Row>
			<Col xs={12} className="d-none d-md-block">
				<Card>
					<Card.Body className="overflow-auto">
						<Card.Title className="border-bottom">
							<SubMenu />
						</Card.Title>
						<ListGroup>{array.map((item) => <ItemListTask key={(Math.random()*10)} />)}</ListGroup>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} className="d-sm-block d-md-none">
				<ListGroup>{array.map((item) => <ItemListTask key={(Math.random()*10)}/>)}</ListGroup>
			</Col>			
		</Row>
	);
};

export default ListTask;
