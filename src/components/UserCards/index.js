import React from 'react'
import UserCard from '../UserCard/index'
import './style.css';

const UserCards = ({ currentUsers, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='user-list'>
      {currentUsers.length ?
        Object.keys(currentUsers).map(user => (
          <UserCard key={user} index={user} details={currentUsers[user]} />
        ))
        :
        <p>Nenhum usuário corresponde à essa busca.</p>
      }
    </div>
  )
}

export default UserCards;

