import { useNavigate } from "react-router-dom";

import './ReceitaItem.css'

import { useCookBContext } from "../../../context/CookBContext";

const ReceitaItem = ({ receita }) => {
  const navigate = useNavigate()
  const { deleteReceita, setSelectedReceita, handleReceitaSelect } = useCookBContext()
  const handleDelete = () => {
    deleteReceita(receita.id);
    setSelectedReceita(null);
  };

  return (
    <div className="item-container">
      <div className='receita-item'>
        <h3>{receita.title}</h3>
        {receita.restrictions ? (
          <>
            <h4>Não contém:</h4>
            <p>{receita.restrictions}</p>
          </>
        ) : (
          <h4>Esta receita contém glúten e lactose.</h4>
        )}

        <button onClick={handleDelete}>Excluir</button>
        <button onClick={() => navigate(`/details/${receita.id}`)}>Selecionar</button>
        <button onClick={() => navigate(`/edit/${receita.id}`)}>Editar</button>
      </div>
    </div>
  );
};

export default ReceitaItem;
