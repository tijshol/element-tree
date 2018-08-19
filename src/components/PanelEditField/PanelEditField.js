import React, { Component } from 'react';

import Panel          from '../Panel/Panel.js';
import PanelButtonRow from '../PanelButtonRow/PanelButtonRow.js';

/* PanelEditField
 *
 * The panel to edit the selected field
 */

class PanelEditField extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelEditField">
        <Panel title="Edit Element">
          <table>
          <tr>
            <td>Name</td><td><input type="text" name="name" /></td>
          </tr><tr>
            <td>Color</td><td>[CP]</td>
          </tr>
          </table>
          <table>
          <tr><td>Description</td></tr>
          <tr><td><textarea name="description" /></td></tr>
          </table>
          <PanelButtonRow />
        </Panel>
      </div>
    );
  }
}

export default PanelEditField;
