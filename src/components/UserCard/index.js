import React from 'react';
import { Link } from 'react-router-dom';
import { formatString } from '../../utils/utils';
import './style.css';

export default function UserCard({ index, details }) {
  return (
    <div className='user-card'>
      <div className='user-card__header'>
        <img src={details.picture.large} alt={details.name.first} />
      </div>
      <div className='user-card__body'>
        <div className='middle'>
          <p className='name-age'>{formatString(details.name.first)} {formatString(details.name.last)}, {details.dob.age}</p>
          <p className='email'>{details.email}</p>
        </div>
        <div className='bottom'>
          <p className='location'>{formatString(details.location.city)}, {formatString(details.location.state)}</p>
          <Link className='go-to-details' to={{pathname: `/users/${index}`, state: {details}}}>Ver mais</Link>
        </div>
      </div>
    </div>
  )
}
