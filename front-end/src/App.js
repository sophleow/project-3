import './App.css';

import data from "./data.json";
import Board from 'react-trello';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
}

const handleCardAdd = (card, laneId) => {
  console.log(`New card added to lane ${laneId}`)
  console.dir(card)
}

const handleCardDelete = (cardId) => {
  console.log(`Card has been deleted ${cardId}`)
}

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Eugene work to handle input into console
  const [emailadd, setemailadd] = useState('');
  const [pwd, setpwd] = useState('');

  const handleChange = event => {

    setemailadd(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleChange1 = event => {

    setpwd(event.target.value);
    console.log('value is:', event.target.value);
  };
  const wannalogin = event => {
    event.preventDefault();
    console.log("I'm working");
    // 👇️ value of input field
    console.log('handleClick 👉️', emailadd);
    console.log('handleClick 👉️', pwd);
  };

  // Eugene work to handle registration
  const [username2, setUsername2] = useState('');
  const [email2, setEmail2] = useState('');
  const [pwd2, setPwd2] = useState('');

  const handleChange2 = event => {

    setUsername2(event.target.value);
    console.log('username is:', event.target.value);
  };
  const handleChange3 = event => {

    setEmail2(event.target.value);
    console.log('email is:', event.target.value);
  };
  const handleChange4 = event => {

    setPwd2(event.target.value);
    console.log('password is:', event.target.value);
  };
  const wannaregister = event => {
    event.preventDefault();
    console.log("I'm working");
    // 👇️ value of input field
    console.log('username 👉️', username2);
    console.log('email 👉️', email2);
    console.log('pwd2 👉️', pwd2);
  };

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
    <div class="grid-container">
      <div class="item1">
        <div>
          <div class="content">
            <h2>GetMeWorking</h2>
            <h2>GetMeWorking</h2>
          </div>
        </div>
      </div>
      {/* sophie's code start here , musa need you to help to do the registration/login properly*/}
      <div class="item2">
        <table>
          <tr>
            <td className='Register'>
              <Form.Floating>
                <Form.Control
                  id='floatingInputCustom'
                  type='email'
                  onChange={handleChange}
                  placeholder='name@example.com'
                  style={{ width: '100%', height: 'auto' }}
                />
                <label htmlFor='floatingInputCustom'>Email address</label>
              </Form.Floating>
            </td>
          </tr>
          <tr>
            <td className='Login'>
              <Form.Floating>
                <Form.Control
                  id='floatingPasswordCustom'
                  type='password'
                  onChange={handleChange1}
                  placeholder='Password'
                  style={{ width: '100%', height: 'auto' }}
                />
                <label htmlFor='floatingPasswordCustom'>Password</label>
              </Form.Floating>
            </td>
          </tr>
          <tr>
            <td>
              {/* Login trigger button */}
              <Button variant='info' type='login' size='l' onClick={wannalogin}>
                Log in
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              {/* Register trigger button */}
              <Button
                variant='warning'
                type='Register'
                size='l'
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
                        Name :
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type='username'
                          placeholder='Username'
                          onChange={handleChange2}
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
                          onChange={handleChange3}
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
                          onChange={handleChange4}
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
                  <Button variant='primary' onClick={wannaregister}>Create New</Button>
                </Modal.Footer>
              </Modal>
            </td>
          </tr>
        </table>
      </div>
      <div class="item3">
        <Board
          data={data}
          onCardAdd={handleCardAdd}
          onCardDelete={handleCardDelete}
          handleDragEnd={handleDragEnd}
          draggable
          editable
          addCardTitle="Add Item"
        />
      </div>
    </div >
  );
}

export default App;
