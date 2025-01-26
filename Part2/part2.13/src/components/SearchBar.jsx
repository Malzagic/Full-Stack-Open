import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="searchbar">filter shown with </label>
      <input id="searchbar" type="text" onChange={onChange} />
    </div>
  );
};

export default SearchBar;
