import "./App.css";
import data from "./data.json";
import Board from "react-trello";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const axios = require("axios").default;
const instance = axios.create({
	baseURL: "https://sdic4g5.herokuapp.com/",
	// baseURL: "http://localhost:3001/",
});

function App() {
	const [signIn, setSignIn] = useState(false);
	const [board, setBoard] = useState({});
	const [token, setToken] = useState("");
	const userSignIn = ({ board, token }) => {
		setBoard(board);
		setToken(token);
		setSignIn(true);
	};

	return (
		<div class="grid-container">
			<Header />
			{!signIn && <Auth login={userSignIn} />}
			{signIn && <UserBoard boardData={board} userToken={token} />}
		</div>
	);
}

function Header() {
	return (
		<>
			<div class="item1">
				<div>
					<div class="content">
						<h2>GetMeWorking</h2>
						<h2>GetMeWorking</h2>
					</div>
				</div>
			</div>
		</>
	);
}

function Auth(props) {
	const [regErr, setRegErr] = useState("");
	const [logErr, setLogErr] = useState("");

	const [show, setShow] = useState(false);
	function handleClose() {
		setShow(false);
		setRegErr("");
		setUsername2("");
		setEmail2("");
		setPwd2("");
	}
	const handleShow = () => setShow(true);

	// Eugene work to handle input into console
	const [emailadd, setemailadd] = useState("");
	const [pwd, setpwd] = useState("");

	const handleChange = (event) => {
		setemailadd(event.target.value);
		console.log("value is:", event.target.value);
	};
	const handleChange1 = (event) => {
		setpwd(event.target.value);
		console.log("value is:", event.target.value);
	};
	const wannalogin = (event) => {
		event.preventDefault();
		console.log("I'm working");
		// 👇️ value of input field
		console.log("handleClick 👉️", emailadd);
		console.log("handleClick 👉️", pwd);
		instance
			.post("/login", {
				password: pwd,
				email: emailadd,
			})
			.then(function (response) {
				console.log(response.data.data);
				console.log("token", response.data.data.token);
				props.login({ board: response.data.data.board, token: response.data.data.token });
			})
			.catch(function (error) {
				console.log(error.response.data.message);
				setLogErr(error.response.data.message);
			});
	};

	// Eugene work to handle registration
	const [username2, setUsername2] = useState("");
	const [email2, setEmail2] = useState("");
	const [pwd2, setPwd2] = useState("");

	const handleChange2 = (event) => {
		setUsername2(event.target.value);
		console.log("username is:", event.target.value);
	};
	const handleChange3 = (event) => {
		setEmail2(event.target.value);
		console.log("email is:", event.target.value);
	};
	const handleChange4 = (event) => {
		setPwd2(event.target.value);
		console.log("password is:", event.target.value);
	};
	const wannaregister = (event) => {
		event.preventDefault();
		console.log("I'm working");
		// 👇️ value of input field
		console.log("username 👉️", username2);
		console.log("email 👉️", email2);
		console.log("pwd2 👉️", pwd2);
		instance
			.post("/register", {
				username: username2,
				password: pwd2,
				email: email2,
			})
			.then(function (response) {
				console.log(response);
				handleClose();
			})
			.catch(function (error) {
				console.log(error.response.data.message);
				setRegErr(error.response.data.message);
			});
	};

	return (
		<>
			<div class="item2">
				<table>
					<tr>
						<td className="Register">
							<Form.Floating>
								<Form.Control
									id="floatingInputCustom"
									type="email"
									onChange={handleChange}
									placeholder="name@example.com"
									style={{ width: "100%", height: "auto" }}
								/>
								<label htmlFor="floatingInputCustom">Email address</label>
							</Form.Floating>
						</td>
					</tr>
					<tr>
						<td className="Login">
							<Form.Floating>
								<Form.Control
									id="floatingPasswordCustom"
									type="password"
									onChange={handleChange1}
									placeholder="Password"
									style={{ width: "100%", height: "auto" }}
								/>
								<label htmlFor="floatingPasswordCustom">Password</label>
							</Form.Floating>
							<span style={{ color: "red" }}>{logErr}</span>
						</td>
					</tr>
					<tr>
						<td>
							{/* Login trigger button */}
							<Button variant="info" type="login" size="l" onClick={wannalogin}>
								Log in
							</Button>
						</td>
					</tr>
					<tr>
						<td>
							{/* Register trigger button */}
							<Button variant="warning" type="Register" size="l" onClick={handleShow}>
								Register
							</Button>
							<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
								<Modal.Header closeButton>
									<Modal.Title>Register</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form>
										<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
											<Form.Label column sm={2}>
												Username
											</Form.Label>
											<Col sm={8}>
												<Form.Control
													type="username"
													placeholder="Username"
													onChange={handleChange2}
													autoFocus
												/>
											</Col>
										</Form.Group>

										<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												Email
											</Form.Label>
											<Col sm={8}>
												<Form.Control type="email" placeholder="Email" onChange={handleChange3} />
											</Col>
										</Form.Group>

										<Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
											<Form.Label column sm={2}>
												Password
											</Form.Label>
											<Col sm={8}>
												<Form.Control
													type="password"
													placeholder="Password"
													onChange={handleChange4}
												/>
												<Form.Text id="passwordHelpBlock" muted>
													Your password must be 8-20 characters long, contain letters and numbers,
													and must not contain spaces, special characters, or emoji.
												</Form.Text>
											</Col>
											<span style={{ color: "red" }}>{regErr}</span>
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Cancel
									</Button>
									<Button variant="primary" onClick={wannaregister}>
										Sign Up
									</Button>
								</Modal.Footer>
							</Modal>
						</td>
					</tr>
				</table>
			</div>
		</>
	);
}

function UserBoard(props) {
	function handleDataChange(newData) {
		console.log(props.userToken, newData);
		instance
			.put("/board", {
				board: newData,
				token: props.userToken,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error.response.data.message);
			});
	}
	return (
		<>
			<div class="item3">
				<Board
					data={props.boardData}
					draggable
					editable
					addCardTitle="Add Item"
					onDataChange={handleDataChange}
				/>
			</div>{" "}
		</>
	);
}

export default App;
