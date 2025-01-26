import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

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

    const newPhonebookObject = {
      name: newName,
      number: newNumber,
    };

    let confirmed = false;

    const checkNames = persons.find((item) => item.name === newName);
    if (checkNames) {
      confirmed = window.confirm(
        `${checkNames.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmed) {
        phonebookService
          .update(checkNames.id, { ...checkNames, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id === response.id ? response : person
              )
            );
            setMessage(`Successfuly update number: ${response.number}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setNewName("");
            setNewNumber("");
          });
      }

      return;
    } else {
      phonebookService.create(newPhonebookObject).then((receivedData) => {
        setPersons(persons.concat(receivedData));
        setMessage(`Successfuly added ${receivedData.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteHandler = (id, name) => {
    const confirmed = window.confirm(`Delete ${name} ?`);

    if (confirmed) {
      phonebookService.deleteRecord(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== response.id));
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
