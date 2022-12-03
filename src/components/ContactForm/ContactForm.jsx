export function ContactForm({ contacts, addFilter, filter, deleteContact }) {
  const filteredContacts = contacts.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Contacts list</h2>
      <input
        type="text"
        name="filter"
        onInput={event => {
          addFilter(event.target.value);
        }}
      />
      <ul>
        {filteredContacts.map(cont => (
          <li key={cont.id}>
            <span>
              {cont.name}: {cont.number}
            </span>
            <button
              id={cont.id}
              type="button"
              onClick={submit => {
                // console.log(submit);
                deleteContact(submit);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function deleteContact() {
//   console.log('tic');
// }
