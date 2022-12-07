import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
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
    filter: '',
  };

  componentDidMount() {
    console.log(localStorage.getItem('contacts'));
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      // console.log(prevState.contacts !== this.state.contacts);
    }
  }

  addContact = (newContact, newPhone) => {
    if (this.state.contacts.find(cont => cont.name === newContact)) {
      alert(`${newContact} is already`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: newContact, number: newPhone },
        ],
      };
    });
  };
  addFilter = input => {
    this.setState(() => {
      return { filter: input };
    });
  };
  deleteContact = input => {
    const updatedContacts = this.state.contacts.filter(
      cont => input.target.id !== cont.id
    );
    this.setState(() => {
      return { contacts: updatedContacts };
    });
  };
  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <InputForm addContact={this.addContact} />
        <ContactForm
          contacts={this.state.contacts}
          addFilter={this.addFilter}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  }
}

InputForm.propTypes = {
  addContact: PropTypes.func,
};
ContactForm.propTypes = {
  contacts: PropTypes.array,
  addFilter: PropTypes.func,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
