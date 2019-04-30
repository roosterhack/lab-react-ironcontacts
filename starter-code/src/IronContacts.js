import React from 'react'


class IronContacts extends React.Component {
  state = {
    contacts: this.props.data
  }

  render() {
    const contactsElements =
      this.state.contacts.map((contact, i) => {
        return (
          <tr key={i}>
            <td><img src={contact.pictureUrl} /></td>
            <td><h3>{contact.name}</h3></td>
            <td><span>{contact.popularity}</span></td>
          </tr>
        )
      })

    return (
      <div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contactsElements}
          </tbody>
        </table>
      </div>
    )
  }
}

export default IronContacts