// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import BasicTabs from './components/tabComponent';
import SmallTabs from './components/SmallTab';

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <BasicTabs value={value} setValue={setValue} />
          <br />
          <div className="table-board">
            <SmallTabs value={value} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
