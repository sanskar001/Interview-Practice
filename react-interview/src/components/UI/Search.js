import React, { useEffect, useState } from "react";
// import { useDebounce } from "../../hooks/useDebounce";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let timerId = setTimeout(() => {
      fetchData(searchInput);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchInput]);

  function fetchData(query) {
    console.log("Fetching Data...", { query });
  }

  function searchInputChangeHandler(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <input
        type="search"
        name="search"
        autoComplete="off"
        onChange={searchInputChangeHandler}
      />
    </div>
  );
};

export default Search;
