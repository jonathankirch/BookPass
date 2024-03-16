import { usePreferences } from '../../../../pages/PreferencePage/context/PreferenceContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useRecomendadosApi = () => {
  const [booksRecomendados, setBooksRecomendados] = useState([]);
  const { userPreferences } = usePreferences()

  useEffect(() => {
    const apiUrl = 'https://api-bookpass.vercel.app/api/recomendados';
    // const apiUrl = 'http://localhost:3001/api/recomendados';
    const preferencesString = JSON.stringify(userPreferences);
    const url = `${apiUrl}/${encodeURIComponent(preferencesString)}`;

    axios.get(url)
      .then((response) => {
        if (!response.data || !response.data.livros) {
          throw new Error(`Nenhum dado recebido pela API`);
        }
        setBooksRecomendados(response.data.livros)
      })
      .catch((error) => {
        console.error(`Erro: ${error}`)
      })
  }, [userPreferences]);

  return {
    booksRecomendados
  };
};
