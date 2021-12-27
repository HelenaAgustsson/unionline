import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uniservice';
import programService from './services/programservice'
import { Card, Row, Column, Container } from './widgets';
import { NavLink} from 'react-router-dom';

export class ProgramList extends Component {
    programs = [];
  render() {
    return (
      <Container>
            <Card title="Program List">
                <Row>
                   
                    <Column>Name</Column>
                </Row>
            {this.programs.map((program) => (
                <Row key={program.id}>
                    
                    <Column width="3"> <NavLink to={'/programs/'+program.id}>{program.name}</NavLink></Column>
                </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    programService.getAll().then((programs)=>{this.programs=programs})
  }
}

export class Program extends Component {
    programs=[];
    program={};
    render() {
      return (
        <Container>
          <Card title={this.program.name}>
          <Row><Column>
          {this.program.name}
          </Column></Row>
        </Card></Container>
        
      )
    }
    mounted() {
        programService.getAll().then((programs)=>{
          this.programs = programs;
          let w = window.location.hash;
          let id = w.match(/\d+/)[0] 
          this.program = this.programs.find(program=>program.id==id)
        })
      
      
    }
  }