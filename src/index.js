import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Routes, Route, Router } from 'react-router-dom';
import './index.css';
import App from './App';
import{ StudentList, Student} from './Students';
import { Component } from 'react-simplified';
import UniList from './universities';
import { Home } from './Home';
import { Heading, Container } from './widgets';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Menu extends React.Component {
  render() {
    return (
      <Container>
        <NavLink to="/" activeStyle={{ color: 'darkblue' }}>
          Home
        </NavLink>{' '}
        <NavLink to="/students" activeStyle={{ color: 'darkblue' }}>
          Students
        </NavLink>{' '}
        <NavLink to="/universities" activeStyle={{ color: 'darkblue' }}>
          Programs
        </NavLink>{' '}
      </Container>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <Heading />
    <Menu />
    <Routes>
    <Route path="/" element={<Home />} ></ Route>
    <Route exact path="/students" element={<StudentList />} ></Route>
    
    <Route exact path="/students/:id" element={<Student />} ></Route>
    <Route path="/universities" element={<UniList />} ></Route>
    </Routes>
    
  </HashRouter>,
    
  
  document.getElementById('root')
);

//reportWebVitals();
