import { Carousel } from '../../Carousel/Carousel';
import { usePopularesApi } from './hooks/usePopularesApi';

export const Populares = () => {
	const { booksPopulares } = usePopularesApi();

	return (
		<div className='container mt-5'>
			<h1 className='text-verde text-uppercase ms-5'>Populares</h1>
			<Carousel idCarousel='populares' books={booksPopulares} />
		</div>
	);
};