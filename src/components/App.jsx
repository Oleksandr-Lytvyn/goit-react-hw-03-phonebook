import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { InputForm } from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { name: newContact }] };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}
