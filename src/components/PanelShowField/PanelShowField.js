import React, { Component } from 'react';

import Panel from '../Panel/Panel.js';
import Selector from '../Selector/Selector.js';

/* PanelShowField
 *
 * The panel to select a field to show
 */

class PanelShowField extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelShowField">
        <Panel title="Show Field">
          <table><tr><td>
          <Selector />
          </td></tr></table>
        </Panel>
      </div>
    );
  }
}

export default PanelShowField;
