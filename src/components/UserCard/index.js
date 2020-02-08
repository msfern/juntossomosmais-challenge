import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function UserCard({ index, details }) {
  function formatUserInfo(info) {
    return info.split(' ').map(word => (
      word.charAt(0).toUpperCase() + word.slice(1)
    )).join(' ');
  }

  return (
    <div className='user-card'>
      <div className='user-card__header'>
        <img src={details.picture.large} alt={details.name.first} />
      </div>
      <div className='user-card__body'>
        <div className='middle'>
          <p className='name-age'>{formatUserInfo(details.name.first)} {formatUserInfo(details.name.last)}, {details.dob.age}</p>
          <p className='email'>{details.email}</p>
        </div>
        <div className='bottom'>
          <p className='location'>{formatUserInfo(details.location.city)}, {formatUserInfo(details.location.state)}</p>
          <Link to={{pathname: `/users/${index}`, state: {details}}}>Ver mais</Link>
        </div>
      </div>
    </div>
  )
}
