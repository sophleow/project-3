import logo from "./logo.svg";
import "./App.css";

import data from "./data.json";
import Board from "react-trello";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import Button from "react-bootstrap/Button";

const handleDataChange = (newData) => {
	console.log(newData);
};

function App() {
	return (
		<div className="App">
			<h1>Your Work Progression</h1>

			<Board
				data={data}
				onDataChange={handleDataChange}
				draggable
				editable
				addCardTitle="Add Item"
			/>
		</div>
	);
}

export default App;
