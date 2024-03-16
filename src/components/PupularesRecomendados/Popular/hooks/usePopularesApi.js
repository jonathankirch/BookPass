import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePopularesApi = () => {
	const [booksPopulares, setBooksPopulares] = useState([]);

	useEffect(() => {
		const apiUrl = 'https://api-bookpass.vercel.app/api/populares';
		// const apiUrl = 'http://localhost:3001/api/populares';

		axios
			.get(apiUrl)
			.then((response) => {
				if (!response.data) {
					throw new Error('Nenhum dado recebido da API');
				}
				setBooksPopulares(response.data.livros);
			})
			.catch((error) => {
				console.error(`Erro: ${error}`);
			});
	}, []);

	return {
		booksPopulares,
	};
};
