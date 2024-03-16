import React, { createContext, useContext, useState } from 'react';

const SearchInputContext = createContext();

export const useSearchInput = () => useContext(SearchInputContext);

export const SearchInputProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  );
};