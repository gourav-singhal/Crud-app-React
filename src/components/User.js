import React from 'react';

export default class User extends React.Component{
  render() {
    return(
      <li className="list-group-item">
        <span>UserId : {this.props.id}.</span> <span>Name: {this.props.name}</span> <span>Age: {this.props.age} <button className="btn btn-danger" onClick={this.props.removeUser.bind(this,this.props.id)}>X</button></span>
      </li>
      );
  }
};