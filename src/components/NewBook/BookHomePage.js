import { FavoriteContext } from '../../contexts/FavoriteContext/FavoriteContext';
import { useContext } from 'react';

import { MdFavorite } from 'react-icons/md';

import { Modal } from './Modal/Modal';

export const BookHomePage = ({ livro }) => {
	const { addBook } = useContext(FavoriteContext);
	// eslint-disable-next-line
	const { titulo, autor, descricao, imagem, linkCompra, valor, editora, dataPublicacao } = livro;

	const divBook = {
		width: '185px',
		height: '300px',
	};
	const divImg = {
		width: '150px',
		height: '200px',
	};

	const setFavoritos = (e) => {
		addBook({ titulo, autor, imagem, descricao, linkCompra, valor, editora, dataPublicacao});
	};

	return (
		<div className='border p-3 rounded text-center position-relative me-5 shadow' style={divBook}>
			<div>
				<div className='position-absolute end-0 top-0 p-1'>
					<button onClick={setFavoritos} className='bg-transparent border border-0'>
						<span>
							<MdFavorite color='red' size={30} />
						</span>
					</button>
				</div>
				<div className='border rounded p-1 border-dark' style={divImg}>
					<img className='w-100 h-100' src={imagem} alt='Capa do Livro' />
				</div>
				<p className='mt-2'>{titulo}</p>
			</div>
			{/* Modal */}
			<Modal livro={{ ...livro, id: livro.id }} />
		</div>
	);
};
