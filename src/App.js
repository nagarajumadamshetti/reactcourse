import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state={
    persons:[{name:'Nagaraj',age:'21'},{name:'Nagasai',age:'20'}
  ],
  otherState:'others'
  }
  switchNameHandler=()=>{
    //console.log(' button clicked');
    this.setState(
      {
        persons:[
          {
            name:'Nagaraj',age:'210'
          },
          {
            name:'Nagasai',age:'200'
          }
        ]
      }
    )
  }
  render(){
  return (
    <div className="App">
      <h1>
        Hi!
        </h1>
        <button onClick={this.switchNameHandler}>Switch person name</button>
        <p>react project</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hello evry1</Person>
        
    </div>
  );
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi!'));
}
}

export default App;
