import { BookHomePage } from '../NewBook/BookHomePage';

import { useWindowSize } from './useWindowSize';

export const Carousel = ({ books, idCarousel }) => {
	const windowWidth = useWindowSize();
	console.log(windowWidth);
	// Função para dividir os dados em subarrays de 4 elementos
	const chunkArray = (array, size) => {
		const chunkedArr = [];
		for (let i = 0; i < array.length; i += size) {
			chunkedArr.push(array.slice(i, i + size));
		}
		return chunkedArr;
	};

	// Dividindo os livros em páginas de 4 livros
	const livrosPorPagina = chunkArray(books, 4);
	return (
		<>
			{windowWidth > 768 ? (
				<div
					id={idCarousel}
					className='carousel carousel-dark slide'
					data-bs-touch='false'>
					<div className='carousel-inner w-75 mx-auto'>
						{livrosPorPagina.map((grupoLivros, index) => (
							<div
								className={`carousel-item ${index === 0 ? 'active' : ''}`}
								key={index}>
								<div className='row flex-nowrap px-2'>
									{grupoLivros.map((livro, idx) => (
										<BookHomePage key={idx} livro={livro} />
									))}
								</div>
							</div>
						))}
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target={`#${idCarousel}`}
						data-bs-slide='prev'>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Anterior</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target={`#${idCarousel}`}
						data-bs-slide='next'>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Próximo</span>
					</button>
				</div>
			) : (
				<div className='row  flex-nowrap overflow-auto overflow-y-hidden px-2'>
					{books.map((livro, idx) => (
						<BookHomePage key={idx} livro={livro} />
					))}
				</div>
			)}
		</>
	);
};
