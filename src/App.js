import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Http Calls React</h1>
        </header>
        <UserForm getUser={this.getUser}></UserForm>
      </div>
    );
  }
}

export default App;
