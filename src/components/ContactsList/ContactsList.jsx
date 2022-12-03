import { nanoid } from 'nanoid';

export function ContactsList({ contacts }) {
  return (
    <div>
      <h2>Contacts list</h2>
      <ul>
        {contacts.map(cont => (
          <li key={nanoid()}>{cont.name}</li>
        ))}
      </ul>
    </div>
  );
}
