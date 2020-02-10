import React from 'react'
import { withRouter } from 'react-router';
import SearchBar from '../SearchBar/index';
import ThemeSwitch from '../ThemeSwitch/index';
import './style.css';

const Header = ({ updateSearch, radioIsBeingUsed, history }) => {
  const goToHomePage = (event) => {
    event.preventDefault();
    history.push(`/`);
  }
  return (
    <header className='header'>
      <img src='/logo.svg' alt='Logo' onClick={goToHomePage} />
      <SearchBar updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} />
      <ThemeSwitch />
    </header>
  )
}

export default withRouter(Header)
