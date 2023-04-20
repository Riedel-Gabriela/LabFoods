import { useState } from 'react';

import './ReceitaList.css'

import { useCookBContext } from '../../../context/CookBContext';
import ReceitaItem from '../ReceitaItem/ReceitaItem';

const ReceitaList = () => {
  const { receitas } = useCookBContext();

  const [filterValue, setFilterValue] = useState('');
  let receitaValor = ''

  const handleFilterClick = () => {
    setFilterValue(receitaValor);
  };

  const handleFilterChange = (e) => {
    receitaValor = e.target.value
  };

  return (
    <div className='list'>
      <h2>LISTA DE RECEITAS</h2>
      <div className='filter-container'>
        <label><input name='filter' type='radio' value=' ' onChange={handleFilterChange} />Todas</label><br />
        <label><input name='filter' type='radio' value='gluten' onChange={handleFilterChange} />Sem Glúten</label><br />
        <label><input name='filter' type='radio' value='lactose' onChange={handleFilterChange} />Sem Lactose</label><br />
        <label><input name='filter' type='radio' value='gluten-lactose' onChange={handleFilterChange} />Sem Glúten e Sem Lactose</label><br />
      </div>
      <button type='button' onClick={handleFilterClick}>Filtrar</button>
      <br />
      <div className='item-grid'>
      {receitas.length === 0 ? (
        <p>Sem receitas no seu caderno! Adicione uma receita no botão <span className='span-list'>Nova Receita</span> no início da página.</p>
      ) : (
        receitas
          .filter((receita) => {
            if (filterValue === 'gluten-lactose') {
              return receita.restrictions.includes('Glúten e Lactose') === true;
            } else if (filterValue === 'gluten') {
              return receita.restrictions.includes('Glúten') === true;
            } else if (filterValue === 'lactose') {
              return receita.restrictions.includes('Lactose') === true;
            } else if (filterValue === ' ') {
              return receitas
            }
            return receitas
          })
          .map((receita) => (
          <ReceitaItem key={receita.id} receita={receita} />
          ))
      )}
      </div>
    </div>
  );
};

export default ReceitaList;
