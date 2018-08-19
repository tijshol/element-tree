import React, { Component } from 'react';

import Panel from '../Panel/Panel.js';
import Selector from '../Selector/Selector.js';

/* PanelShowElement
 *
 * The panel to select an element to show
 */

class PanelShowElement extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelShowElement">
        <Panel title="Show Element">
          <table>
          <tr><td><Selector /></td></tr>
          <tr><td><input type="checkbox"/> Track origin</td></tr>
          </table>
        </Panel>
      </div>
    );
  }
}

export default PanelShowElement;
