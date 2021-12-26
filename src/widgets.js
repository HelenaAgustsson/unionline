import * as React from 'react';
import { ReactNode, ChangeEvent } from 'react';
import { Component } from 'react-simplified';

/**
 * boostrap header
 * 
                  
 */
 export class Heading extends Component {
  render() {
    return (
      <div
        className="container text-center jumbotron my-3"
        style={
          this.props.header
            ? {
                color: '#24272bff',
                fontFamily: 'Road Rage, cursive',
                fontSize: '',
              }
            : {}
        }
      >
        {this.props.children}
        <div className="jumbotron">
          <h1 className="display-1 text-underline">UniOnline</h1>
          <h2 className="display-5">The portal for online study</h2>
        </div>
      </div>
    );
  }
}


export class Container extends Component {
  render() {
    return <div className="container my-2">{this.props.children}</div>;
  }
}
/**
 * Renders an information card using Bootstrap classes.
 *
 * Properties: title
 */
export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <div className="card-text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

/**
 * Renders a row using Bootstrap classes.
 */
 export class Row extends Component {
    render() {
      return <div className="row">{this.props.children}</div>;
    }
  }
  
  /**
   * Renders a column with specified width using Bootstrap classes.
   *
   * Properties: width, right
   */
  export class Column extends Component {
    render() {
      return (
        <div className={'col' + (this.props.width ? '-' + this.props.width : '')}>
          {this.props.children}
        </div>
      );
    }
  }