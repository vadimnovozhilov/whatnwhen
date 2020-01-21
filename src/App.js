import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { SubmitForm } from './Components/SubmitForm/SubmitForm';
import { AllItems } from './Pages/AllItems/AllItems.js';
import { ArchivedItems } from './Pages/ArchivedItems/ArchivedItems.js';
import { TodayItems } from './Pages/TodayItems/TodayItems.js';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
    }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    border-bottom: 5px solid #7d3cff;
  }
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      whats: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor((Math.random() * 100) + 1);
    const title = e.target.title.value;
    const date = e.target.date.value;
    const formattedDate = moment(date).format('MMMM Do YYYY');
    const isActive = true;
    if (title === '' || date === '') {
      toast.error("You should fill both title and date fields");
    } else {
      const item = { id, title, formattedDate, isActive };
      const items = [...this.state.whats, item];
      this.setState({whats: items});
      localStorage.setItem('whats', JSON.stringify(this.state.whats));
    }
  }

  handleArchive = id => {
    this.setState(prevState => ({
      whats: prevState.whats.map(
        el => el.id === id? { ...el, isActive: false }: el
      )
    }))
  }

  componentDidMount() {
    const dataFromStorage = JSON.parse(localStorage.getItem("whats"));
    if(!dataFromStorage) {
      this.setState({ whats: [] });
    } else {
      this.setState({ whats: dataFromStorage });
    }
  }
  
  

  render() {
    const archivedWhats = this.state.whats.filter(item => item.isActive === false);
    const activeItems = this.state.whats.filter(item => item.isActive === true);
    return (
      <Router>
        <div className="App">
        <ToastContainer />
        <StyledHeader>What'n'When</StyledHeader>
        <nav>
            <StyledUl>
                <StyledLi>
                  <StyledLink exact to={'/'} activeClassName="active">Everything</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink to={'/today'} activeClassName="active">Today</StyledLink>
                </StyledLi>
                <StyledLi>
                  <StyledLink to={'/archived'} activeClassName="active">Archived</StyledLink>
                </StyledLi>
            </StyledUl>
        </nav>
        <SubmitForm handleSubmit={this.handleSubmit} />
        <Switch>
          <Route exact path='/' component={() => <AllItems items={activeItems} handleArchive={this.handleArchive} />} />
          <Route path='/today' component={TodayItems} />
          <Route path='/archived' component={() => <AllItems items={archivedWhats} />} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
