import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import studentService from './services/studentservice';
import { Card, Row, Column, Container } from './widgets';
import uniService from './services/uni-service';

export class Student extends Component {
  students = [];
  student = {};
  universities=[];
  uni={};
  render() {
    return (
      <Container>
        <Card title={this.student.name}>
        <Row><Column>
        {this.uni.name}
        </Column></Row>
      </Card></Container>
      
    )
  }
  mounted() {
    studentService.getAll().then((students) => {
      this.students = students;
      this.student = this.students.find(student=>student.id==1);
      uniService.getAll().then((universities)=>{
        this.universities = universities;
        this.uni = this.universities.find(uni=>uni.id==this.student.uni_id)
      })
      
    });
    
    
  }
}

export class StudentList extends Component {
    students = [];
  render() {
    return (
      <Container>
        <Card title="Student List">
            <Row>
              <Column width="1">ID</Column>
              <Column width="3">Name</Column>
            </Row>
            {this.students.map((student) => (
            <Row key={student.id}>
            <Column width="1">{student.id}</Column>
            <Column width="3">{student.name}</Column>
              
            
            </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    studentService.getAll().then((students) => (this.students = students));
  }
}

