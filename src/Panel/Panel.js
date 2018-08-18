import React, { Component } from 'react';
import '../App.css';

class Panel extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="Panel App-panel">
      	<b>{this.props.title}</b>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Panel;
