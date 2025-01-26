import React from "react";
import Person from "./Person";

const PersonsList = ({ filteredList }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {filteredList.map((person, index) => (
        <Person
          key={person.name + index}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
};

export default PersonsList;
