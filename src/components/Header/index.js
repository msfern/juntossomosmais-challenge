import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import SearchBar from '../SearchBar/index';
import './style.css';
import ThemeSwitcher from '../ThemeSwitcher';

function Header({ updateSearch, radioIsBeingUsed, history, darkMode, setDarkMode }) {
  const goToHomePage = (event) => {
    event.preventDefault();
    history.push(`/`);
  }

  return (
    <header className='header'>
      <img src='/logo.svg' alt='Logo' onClick={goToHomePage} />
      <SearchBar updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} />
      <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  )
}

Header.propTypes ={
  updateSearch: PropTypes.func,
  radioIsBeingUsed: PropTypes.bool,
  history: PropTypes.object,
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func
}

export default withRouter(Header)
