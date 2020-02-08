import React from 'react'
import UserCard from '../UserCard/index'
import './style.css';

const UserCards = ({ filteredUsers }) => {
  return (
    <div className='user-list'>
      { Object.keys(filteredUsers).map(user => (
        <UserCard key={user} index={user} details={filteredUsers[user]} />
      ))}
    </div>
  )
}

export default UserCards;

