import React from 'react';
import './style.css';

const FilterSideBar = () => {
  return (
    <aside className='filter-sidebar'>
      <p className='title'>Tipo de Usuário</p>
      <label htmlFor="special">
        <input id='special' type="radio" name="region" value="special" /> Especial
      </label>
      <label htmlFor="normal">
        <input id='normal' type="radio" name="region" value="normal" /> Normal
      </label>
      <label htmlFor="hard">
        <input id='hard' type="radio" name="region" value="hard" /> Trabalhoso
      </label>
    </aside>
  )
}

export default FilterSideBar
