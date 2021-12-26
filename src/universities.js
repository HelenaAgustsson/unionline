import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import uniService from './services/uni-service';
import { Card, Row, Column, Container } from './widgets';
import { NavLink} from 'react-router-dom';

export class UniList extends Component {
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
    uniService.getAll().then((universities)=>{this.universities=universities})
  }
}

export class Uni extends Component {
  universities=[];
  uni={};
  render() {
    return (
      <Container>
        <Card title={this.uni.name}>
        <Row><Column>
        {this.uni.name}
        </Column></Row>
      </Card></Container>
      
    )
  }
  mounted() {
      uniService.getAll().then((universities)=>{
        this.universities = universities;
        let w = window.location.hash;
        console.log(w[15]);
        let id = parseInt(w[15])
        this.uni = this.universities.find(uni=>uni.id==id)
      })
    
    
  }
}