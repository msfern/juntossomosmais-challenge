import React from 'react'
import UserCard from '../UserCard/index'
import './style.css';

const UserCards = ({ currentUsers, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='user-list'>
      { Object.keys(currentUsers).map(user => (
        <UserCard key={user} index={user} details={currentUsers[user]} />
      ))}
    </div>
  )
}

export default UserCards;

