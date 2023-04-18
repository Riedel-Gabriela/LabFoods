import { useState } from 'react';
import { useCookBContext } from '../../../context/CookBContext';
import ReceitaItem from '../ReceitaItem/ReceitaItem';

const ReceitaList = () => {
  const { receitas } = useCookBContext();

  const [filterValue, setFilterValue] = useState('');

  const handleFilterClick = () => {
    const selectedReceita = receitas.filter((receita) => {   
      if (filterValue === 'gluten-lactose-free') {
        return receita.restrictions.includes('Glúten e Lactose') === true;
      }
      return receita.restrictions.includes(filterValue) === true;
    });
    setFilteredReceitas(selectedReceita);
  };

  const [filteredReceitas, setFilteredReceitas] = useState(receitas);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <h2>Lista de Receitas</h2>
      <label>
        <input
          type="radio"
          name="restriction"
          value=""
          checked={filterValue === ''}
          onChange={handleFilterChange}
        />
        Todas
      </label>
      <label>
        <input
          type="radio"
          name="restriction"
          value="Glúten"
          checked={filterValue === 'Glúten'}
          onChange={handleFilterChange}
        />
        Sem glúten
      </label>
      <label>
        <input
          type="radio"
          name="restriction"
          value="Lactose"
          checked={filterValue === 'Lactose'}
          onChange={handleFilterChange}
        />
        Sem lactose
      </label>
      <label>
        <input
          type="radio"
          name="restriction"
          value="gluten-lactose-free"
          checked={filterValue === 'gluten-lactose-free'}
          onChange={handleFilterChange}
        />
        Sem glúten e sem lactose
      </label>
      <button type="button" onClick={handleFilterClick}>
        Filtrar
      </button>
      {filteredReceitas.length === 0 ? (
        <p>Nenhuma receita encontrada.</p>
      ) : (
        filteredReceitas.map((receita) => (
          <ReceitaItem key={receita.id} receita={receita} />
        ))
      )}
    </div>
  );
};

export default ReceitaList;
