import React, { useState } from 'react';

export const TextoCortado = ({ texto, limite }) => {
  const [textoCompleto, setTextoCompleto] = useState(false);

  const handleVerMais = () => {
    setTextoCompleto(true);
  };

  return (
    <div>
      {textoCompleto ? (
        <p>{texto}</p>
      ) : (
        <p>
          {texto.length > limite ? `${texto.slice(0, limite)}...` : texto}
          {texto.length > limite && (
            <button className='border-0 bg-transparent link-primary float-end' onClick={handleVerMais}>Ver Mais...</button>
          )}
        </p>
      )}
    </div>
  );
};