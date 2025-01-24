import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

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

  const filterByNameHandler = (e) => {
    if (e.target.value === "") {
      setFilteredPerson([]);
      return;
    }
    const filter = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredPerson(filter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar onChange={filterByNameHandler} />
      <h3>add a new</h3>
      <Form
        onChangeName={inputNameHandler}
        onChangeNumber={inputNumberHandler}
        onSubmit={addNewNameHandler}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <PersonsList filteredList={filteredPerson} />
    </div>
  );
};

export default App;
