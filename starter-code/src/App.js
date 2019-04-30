import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronContacts from './IronContacts'
import contacts from './contacts.json'


const shortenContacts = contacts.splice(0, 5);

class App extends Component {
  render() {
    return (
      <div className="App">
        <IronContacts data={shortenContacts} />
      </div>
    );
  }
}

export default App;
