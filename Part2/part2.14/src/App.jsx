import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteHandler = (id, name) => {
    const confirmed = window.confirm(`Delete ${name} ?`);

    if (confirmed) {
      phonebookService.deleteRecord(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar onChange={(e) => setFilter(e.target.value)} />
      <h3>add a new</h3>
      <Form
        onChangeName={inputNameHandler}
        onChangeNumber={inputNumberHandler}
        onSubmit={addNewNameHandler}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <PersonsList filteredList={filteredList} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
