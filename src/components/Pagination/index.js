import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

const Pagination = ({ pageNumbers, setCurrentPage, currentPage }) => {
  return (
    <nav className='pagination'>
      <ul className='page-list'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => setCurrentPage(number)} className={currentPage === number ? 'active' : ''}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes ={
  pageNumbers: PropTypes.array,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
}

export default Pagination
