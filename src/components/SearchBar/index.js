import React from 'react'
import './style.css';

const SearchBar = ({ updateSearch }) => {
  return (
    <div className='searchbar'>
      <input placeholder='Pesquisar usuário...' onChange={(e) => { updateSearch(e.target.value) }} />
      <i className="fas fa-search"></i>
    </div>
  )
}

export default SearchBar
