export function InputForm({ addContact }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(event, addContact);
      }}
    >
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button>add contact</button>
    </form>
  );
}

function onSubmit(event, addCont) {
  return addCont(event.target.elements[0].value);
}
