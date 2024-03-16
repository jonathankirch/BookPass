import axios from 'axios';

import { useSearchInput } from '../../context/SearchInputContext';
import { useEffect, useState } from 'react';

export const useSearchResults = () => {

  const { searchInput } = useSearchInput();
  const [dadosSearchInput, setDadosSearchInput] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiURL = 'https://api-bookpass.vercel.app/api/search';
        // const apiURL = 'http://localhost:3001/api/search';
        
        const response = await axios.get(`${apiURL}?q=${encodeURIComponent(searchInput)}`);
        if (!response.data) {
          throw new Error('Nenhum dado recebido da API');
        }
        setDadosSearchInput(response.data.livros);
      } catch (error) {
        console.error(`Erro: ${error}`);
      }
    };
    if (searchInput) {
      fetchBooks();
    }
  }, [searchInput]);

  return {
    dadosSearchInput
  }
}