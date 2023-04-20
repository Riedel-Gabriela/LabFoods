import { useNavigate } from "react-router-dom";

import './ReceitaItem.css'

import { useCookBContext } from "../../../context/CookBContext";

const ReceitaItem = ({ receita }) => {
  const navigate = useNavigate()

  const { deleteReceita, setSelectedReceita} = useCookBContext()

  const handleDelete = () => {
    const confirmDelete = window.confirm("Você tem certeza que quer deletar essa receita?");
    if (confirmDelete) {
      deleteReceita(receita.id);
      setSelectedReceita(null);
    }
  };

  return (
    <div className="item-container">
      <div className='receita-item'>
        <h3>{receita.title}</h3>
        {receita.restrictions ? (
          <>
            <h4>Esta receita é:</h4>
            <p className="restriction-p">sem {receita.restrictions}</p>
          </>
        ) : (
          <>
            <h4>Contém:</h4>
            <p className="no-restriction-p">glúten e lactose.</p>
          </>
        )}
        <div className="item-buttons">
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={() => navigate(`/details/${receita.id}`)}>Selecionar</button>
          <button onClick={() => navigate(`/edit/${receita.id}`)}>Editar</button>
        </div>
      </div>
    </div>
  );
};

export default ReceitaItem;
