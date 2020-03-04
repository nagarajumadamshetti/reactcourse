import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>
        Hi!
        </h1>
        <p>react project</p>
        <Person name='nagaraj' age='21'/>
        <Person name='nagasai' age='20'/>
        
    </div>
  );
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi!'));
}
}

export default App;
