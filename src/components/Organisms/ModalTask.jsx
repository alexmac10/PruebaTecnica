import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import FormNewTask from '../Molecules/FormNewTask';
import { Plus } from 'react-bootstrap-icons';

const ModalTask = (props) => {

    const [show, setShow] = useState(false);
    const [dataNewTask, setDataTask] = useState({
        name: '',
        description: '',
        typeTime: '',
        setTime: '',
        customTime: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	const handlerSaveTask = () => {
		console.log(dataNewTask);
	}

    return(
        <>

        {
            props.movil ? (
            <Button className="btn-fab position-fixed d-md-none" variant="info" size="sm" onClick={handleShow}>
		    	<Plus size={24} />
		    </Button>
            ):(
            <Button size="sm" onClick={handleShow}>
                    <Plus size={18}/> Agregar Tarea
            </Button>

            )
        }
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva Tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormNewTask data={dataNewTask} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handlerSaveTask}>
                    Crear Tarea
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalTask;