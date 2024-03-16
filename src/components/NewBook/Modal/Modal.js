import { useState } from 'react';
import { TextoCortado } from './TextoCortado/TextoCortado';

export const Modal = ({ livro }) => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<button
				className='border-0 bg-transparent position-absolute start-0 top-0 mt-5 w-100 h-100'
				onClick={() => setShow(true)}></button>

			{show && (
				<div className='modal modal-xl fade show' style={{ display: 'block' }}>
					<div className='modal-dialog'>
						<div className='modal-content shadow'>
							<div className='modal-header'>
								<h3 className='modal-title'>{livro.titulo}</h3>
								<button
									type='button'
									className='btn-close'
									onClick={() => setShow(false)}></button>
							</div>
							<div className='modal-body'>
								<div className='row'>
									<div className='col-12 col-sm-4'>
										<img
											className='img-fluid'
											src={livro.imagem}
											alt='Capa do livro'
										/>
									</div>
									<div className='col text-start'>
										<p>
											<strong>Título:</strong> {livro.titulo}
										</p>
										<p>
											<strong>Autor(es):</strong> {livro.autor}
										</p>
										<p>
											<strong>Data de publicação:</strong>{' '}
											{livro.dataPublicacao}
										</p>
										<p>
											<strong>Editora:</strong> {livro.editora}
										</p>
										<p className='text-end fs-4 text-decoration-underline'>
											<strong>Valor:</strong> R${livro.valor}
										</p>
									</div>
								</div>
								<hr />
								<div className='row p-2'>
									<p className='text-start'>
										<TextoCortado texto={livro.descricao} limite={600} />
									</p>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									onClick={() => setShow(false)}>
									Fechar
								</button>

								<div className='btn btn-primary'>
									{livro.linkCompra === '' ? (
										<button
											className='border-0 bg-transparent link-light'
											onClick={() => {
												alert('Livro sem link de compra');
											}}>
											Compre aqui
										</button>
									) : (
										<a className='link-light' href={livro.linkCompra}>
											Compre aqui
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
