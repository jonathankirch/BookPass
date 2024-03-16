import { Link } from 'react-router-dom';
import { usePreferences } from './context/PreferenceContext';

import styles from './PreferencePage.module.css';
import { useState } from 'react';

export const PreferencePage = () => {
	const generos = [
		'Artes e Fotografia',
		'Aventura',
		'Autoajuda',
		'Autobiografia',
		'Biografia',
		'Ciência',
		'Comédia',
		'Culinária',
		'Desenv. Pessoal',
		'Drama',
		'Educação',
		'Espiritualidade',
		'Fantasia',
		'Ficção Científica',
		'Filosofia',
		'Finanças',
		'Histórico',
		'Mistério',
		'Negócios',
		'Não-Ficção',
		'Policial',
		'Psicologia',
		'Religião',
		'Romance',
		'Suspense',
		'Tecnologia',
		'Terror',
		'Thriller',
		'Viagens',
	];

	const { addPreference } = usePreferences();
	const [isNextDisabled, setIsNextDisabled] = useState(true);

	const handleCheckBoxChange = (e) => {
		addPreference(e.target);
		setIsNextDisabled(false);
	};

	return (
		<div className='container'>
			<h1 className='text-center text-verde w-100 p-5 mx-auto'>
				Preferência de Gêneros
			</h1>
			<hr />
			<div className='py-5'>
				<form>
					<div
						className={`${styles.gridContainer} btn-group py-3 d-grid gap-2`}
						role='group'
						aria-label='Basic checkbox toggle button group'>
						{generos &&
							generos.map((item) => (
								<div key={item} className='form-switch form-check me-5'>
									<input
										type='checkbox'
										className='btn-check'
										id={item}
										autoComplete='off'
										value={item}
										name={item}
										onChange={handleCheckBoxChange}
									/>
									<label className='btn btn-outline-info w-100' htmlFor={item}>
										{item}
									</label>
								</div>
							))}
					</div>
				</form>
				<div className='container text-center'>
					<Link
						className='btn btn-success'
						to={isNextDisabled ? '#' : '/home'}
						disabled={isNextDisabled}
						onClick={handleCheckBoxChange}>
						Próximo
					</Link>
					{isNextDisabled && (
						<div className='alert alert-danger w-50 mx-auto mt-3'>
							Selecione algumas preferências antes de seguir
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
