import React, { useState, useRef } from "react";
import { searchPeople } from "../helpers/functions";

const Search = ({ setPeople, setPeopleDetails }) => {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef(null);

  const onChangeSearchInput = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    setSearchValue(text);
  };

  const onSearchInputSubmit = (e) => {
    if (e.key !== "Enter") return;

    inputRef.current.value = "";
    setPeopleDetails({});
    searchPeople(searchValue).then((data) => setPeople(data));
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        onChange={onChangeSearchInput}
        onKeyDown={onSearchInputSubmit}
      />
    </>
  );
};

export default Search;
