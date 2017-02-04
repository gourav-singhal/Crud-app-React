import React from 'react';

export default class UserForm extends React.Component{

  handleForm(e) {
    e.preventDefault();
    var newUser = {
      name: this.refs.name.value,
      age: this.refs.age.value
    };

    this.refs.userForm.reset();

    this.props.onNewUser(newUser);

  }

  render() {
    var display = this.props.displayed ? 'block': 'none';
    var styles = {
      display: display
    };
    return (
      <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm.bind(this)}>
        <div className="form-group">
          <input type="text" ref="name" className="form-control" placeholder="Name"/>
          <input type="number" ref="age" className="form-control" placeholder="Age"/>
          <button type="submit" className="btn btn-primary btn-block">Add user</button>
        </div>
      </form>
      );
  }
};
