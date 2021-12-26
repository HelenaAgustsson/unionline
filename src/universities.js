import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uni-service';
import { Card, Row, Column, Container } from './widgets';

class UniList extends Component {
    universities = [];
  render() {
    return (
      <Container>
            <Card title="University List">
                <Row>
                    <Column width="1">ID</Column>
                    <Column width="3">Name</Column>
                </Row>
            {this.universities.map((university) => (
                <Row key={university.id}>
                    <Column width="1">{university.id}</Column>
                    <Column width="3">{university.name}</Column>
                </Row>
          ))}</Card>
          </Container>
      
    );
  }
  mounted() {
    uniService.getAll().then((universities)=>{this.universities=universities})
  }
}

export default UniList;