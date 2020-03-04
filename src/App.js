import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'nagasai'
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    
    return (
      <div className="App">
        <UserInput 
         changed={this.nameChangedHandler.bind(this)} 
         name={this.state.username}>
         </UserInput>
        <UserOutput name={this.state.username} ></UserOutput>
        <UserOutput  name={this.state.username}></UserOutput>
        <UserOutput name={"Nagaraj"}/>
      </div>
    );
  }
}
export default App;
