import React from 'react';
import FilterSideBar from '../FilterSideBar/index';
import UserCards from '../UserCards/index';
import Pagination from '../Pagination/index';
import './style.css';

function Main({ filteredUsers }) {
  return (
    <div className='wrapper'>
      <FilterSideBar />
      <UserCards filteredUsers={filteredUsers} />
      <Pagination />
    </div>
  )
}

export default Main
