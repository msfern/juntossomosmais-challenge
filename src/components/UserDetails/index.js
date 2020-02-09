import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const UserDetails = (props) => {
  const { details } = props.location.state;

  return (
    <div className='user-details'>
      <div className='user-details-column'>
        <img src={details.picture.large} alt={details.name.first} />
        <div className='input-block'>
          <label htmlFor='registerDate'>Data de Registro</label>
          <input id='registerDate' type='text' defaultValue={details.registered.date} readonly='readonly' />
        </div>
      </div>
      <div className='user-details-column'>
        <h3>Perfil</h3>

        <div className='input-group'>
          <div className='input-block input-block--small'>
            <label htmlFor='title'>Prefixo</label>
            <input id='title' type='text' defaultValue={details.name.title} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='first'>Nome</label>
            <input id='first' type='text' defaultValue={details.name.first} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='last'>Sobrenome</label>
            <input id='last' type='text' defaultValue={details.name.last} readonly='readonly' />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block input-block--small'>
            <label htmlFor='age'>Idade</label>
            <input id='age' type='text' defaultValue={details.dob.age} readonly='readonly' />
          </div>

          <div className='input-block input-block--midsize'>
            <label htmlFor='dobDate'>Data de Nascimento</label>
            <input id='dobDate' type='text' defaultValue={details.dob.date} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='text' defaultValue={details.email} readonly='readonly' />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='phone'>Telefone</label>
            <input id='phone' type='text' defaultValue={details.phone} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='cell'>Celular</label>
            <input id='cell' type='text' defaultValue={details.cell} readonly='readonly' />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='street'>Endereço</label>
            <input id='street' type='text' defaultValue={details.location.street} readonly='readonly' />
          </div>
        </div>

        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='city'>Cidade</label>
            <input id='city' type='text' defaultValue={details.location.city} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='state'>Estado</label>
            <input id='state' type='text' defaultValue={details.location.state} readonly='readonly' />
          </div>

          <div className='input-block'>
            <label htmlFor='postcode'>CEP</label>
            <input id='postcode' type='text' defaultValue={details.location.postcode} readonly='readonly' />
          </div>
        </div>

        <div className='input-group'>
          <div className='user-location'>Mapa</div>
        </div>
        <div className='user-details-footer'>
          <Link className='return' to={{pathname: `/`}}>Voltar</Link>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
