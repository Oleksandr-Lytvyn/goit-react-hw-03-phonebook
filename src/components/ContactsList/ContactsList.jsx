export function ContactsList({ contacts, addFilter }) {
  return (
    <div>
      <input
        type="text"
        name="filter"
        onInput={event => {
          addFilter(event.target.value);
        }}
      />
      <h2>Contacts list</h2>
      <ul>
        {contacts.map(cont => (
          <li key={cont.id}>
            {cont.name}: {cont.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function onTextInput(event) {
//   //   console.log(event.target.value);
// }
