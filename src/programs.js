import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uniservice';
import programService from './services/programservice'
import { Card, Row, Column, Container } from './widgets';
import { NavLink} from 'react-router-dom';

export class ProgramList extends Component {
    universities = [];
  render() {
    return (
      <Container>
            <Card title="University List">
                <Row>
                   
                    <Column width="3">Name</Column>
                </Row>
            {this.universities.map((university) => (
                <Row key={university.id}>
                    
                    <Column width="3"> <NavLink to={'/universities/'+university.id}>{university.name}</NavLink></Column>
                </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    programService.getAll().then((universities)=>{this.universities=universities})
  }
}