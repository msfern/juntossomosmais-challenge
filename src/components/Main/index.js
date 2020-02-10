import React from 'react';
import FilterSideBar from '../FilterSideBar/index';
import UserCards from '../UserCards/index';
import Pagination from '../Pagination/index';
import './style.css';

function Main({ currentUsers, filterUsers, clearFilter, loading, pageNumbers, changePage, currentPage }) {
  return (
    <div className='wrapper'>
      <FilterSideBar filterUsers={filterUsers} clearFilter={clearFilter} />
      <UserCards currentUsers={currentUsers} loading={loading} />
      <Pagination pageNumbers={pageNumbers} changePage={changePage} currentPage={currentPage} />
    </div>
  )
}

export default Main
