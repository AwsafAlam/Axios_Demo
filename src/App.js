import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';

//https://api.github.com/users/awsafalam

class App extends Component {

  state = {
    repos:null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
  
    //using axios lib (promise vased fetch)
    axios.get( `https://api.github.com/users/${user}`)
    .then((resp) => {
      // Callback FUnction
      console.log(resp);

      //get a property (public repos) from this responseand store
      const repositories = resp.data.public_repos; 
      console.log(repositories);

      // Now, setting the state using fetch data
      this.setState({repos: repositories})

      ///QUICK_TIP: if propertyand value are same {repos: repos} can be written as 
      /// this.setState({repos}) --> Shorthand


    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Http Calls React</h1>
        </header>
        <UserForm getUser={this.getUser}></UserForm>
        {
          // {} opens a javascript expression inside JSX
          this.state.repos ? <p>Number of Repository : {this.state.repos} </p> : <p>Please Enter a Username</p>
        }
      </div>
    );
  }
}

export default App;
