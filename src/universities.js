import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uniservice';
import studentService from './services/studentservice';
import { Card, Row, Column, Container, Divider } from './widgets';
import { NavLink} from 'react-router-dom';

export class UniList extends Component {
    universities = [];
  render() {
    return (
      <Container>
            <Card title="University List">
                <Row>
                   
                    <Column>Name</Column>
                </Row>
            {this.universities.map((university) => (
                <Row key={university.id}>
                    
                    <Column> <NavLink to={'/universities/'+university.id}>{university.name}</NavLink></Column>
                </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    uniService.getAll().then((universities)=>{this.universities=universities})
  }
}

export class Uni extends Component {
  universities=[];
  students=[];
  uni={};
  render() {
    return (
      <Container>
        <Card>
        <Row>
        <Column width="1">
          <img src={this.uni.logo} className='img-fluid' />
        </Column>
        <Column width="11">
          <Row><h3 className='align-text-bottom'>{this.uni.name}</h3>
            <Column>Campus: {this.uni.campus}</Column>
          </Row> 
        </Column>
        </Row>
        <Divider />
        <Row><Column>
        Students at this university:
        </Column></Row>
        {this.students.map((student) => (
            <Row key={student.id}>
            <Column> <NavLink to={'/students/'+student.id}>{student.name}</NavLink></Column>
            </Row>
          ))}
        </Card>
      </Container>
      
    )
  }
  mounted() {
      uniService.getAll().then((universities)=>{
        this.universities = universities;
        let w = window.location.hash;
        let id = w.match(/\d+/)[0] 
        this.uni = this.universities.find(uni=>uni.id==id)
      })
      studentService.getAll().then((students)=>{
        this.students=students.filter((student)=>student.uni_id==this.uni.id)
        console.log(this.students)
      })
    
    
  }
}