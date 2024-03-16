import { useState } from 'react';

export const usePreferences = () => {
  const [userPreferences, setUserPreferences] = useState([]);

  const addPreference = (input) => {
    if (userPreferences.includes(input.value)) {
      setUserPreferences(
        userPreferences.filter((preferencia) => preferencia !== input.value)
      );
    } else {
      setUserPreferences([...userPreferences, input.value]);
    }
  };

  return {
    userPreferences,
    addPreference,
  };
};
