import React from "react";
import Person from "./Person";

const PersonsList = ({ filteredList, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {filteredList.map((person, index) => (
        <Person
          key={person.name + index}
          id={person.id}
          name={person.name}
          number={person.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default PersonsList;
