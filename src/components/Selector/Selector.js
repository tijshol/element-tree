import React, { Component } from 'react';
import './Selector.css';

/* Selector
 *
 * A search bar with a dropdown for selecting an item from a provided list.
 * The list is of either fields or elements.
 */

class Selector extends Component {
  constructor(props) {
  	super(props);
  }

  updateSearchList = () => {
    console.log('update the search list');
  }

  render() {
    return (
      <div className="Selector">
        <input type="text" name="search" placeholder="Search..." onChange={this.updateSearchList}/>
      </div>
    );
  }
}

export default Selector;
