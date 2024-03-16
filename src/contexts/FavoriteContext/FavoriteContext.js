import { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
	const [books, setBooks] = useState([]);

	function addBook(newBook) {
		// verificar se o titulo do livro eh igual a algum ja adicionado
		const isBookAdded = books.some((book) => book.titulo === newBook.titulo);
		if (!isBookAdded) {
			setBooks((prevBooks) => [...prevBooks, newBook]);
		}
	}

	const removeBook = (index) => {
		const updatedBooks = [...books];
		updatedBooks.splice(index, 1);
		setBooks(updatedBooks);
	};

	return (
		<FavoriteContext.Provider
			value={{
				books,
				addBook,
				removeBook,
			}}>
			{children}
		</FavoriteContext.Provider>
	);
};
