import { useSearchInput } from './context/SearchInputContext';

import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  const { setSearchInput } = useSearchInput();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid bg-white rounded-25">
        <form onSubmit={handleFormSubmit}>
          <div className="d-flex p-1" role="search">
            <input
              id="searchInput"
              className="form-control border-0 me-2 w-100 rounded-25"
              type="search"
              placeholder="O que você esta buscando?"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link to={'/results'}>
              <button className="btn d-flex mt-1" type="submit">
                <FaSearch />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};