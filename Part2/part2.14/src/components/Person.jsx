import React from "react";

const Person = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name} {number}
      <button onClick={() => onDelete(id, name)}>delete</button>
    </li>
  );
};

export default Person;
