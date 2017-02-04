import React from 'react';
import ShowAddButton from './ShowAddButton';
import UserForm from './UserForm';
import UsersList from './UsersList';
import ShortId from 'shortid';

var users = [];
export default class Users extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            users : [],
            formDisplayed: false
        }
    }

  componentDidMount() {
  }

  onToggleForm() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  }

  onNewUser(newUser) {
      newUser.id = ShortId.generate();
      users.push(newUser);
      this.setState({
          users : users
      })
      
  }

  onRemoveUser(id) {
      users.forEach((user, i) => {
          if(user.id === id)
          {
              users.splice(i, 1);
              return;
          }
      });

      this.setState({
          users : users
      });
  }

  render() {
    return (
      <div className="container">
        <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm.bind(this)} />
        <UserForm  displayed={this.state.formDisplayed} onNewUser={this.onNewUser.bind(this)}/>
        <UsersList users={this.state.users} removeUser={this.onRemoveUser.bind(this)}/>
      </div>
      );
  }
};
