import React, { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const  useSearch = () => useContext(SearchContext);

export default function SearchProvider(props) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {props.children}
    </SearchContext.Provider>
  );
};
