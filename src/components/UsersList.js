import React from 'react';
import User from './User';

export default class UsersList extends React.Component{


  render(){
    console.log(this.props.users);
    var self=this;
    var userList = this.props.users.map(function(user, i) {
      return <User key={i} name={user.name} id={user.id} age={user.age} removeUser={self.props.removeUser}/>;
    });
    return (
        <ul className="list-group">
          {userList}
        </ul>
      );
  }
};