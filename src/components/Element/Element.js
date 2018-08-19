import React, { Component } from 'react';
import './Element.css';

/* Element
 *
 * A square that shows the basic information of an element in the element tree.
 */

class Element extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="Element">
        <table>
          <tr>
            <td className="left">[C]</td>
            <td>{this.props.e.name || <em>Unknown</em>}</td>
          </tr>
          <tr>
            <td className="left"><b>Field:</b></td>
            <td>{this.props.e.field || <em>None</em>}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Element;
