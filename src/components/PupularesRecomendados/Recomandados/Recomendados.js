import { Carousel } from '../../Carousel/Carousel';

import { useRecomendadosApi } from './hooks/useRecomendadosApi';

 export const Recomendados = () => {
	const { booksRecomendados } = useRecomendadosApi();

	return (
		<div className='container mt-5'>
			<h1 className='text-verde text-uppercase ms-5'>Recomendados</h1>
			{booksRecomendados.length <= 0 ? (
				<div
					className='alert alert-warning w-50 mx-auto text-center shadow'
					role='alert'>
					Sem Livros para recomendar!
				</div>
			) : (
				<Carousel idCarousel={'recomendados'} books={booksRecomendados} />
			)}
		</div>
	);
};
