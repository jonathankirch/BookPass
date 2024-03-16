import { createContext, useContext, useState } from 'react';

const PreferencesContext = createContext();

export const usePreferences = () => useContext(PreferencesContext);

export const PreferencesProvider = ({ children }) => {
  const [userPreferences, setUserPreferences] = useState([]);

  const addPreference = (input) => {
    setUserPreferences((prevPreferencias) => {
      if (prevPreferencias.includes(input.value)) {
        return prevPreferencias.filter((preferencia) => preferencia !== input.value);
      } else {
        return [...prevPreferencias, input.value];
      }
    });
  };

  return (
    <PreferencesContext.Provider value={{ userPreferences, addPreference }}>
      {children}
    </PreferencesContext.Provider>

  )
}