import { useLocation } from 'react-router-dom';

import { NavBar } from './SearchBar/NavBar/NavBar';

export const Header = () => {
	const location = useLocation();

	if (location.pathname === '/preferences') {
		return null;
	}

	return (
		// primeira linha
		<div>
			<div className='bg-primeira'>
				<div className='container'>
					<div className='row pt-3 bg-primeira text-verde'>
						<p>
							Seja muito bem-vindo a <span>BookPass!</span>
						</p>
					</div>
				</div>
			</div>

			{/* segunda linha */}

			<NavBar />

			{/* terceira linha */}
			<div className='bg-segunda shadow border-bottom border-light-subtle'>
				<div className='container'>
					<div className='row text-header p-3'>
						<div className='col-8'>
							<h2>
								Descubra novos horizontes <hr className='invisible my-0' />{' '}
								entre nossas páginas.
							</h2>
							<span className='text-light'>BookPass</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
