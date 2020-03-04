//______________________________________________________________________________________
//                              ASSIGNMENT-2
//_________________________________________________________________________________________
import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: 'nagasai'
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}
export default App;
//_____________________________________________________________________________________________
//                                  ASSIGNMENT-1
//____________________________________________________________________________________________
// import React, { Component } from 'react';
// import './App.css';
// // import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// class App extends Component {
//   state = {
//     username: 'nagasai'
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       username: event.target.value
//     });
//   }
//   render() {

//     return (
//       <div className="App">
//         <UserInput 
//          changed={this.nameChangedHandler.bind(this)} 
//          name={this.state.username}>
//          </UserInput>
//         <UserOutput name={this.state.username} ></UserOutput>
//         <UserOutput  name={this.state.username}></UserOutput>
//         <UserOutput name={"Nagaraj"}/>
//       </div>
//     );
//   }
// }
// export default App;