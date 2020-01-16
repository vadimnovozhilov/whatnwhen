import React from 'react';
import './App.css';
import styled from 'styled-components';
import WhatList from './Components/WhatList/WhatList.js';

const StyledP = styled.p`
  text-align: center;
  font-size: 3rem;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledP>What'n'When</StyledP>
      </header>
      <WhatList />
    </div>
  );
}

export default App;
