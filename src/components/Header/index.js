import React from 'react'
import SearchBar from '../SearchBar/index';
import ThemeSwitch from '../ThemeSwitch/index';
import './style.css';

const Header = ({ updateSearch, radioIsBeingUsed }) => {
  return (
    <header className='header'>
      <img src='/logo.svg' alt='Logo' />
      <SearchBar updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} />
      <ThemeSwitch />
    </header>
  )
}

export default Header
