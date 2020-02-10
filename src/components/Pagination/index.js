import React from 'react'
import './style.css';

const Pagination = ({ pageNumbers, changePage }) => {

  return (
    <nav className='pagination'>
      <ul className='page-list'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={(e) => changePage(e,number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
