import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react-simplified';
import studentService from './services/studentservice';
import { Card, Row, Column, Container, Heading, Hero } from './widgets';


export class Home extends Component {
    render() {
        return (
            <Container>
               <div
                className='hero-image vh-100'
               >hello</div>
               
                <div className='text-center hero-text'>
                    <h3>Find students, universities and degrees right here in the UniOnline portal</h3>
                </div>
            </Container>
        )
    }
}

