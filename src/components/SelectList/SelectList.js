import React, { Component } from 'react';

import Selector from '../Selector/Selector.js';

/* SelectList
 *
 * A selector that adds selections to a list
 */

class SelectList extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="SelectList">
        <Selector />
      </div>
    );
  }
}

export default SelectList;
