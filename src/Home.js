import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import studentService from './services/studentservice';
import { Card, Row, Column, Container, Heading } from './widgets';

export class Home extends Component {
    render() {
        return (
            <Container>
                <Card title="Find students, universities and degrees right here in the StudAdm portal"></Card>
            </Container>
        )
    }
}