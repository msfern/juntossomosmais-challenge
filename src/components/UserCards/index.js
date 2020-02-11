import React from 'react';
import PropTypes from 'prop-types';
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
        <p className='no-results'>Nenhum usuário corresponde à essa busca.</p>
      }
    </div>
  )
}

UserCards.propTypes ={
  currentUsers: PropTypes.array,
  loading: PropTypes.bool,
}

export default UserCards;

