import logo from './logo.svg';
import './App.css';

import data from "./data.json";
import Board from 'react-trello';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';

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
  return (
    <div>
      <h1> </h1>
      <div>
        <div class="content">
          <h2>WorkProgress</h2>
          <h2>WorkProgress</h2>
        </div>
      </div>

      <Board
        data={data}
        onCardAdd={handleCardAdd}
        onCardDelete={handleCardDelete}
        handleDragEnd={handleDragEnd}
        draggable
        editable
        addCardTitle="Add Item"
      />

    </div >
  );
}

export default App;
