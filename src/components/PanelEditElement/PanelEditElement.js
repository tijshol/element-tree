import React, { Component } from 'react';

import Panel          from '../Panel/Panel.js';
import Selector       from '../Selector/Selector.js';
import SelectList     from '../SelectList/SelectList.js';
import PanelButtonRow from '../PanelButtonRow/PanelButtonRow.js';

/* PanelEditElement
 *
 * The panel to edit the selected element
 */

class PanelEditElement extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelEditElement">
        <Panel title="Edit Element">
          <table>
          <tr><td>
            <table>
            <tr>
              <td>Name</td><td><input type="text" name="name" /></td>
            </tr><tr>
              <td>Color</td><td>[CP]</td>
            </tr><tr>
              <td>Field</td><td><Selector /></td>
            </tr>
            </table>
            <table>
            <tr><td>Description</td></tr>
            <tr><td><textarea name="description" /></td></tr>
            </table>
          </td><td className="right">
          <table>
            <tr><td>Dependencies</td></tr>
            <tr><td><SelectList /></td></tr>
          </table>
          </td></tr>
          </table>
          <PanelButtonRow />
        </Panel>
      </div>
    );
  }
}

export default PanelEditElement;
