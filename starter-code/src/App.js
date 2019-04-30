import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronContacts from './IronContacts'
import ContactsJSON from './contacts.json'




class App extends Component {

  state = {
    contacts: ContactsJSON.slice(0, 5)
  }

  // Add a random contact  
  handleAdd = () => {
    let contacts = this.state.contacts.slice();
    let radomContact = ContactsJSON[Math.floor(Math.random() * ContactsJSON.length)]
    this.setState({
      contacts: [...contacts, radomContact]
    })
  }

  //handle sort
  handleSort = type => {
    let contacts = this.state.contacts.slice();
    if (type === 'name') {
      contacts.sort((a, b) => a[type].localeCompare(b[type]))
    } else if (type === 'popularity') {
      contacts.sort((a, b) => b[type] - a[type])
    }
    this.setState({
      contacts
    })
  }

  //handle delete
  handleDelete = index => {
    let contacts = this.state.contacts.slice();
    contacts.splice(index, 1);

    this.setState({
      contacts
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ul>
          <li><button onClick={this.handleAdd}>Add a contact</button></li>
          <li><button onClick={() => this.handleSort('name')}>Sort by Name</button></li>
          <li><button onClick={() => this.handleSort('popularity')}>Sort by popularity</button></li>
        </ul>
        <IronContacts
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
