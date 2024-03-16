import { MdFavorite } from 'react-icons/md'; // favorit icon
import { MdBookmarkRemove } from 'react-icons/md'; //remove icon

import { FavoriteContext } from '../../contexts/FavoriteContext/FavoriteContext';
import { useContext } from 'react';

import { Modal } from './Modal/Modal';

export const BookExtended = ({ livro, delButton = false, eventButton }) => {
	// eslint-disable-next-line
	const { titulo, autor, descricao, imagem, index, linkCompra, valor, editora, dataPublicacao } = livro;

	const containerImg = {
		width: 140,
		height: 185,
	};
	const divImg = {
		height: '100%',
		width: '100%',
	};
	const textEllipsisStyles = {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
	};

	const { addBook } = useContext(FavoriteContext);

	const setFavoritos = (e) => {
		addBook({ titulo, autor, descricao, imagem, linkCompra, valor, editora, dataPublicacao});
	};

	return (
		<div
			key={index}
			className='container-fluid p-2 border row row-cols-1 row-cols-sm-2 mb-3 position-relative mx-auto shadow rounded position-relative'>
			<div className='col w-25'>
				<div className='border rounded p-2 mx-auto' style={containerImg}>
					<div className='position-absolute start-0 top-0 px-2'>
						<button onClick={setFavoritos} className='bg-transparent border border-0'>
							<span>
								<MdFavorite color='red' size={30} />
							</span>
						</button>
					</div>
					<div>
						{delButton && (
							<div className='position-absolute top-0 end-0'>
								<button onClick={eventButton} className='bg-transparent border border-0'>
									<MdBookmarkRemove color='black' size={30} />
								</button>
							</div>
						)}
					</div>
					<img src={imagem} alt='Capa do livro' style={divImg} />
				</div>
			</div>
			<div className='col'>
				<h3>{titulo}</h3>
				<h4>Autor: {autor}</h4>
				<p className='pt-4' style={textEllipsisStyles}>
					{descricao}
				</p>
			</div>
			{/* Modal */}
			<Modal livro={{ ...livro, id: livro.id }} />
		</div>
	);
};
