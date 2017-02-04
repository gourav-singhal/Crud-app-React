import React from 'react';

export default class ShowAddButton extends React.Component{
  render() {

  var classString, button;
  console.log(this.props.displayed);
  if (this.props.displayed) {
    classString = 'btn btn-info btn-block';
    button = 'Cancel';
  } else {
    classString = 'btn btn-success btn-block';
    button = 'Create New User';
  }
    return (
        <button className={classString} onClick={this.props.onToggleForm}>{button}</button>
      );
  }
};
