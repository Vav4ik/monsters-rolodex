import React from "react";

import "./SearchBox.css";

const SearchBox = (props) => {
  const { className, onChangeHandler, placeholder } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
