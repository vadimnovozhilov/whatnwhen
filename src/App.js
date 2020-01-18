import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { WhatList } from './Components/WhatList/WhatList.js';
import { Navbar } from './Components/Navbar/Navbar';
import { SubmitForm } from './Components/SubmitForm/SubmitForm';

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #7d3cff;
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      whats: [
        {
          id: 1,
          title: 'First',
          date: 'Now'
        },
        {
          id: 2,
          title: 'Second',
          date: 'Today'
        },
        {
          id: 3,
          title: 'Third',
          date: 'Yesterday'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <StyledHeader>What'n'When</StyledHeader>
        <Navbar />
        <SubmitForm />
        <WhatList items={this.state.whats} />
      </div>
    );
  }
}

export default App;
