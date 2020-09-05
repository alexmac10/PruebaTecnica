import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';


const FormNewTask = (props) => {

	const [show, setShow] = useState(false);

	const handlerChange = event => {
		let { name, value } = event.target;
		props.data[name] = value;
	}

	const handlerSelectTime = event => {
		let optionSelect = event.target.value;
		let setTime = '';
		let checked = false;

		handlerChange(event);

		switch (optionSelect) {
			case '1':
				setTime = '00:30:00';
				break;
			case '2':
				setTime = '00:45:00';
				break;
			case '3':
				setTime = '01:00:00';
				break;
			case '4':
				setTime = '00:00:00';
				checked = true;
				break;
			default:
				break;
		}

		props.data.setTime= setTime;
		setShow(checked);
	}

	return (
		<Form>
			<Form.Group>
				<Form.Label>Nombre de la tarea</Form.Label>
				<Form.Control
					type="text"
					placeholder="Nombre de la tarea"
					name="name"
					onChange={handlerChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Descripción</Form.Label>
				<Form.Control as="textarea" rows="3" name="description" onChange={handlerChange} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Duración</Form.Label>
				<Form.Control as="select" name="typeTime" onChange={handlerSelectTime}>
					<option value="">Seleccionar</option>
					<option value="1">Corto</option>
					<option value="2">Medio</option>
					<option value="3">Largo</option>
					<option value="4">Personalizado</option>
				</Form.Control>
			</Form.Group>
			<Form.Group>
			{show ? (
				<>
				<Form.Label>Establecer el tiempo</Form.Label>
				<MaskedTextBoxComponent mask={'00:00:00'} name="customTime" onChange={handlerChange}/>
				</>
			) : ('')}
			</Form.Group>
			<Form.Group></Form.Group>
		</Form>
	);
}

export default FormNewTask;
