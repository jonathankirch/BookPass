import { Populares } from '../../components/PupularesRecomendados/Popular/Populares';
import { Recomendados } from '../../components/PupularesRecomendados/Recomandados/Recomendados';

export const HomePage = () => {
	return (
		<div className='my-5'>
			<Populares />
			<Recomendados />
		</div>
	);
};
