import React from "react";

const Form = ({
  onChangeName,
  onChangeNumber,
  onSubmit,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input onChange={onChangeName} value={newName} />
      </div>
      <div>
        number: <input onChange={onChangeNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
