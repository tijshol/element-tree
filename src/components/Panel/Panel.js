import React, { Component } from 'react';
import './Panel.css';

/* Panel
 *
 * A general container with a border and a title.
 */

class Panel extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="Panel">
      	<b>{this.props.title}</b>
        <div className="margin">{this.props.children}</div>
      </div>
    );
  }
}

export default Panel;
