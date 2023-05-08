import React, { useState } from 'react';

import { Header, AddModal, TotalTable, LineContainer } from './components';
import './App.css';

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);

  return (
    <div className="App">
      <div className="grid-container">
        <div>
          <Header handleAdd={openModal} />
          <LineContainer openModal={openModal} />
        </div>
      </div>
      <TotalTable />
      {modal && <AddModal closeModal={() => setModal(false)} />}
    </div>
  );
}

export default App;
