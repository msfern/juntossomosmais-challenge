import React from 'react';
import './style.css';

export default function UserCard({ details }) {
  function formatInfo(info) {
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
          <p className='name-age'>{formatInfo(details.name.first)} {formatInfo(details.name.last)}, {details.dob.age}</p>
          <p className='email'>{details.email}</p>
        </div>
        <div className='bottom'>
          <p className='location'>{formatInfo(details.location.city)}, {formatInfo(details.location.state)}</p>
          <button className='see-more'>Ver Mais</button>
        </div>
      </div>
    </div>
  )
}
