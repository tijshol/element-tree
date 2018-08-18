import React, { Component } from 'react';
import './App.css';
import Panel from './Panel/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel title="Show Element">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque</Panel>
        <Panel title="Edit Element">pretium quis, sem. Nulla consequat massa 
quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
imperdiet a, venenatis vitae, justo.</Panel>
        <Panel title="Show Field">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,</Panel>
        <Panel title="Edit Field">viverra quis, feugiat a, tellus.
Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</Panel>
      </div>
    );
  }
}

  

export default App;
