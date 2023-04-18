import { useNavigate } from "react-router-dom";

import { useCookBContext } from "../../../context/CookBContext";

const ReceitaItem = ({ receita }) => {
  const navigate = useNavigate()
  const { deleteReceita, setSelectedReceita, handleReceitaSelect } = useCookBContext()
  const handleDelete = () => {
    deleteReceita(receita.id);
    setSelectedReceita(null);
  };

  return (
    <div className='receita-item'>
      <h3>{receita.title}</h3>
      {receita.restrictions ? (
        <>
          <h4>Contém:</h4>
          <p>{receita.restrictions}</p>
        </>
      ) : (
        <h4>Esta receita não contém glúten nem lactose.</h4>
      )}

      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => navigate(`/details/${receita.id}`)}>Selecionar</button>
      <button onClick={() => navigate(`/edit/${receita.id}`)}>Editar</button>
    </div>
  );
};

export default ReceitaItem;
