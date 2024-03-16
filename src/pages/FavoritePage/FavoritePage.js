import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/FavoriteContext/FavoriteContext';
import { BookExtended } from '../../components/NewBook/BookExtended';

export const FavoritePage = () => {
	const { books, removeBook } = useContext(FavoriteContext);

	const handleRemoveBook = (index) => {
		removeBook(index);
	};

	console.log(books);

	return (
		<div className='container'>
			<h1 className='text-verde text-uppercase ms-5'>Favoritos</h1>
			<div>
				{books.length < 1 ? (
					<div className='alert alert-warning w-50 mx-auto text-center shadow'>
						Sem livros favoritos!
					</div>
				) : (
					books.map((item, index) => (
						<div key={index}>
							<BookExtended
								livro={item}
								delButton
								eventButton={() => handleRemoveBook(index)}
							/>
						</div>
					))
				)}
			</div>
		</div>
	);
};
