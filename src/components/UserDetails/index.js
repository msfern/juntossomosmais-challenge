import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatString, getOnlyDayMonthYearFromDate } from '../../utils/utils';
import './style.css';

const UserDetails = (props) => {
  const { details } = props.location.state;

  return (
    <div className='user-details'>
      <div className='user-details-column'>
        <img src={details.picture.large} alt={details.name.first} />
        <div className='input-block'>
          <label htmlFor='registerDate'>Data de Registro</label>
          <input id='registerDate' type='text' defaultValue={getOnlyDayMonthYearFromDate(details.registered.date)} readOnly />
        </div>
      </div>
      <div className='user-details-column'>
        <h3>Perfil</h3>

        <div className='input-group'>
          <div className='input-block input-block--small'>
            <label htmlFor='title'>Prefixo</label>
            <input id='title' type='text' defaultValue={formatString(details.name.title)} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='first'>Nome</label>
            <input id='first' type='text' defaultValue={formatString(details.name.first)} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='last'>Sobrenome</label>
            <input id='last' type='text' defaultValue={formatString(details.name.last)} readOnly />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block input-block--small'>
            <label htmlFor='age'>Idade</label>
            <input id='age' type='text' defaultValue={details.dob.age} readOnly />
          </div>

          <div className='input-block input-block--midsize'>
            <label htmlFor='dobDate'>Data de Nascimento</label>
            <input id='dobDate' type='text' defaultValue={getOnlyDayMonthYearFromDate(details.dob.date)} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='text' defaultValue={details.email} readOnly />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='phone'>Telefone</label>
            <input id='phone' type='text' defaultValue={details.phone} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='cell'>Celular</label>
            <input id='cell' type='text' defaultValue={details.cell} readOnly />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='street'>Endereço</label>
            <input id='street' type='text' defaultValue={formatString(details.location.street)} readOnly />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='city'>Cidade</label>
            <input id='city' type='text' defaultValue={formatString(details.location.city)} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='state'>Estado</label>
            <input id='state' type='text' defaultValue={formatString(details.location.state)} readOnly />
          </div>

          <div className='input-block'>
            <label htmlFor='postcode'>CEP</label>
            <input id='postcode' type='text' defaultValue={details.location.postcode} readOnly />
          </div>
        </div>
        <div className='user-details-footer'>
          <Link className='return' to={{pathname: `/`}}>Voltar</Link>
        </div>
      </div>
    </div>
  )
}

UserDetails.propTypes ={
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        name: PropTypes.shape({
          title: PropTypes.string,
          first: PropTypes.string,
          last: PropTypes.string
        }),
        picture: PropTypes.shape({
          large: PropTypes.string
        }),
        registered: PropTypes.shape({
          date: PropTypes.string
        }),
        dob: PropTypes.shape({
          age: PropTypes.number,
          date: PropTypes.string
        }),
        location: PropTypes.shape({
          street: PropTypes.string,
          city: PropTypes.string,
          state: PropTypes.string,
          postcode: PropTypes.number
        }),
      })
    }),
  }),
  email: PropTypes.string,
  phone: PropTypes.string,
  cell: PropTypes.string,
}

export default UserDetails
