import React, { useEffect } from 'react'
import './style.css';

const SearchBar = ({ updateSearch, radioIsBeingUsed }) => {
  const searchBarRef = React.createRef();
  useEffect(() => {
    if(radioIsBeingUsed) {
      searchBarRef.current.value = '';
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[radioIsBeingUsed]);

  return (
    <div className='searchbar'>
      <input placeholder='Pesquisar usuário...' onChange={(e) => { updateSearch(e.target.value) }} disabled={radioIsBeingUsed} ref={searchBarRef} />
      <i className="fas fa-search"></i>
    </div>
  )
}

export default SearchBar
