import React from 'react'


class IronContacts extends React.Component {

  render() {
    const contactsElements =
      this.props.contacts.map((contact, i) => {
        return (
          <tr key={i}>
            <td><img src={contact.pictureUrl} /></td>
            <td><h3>{contact.name}</h3></td>
            <td><span>{contact.popularity}</span></td>
            <td><button onClick={() => this.props.handleDelete(i)}>Delete</button></td>
          </tr>
        )
      })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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