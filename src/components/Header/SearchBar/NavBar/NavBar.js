import { VscAccount, VscHeart, VscHome } from 'react-icons/vsc';
import { SearchBar } from '../SearchBar';

import { Link } from 'react-router-dom';

import logoBookPass from './img/logoBookPass2.png';

export const NavBar = () => {
	return (
		<div className='bg-verde'>
			<nav className='navbar navbar-expand-lg py-3 container'>
				<div className='container-fluid'>
					{/* primeira coluna */}
					<div className='text-start col-2 text-center'>
						<Link to='/home'>
							<img className='w-75' src={logoBookPass} alt='Logo BookPass' />
						</Link>
					</div>

					{/* segunda coluna */}
					<div className='col-8'>
						<div>
							<SearchBar />
						</div>
					</div>

					{/* terceira coluna */}
					<div>
						<button
							className='navbar-toggler bg-verde border-0'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navMenu'
							aria-controls='menu'
							aria-expanded='false'>
							<span className='navbar-toggler-icon'></span>
						</button>
					</div>
				</div>
				<div id='navMenu' className='collapse navbar-collapse text-end px-4'>
					<ul className='navbar-nav fs-6'>
						<li className='nav-item'>
							<Link to='/favorites' className='nav-link'>
								<div
									className='d-flex align-items-center justify-content-end pe-2'
									title='Livros favoritos'>
									Favoritos{' '}
									<strong className='ms-2'>
										<VscHeart size={30} />
									</strong>
								</div>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/preferences' className='nav-link'>
								<div
									className='d-flex align-items-center justify-content-end pe-2'
									title='Editar preferências'>
									Conta
									<strong className='ms-2'>
										<VscAccount size={30} />
									</strong>
								</div>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/home' className='nav-link'>
								<div
									className='d-flex align-items-center justify-content-end pe-2'
									title='Voltar a tela inicial'>
									Home{' '}
									<strong className='ms-2'>
										<VscHome size={30} />
									</strong>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
