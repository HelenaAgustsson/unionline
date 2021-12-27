import ReactDOM from 'react-dom';
import * as React from 'react';
import { NavLink} from 'react-router-dom';
import { Component } from 'react-simplified';
import studentService from './services/studentservice';
import { Card, Row, Column, Container } from './widgets';
import uniService from './services/uniservice';
 




export class StudentList extends Component {
  students = [];
  universities=[];
  render() {
    return (
      <Container>
        <Card title="Student List">
            <Row>
              <Column width="3">Name</Column>
            </Row>
            {this.students.map((student) => (
            <Row key={student.id}>
            <Column width="3"> <NavLink to={'/students/'+student.id}>{student.name}</NavLink></Column>
            </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    studentService.getAll().then((students) => (this.students = students));
  }
}

export class Student extends Component {
  students = [];
  student = {};
  universities=[];
  uni={};
  
  render() {
    return (
      <Container>
        <Card>
        <Row>
          <Column width="3">
          <img src={this.student.img} className='img-fluid rounded-circle' />
          </Column>
          <Column width="3">
            <h2>{this.student.name}</h2> 
            {this.uni.name}
        </Column></Row>
      </Card></Container>
      
    )
  }
  mounted() {
    studentService.getAll().then((students) => {
      this.students = students;
      let w = window.location.hash;
      let id = parseInt(w[11])
      this.student = this.students.find(student=>student.id==id);
      uniService.getAll().then((universities)=>{
        this.universities = universities;
        this.uni = this.universities.find(uni=>uni.id==this.student.uni_id)
      })
      
    });
    
    
  }
}