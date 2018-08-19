import React, { Component } from 'react';

import PanelShowElement from '../PanelShowElement/PanelShowElement.js';
import PanelEditElement from '../PanelEditElement/PanelEditElement.js';
import PanelShowField from '../PanelShowField/PanelShowField.js';
import PanelEditField from '../PanelEditField/PanelEditField.js';

/* PanelSet
 *
 * The set of panels for element and field control
 */

class PanelSet extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="PanelSet">
        <PanelShowElement />
        <PanelEditElement />
        <PanelShowField />
        <PanelEditField />
      </div>
    );
  }
}

export default PanelSet;
