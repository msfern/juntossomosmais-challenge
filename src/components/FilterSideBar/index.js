import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FilterSideBar = ({ filterUsers, clearFilter }) => {
  const radioSpecialRef = React.createRef();
  const radioNormalRef = React.createRef();
  const radioHardRef = React.createRef();

  function handleRadioClick(e) {
    filterUsers(e.target.value);
  }

  function handleClearButtonClick() {
    radioSpecialRef.current.checked = false;
    radioNormalRef.current.checked = false;
    radioHardRef.current.checked = false;
    clearFilter();
  }

  return (
    <aside className='filter-sidebar'>
      <p className='title'>Tipo de Usuário</p>
      <label htmlFor="special">
        <input id='special' type="radio" name="region" value="0" onChange={handleRadioClick} ref={radioSpecialRef} /> Especial
      </label>
      <label htmlFor="normal">
        <input id='normal' type="radio" name="region" value="1" onChange={handleRadioClick} ref={radioNormalRef} /> Normal
      </label>
      <label htmlFor="hard">
        <input id='hard' type="radio" name="region" value="2" onChange={handleRadioClick} ref={radioHardRef} /> Trabalhoso
      </label>
      <button className='clear' onClick={handleClearButtonClick}>Limpar filtro</button>
    </aside>
  )
}

FilterSideBar.propTypes ={
  filterUsers: PropTypes.func,
  clearFilter: PropTypes.func,
}

export default FilterSideBar
