import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const inputNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const inputNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const addNewNameHandler = (e) => {
    e.preventDefault();

    const checkNames = persons.find((item) => item.name === newName);
    if (checkNames !== undefined) {
      alert(`${checkNames.name} is already added to phonebook`);
      setNewName("");
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="searchbar">filter shown with </label>
        <input
          id="searchbar"
          type="text"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <br />
      <h2>add a new</h2>
      <form onSubmit={addNewNameHandler}>
        <div>
          name: <input onChange={inputNameHandler} value={newName} />
        </div>
        <div>
          number: <input onChange={inputNumberHandler} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filteredList.map((person, index) => (
          <li key={person.name + index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
