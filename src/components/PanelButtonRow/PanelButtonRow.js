import React, { Component } from 'react';
import './PanelButtonRow.css';

/* PanelButtonRow
 *
 * Row of buttons (Delete, Cancel, Add, Save) to add to a panel
 */

class PanelButtonRow extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelButtonRow">
        <button disabled>Delete</button>
        <button>Cancel</button>
        <button>Add</button>
        <button disabled>Save</button>
      </div>
    );
  }
}

export default PanelButtonRow;
