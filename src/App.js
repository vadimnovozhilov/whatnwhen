import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { SubmitForm } from './Components/SubmitForm/SubmitForm';
import { AllItems } from './Pages/AllItems/AllItems.js';
import { ArchivedItems } from './Pages/ArchivedItems/ArchivedItems.js';
import { TodayItems } from './Pages/TodayItems/TodayItems.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #7d3cff;
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    text-align: center;
`

const StyledLi = styled.li`
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        border-bottom: 5px solid #7d3cff;
    }
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
      <Router>
        <div className="App">
        <StyledHeader>What'n'When</StyledHeader>
        <nav>
            <StyledUl>
                <StyledLi>
                  <Link to={'/'}>Everything</Link>
                </StyledLi>
                <StyledLi>
                  <Link to={'/today'}>Today</Link>
                </StyledLi>
                <StyledLi>
                  <Link to={'/archived'}>Archived</Link>
                </StyledLi>
            </StyledUl>
        </nav>
        <SubmitForm />
        <Switch>
          <Route exact path='/' component={() => <AllItems items={this.state.whats} />} />
          <Route path='/today' component={TodayItems} />
          <Route path='/archived' component={ArchivedItems} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
