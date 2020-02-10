import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatString } from '../../utils/utils';
import './style.css';

const UserCard = ({ index, details }) => {
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
          <Link className='go-to-details' to={{pathname: `/users/${index}`, state: {details}}}>Ver detalhes</Link>
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes ={
  index: PropTypes.string,
  details: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    }),
    picture: PropTypes.shape({
      large: PropTypes.string
    }),
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
    location: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
    }),
  })
}

export default UserCard;
