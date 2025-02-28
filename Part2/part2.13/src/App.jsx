import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  useEffect(() => {
    phonebookService.getAll().then((initialData) => setPersons(initialData));
  }, []);

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

    const newPhonebookObject = {
      name: newName,
      number: newNumber,
    };

    phonebookService.create(newPhonebookObject).then((receivedData) => {
      setPersons(persons.concat(receivedData));
      setNewName("");
      setNewNumber("");
    });
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
