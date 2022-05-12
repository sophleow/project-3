import logo from './logo.svg';
import './App.css';

import data from './data.json';
import Board from 'react-trello';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
	console.log('drag ended');
	console.log(`cardId: ${cardId}`);
	console.log(`sourceLaneId: ${sourceLaneId}`);
	console.log(`targetLaneId: ${targetLaneId}`);
};

const handleCardAdd = (card, laneId) => {
	console.log(`New card added to lane ${laneId}`);
	console.dir(card);
};

const handleCardDelete = (cardId) => {
	console.log(`Card has been deleted ${cardId}`);
};

function App() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const [user, setUser] = useState({
	// 	username: null,
	// 	email: null,
	// 	password: null,
	// });

	// const onChangeHandler = (e) => {
	// 	console.log(e.target.value);
	// 	setUser(e.target.value);
	// };

	// const onSubmitHandler = (e) => {
	// 	e.preventDefault();
	// 	const data = { ...user };

	// 	data.username = e.target.value;
	// 	data.email = e.target.value;
	// 	data.password = e.target.value;

	// 	console.log(data.username, data.email);
	// 	setUser(data);
	// };

	return (
		<div className='App'>
			<h1 className='Title'>Get Me Working</h1>

			<table>
				<tr>
					<td className='Register'>
						<Form.Floating>
							<Form.Control
								id='floatingInputCustom'
								type='email'
								placeholder='name@example.com'
								style={{ width: '100%', height: '40px' }}
							/>
							<label htmlFor='floatingInputCustom'>Email address</label>
						</Form.Floating>
					</td>
					<td className='Login'>
						<Form.Floating>
							<Form.Control
								id='floatingPasswordCustom'
								type='password'
								placeholder='Password'
								style={{ width: '100%', height: '40px' }}
							/>
							<label htmlFor='floatingPasswordCustom'>Password</label>
						</Form.Floating>
					</td>
				</tr>
				<tr>
					<td>
						{/* Register trigger button */}
						<Button
							variant='warning'
							type='Register'
							size='sm'
							onClick={handleShow}
						>
							Register
						</Button>
						<Modal
							show={show}
							onHide={handleClose}
							backdrop='static'
							keyboard={false}
						>
							<Modal.Header closeButton>
								<Modal.Title>Register Page</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formHorizontalName'
									>
										<Form.Label column sm={2}>
											Username
										</Form.Label>
										<Col sm={8}>
											<Form.Control
												type='username'
												placeholder='Username'
												// onChange={onChangeHandler}
												autoFocus
											/>
										</Col>
									</Form.Group>

									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formHorizontalEmail'
									>
										<Form.Label column sm={2}>
											Email
										</Form.Label>
										<Col sm={8}>
											<Form.Control
												type='email'
												placeholder='Email'
												// onChange={onChangeHandler}
											/>
										</Col>
									</Form.Group>

									<Form.Group
										as={Row}
										className='mb-3'
										controlId='formHorizontalPassword'
									>
										<Form.Label column sm={2}>
											Password
										</Form.Label>
										<Col sm={8}>
											<Form.Control
												type='password'
												placeholder='Password'
												// onChange={onChangeHandler}
											/>
											<Form.Text id='passwordHelpBlock' muted>
												Your password must be 8-20 characters long, contain
												letters and numbers, and must not contain spaces,
												special characters, or emoji.
											</Form.Text>
										</Col>
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant='secondary' onClick={handleClose}>
									Cancel
								</Button>
								<Button variant='primary'>Create New</Button>
							</Modal.Footer>
						</Modal>
					</td>
					<td>
						{/* Login trigger button */}
						<Button variant='info' type='login' size='sm'>
							Login
						</Button>
					</td>
				</tr>
			</table>

			<div className='Board'>
				<Board
					data={data}
					onCardAdd={handleCardAdd}
					onCardDelete={handleCardDelete}
					handleDragEnd={handleDragEnd}
					draggable
					editable
					addCardTitle='Add Item'
				/>
			</div>
		</div>
	);
}

export default App;
