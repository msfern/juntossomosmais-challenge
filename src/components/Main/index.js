import React from 'react';
import FilterSideBar from '../FilterSideBar/index';
import UserCards from '../UserCards/index';
import Pagination from '../Pagination/index';
import './style.css';

function Main({ filteredUsers, filterUsers, clearFilter }) {
  return (
    <div className='wrapper'>
      <FilterSideBar filterUsers={filterUsers} clearFilter={clearFilter} />
      <UserCards filteredUsers={filteredUsers} />
      <Pagination />
    </div>
  )
}

export default Main
