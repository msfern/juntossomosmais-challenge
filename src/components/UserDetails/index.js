import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({ details }) => {
  return (
    <div className='user-details'>
      
      <Link to={{pathname: `/`}}>Voltar</Link>
    </div>
  )
}

export default UserDetails
