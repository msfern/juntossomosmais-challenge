import React from 'react'
import './style.css';

const Pagination = ({ pageNumbers, changePage, currentPage }) => {

  return (
    <nav className='pagination'>
      <ul className='page-list'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={(e) => changePage(e,number)} className={currentPage === number ? 'active' : ''}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
