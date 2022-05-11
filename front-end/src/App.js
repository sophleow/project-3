import logo from './logo.svg';
import './App.css';

import data from "./data.json";
import Board from 'react-trello'

function App() {
  return (
    <div className="App">
      <h1>Your Work Progression</h1>
      <Board
        data={data}
        draggable
        editable
        canAddLanes
        addLaneTitle="Add Column"
        addCardTitle="Add Item"
      />
    </div>
  );
}

export default App;
