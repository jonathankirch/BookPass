// import { useEffect, useState } from 'react';
// import { useSearchInput } from '../../contexts/SearchInputContext';
// import axios from 'axios';
import { BookExtended } from '../../../NewBook/BookExtended';
import { useSearchResults } from './hooks/useSearchResults';

export const ResultPage = () => {
  const { dadosSearchInput } = useSearchResults();

  return (
    <div className="container">
      <h1 className="text-verde">Resultados:</h1>
      {dadosSearchInput.length > 0 &&
        dadosSearchInput.map((livro, index) => (
          <BookExtended
            index={index}
            livro={livro}
          />
        ))}
    </div>
  );
};