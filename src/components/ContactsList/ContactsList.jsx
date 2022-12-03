export function ContactsList({ contacts }) {
  return (
    <div>
      <input
        type="text"
        name="filter"
        // onInput={event => {
        //   onTextInput(event);
        // }}
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
//   console.log(event.target.value);
//     const searchName = event.target.value;
//     // const findedNames =
//   console.log(contacts);
// }
