import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import SearchBar from '../SearchBar/index';
import './style.css';

function Header({ updateSearch, radioIsBeingUsed, history }) {
  
  const goToHomePage = (event) => {
    event.preventDefault();
    history.push(`/`);
  }
  return (
    <header className='header'>
      <img src='/logo.svg' alt='Logo' onClick={goToHomePage} />
      <SearchBar updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} />
    </header>
  )
}

Header.propTypes ={
  updateSearch: PropTypes.func,
  radioIsBeingUsed: PropTypes.bool,
  history: PropTypes.object,
}

export default withRouter(Header)
