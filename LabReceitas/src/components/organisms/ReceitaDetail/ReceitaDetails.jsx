import { useParams, useNavigate } from "react-router-dom";

import './ReceitaDetails.css'

import { useCookBContext } from "../../../context/CookBContext";

const ReceitaDetails = () => {
    const { id } = useParams();
    const { receitas } = useCookBContext();
    const navigate = useNavigate();
    const selectedReceita = receitas.find(receita => receita.id === Number(id))

    const breakpoint = /\n|,/

    const ingredients = (selectedReceita.content)
    const listIngredients = ingredients.split(breakpoint);

    const preparo = (selectedReceita.prepare)
    const listPreparo = preparo.split(breakpoint);
    return (
        <div className="receita-details">
            <h2>Detalhes da Receita</h2>
            {selectedReceita ? (
                <>
                    <h3 className="details-title">{selectedReceita.title}</h3>
                    
                    <h4>Ingredientes:</h4>
                    <div className="lists-container">
                    <ul>
                        {listIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    </div>
                    <h4>Modo de preparo:</h4>
                    <div className="lists-container">
                    <ol>
                        {listPreparo.map((passo, index) => (
                            <li key={index}>{passo}</li>
                        ))}
                    </ol>
                    </div>
                    {selectedReceita.restrictions ? (
                        <>
                            <h4>Contém:</h4>
                            <p>{selectedReceita.restrictions}</p>
                        </>
                    ) : (
                        <h4>Esta receita não contém glúten nem lactose.</h4>
                    )}
                    <button className="detail-back-button" onClick={() => navigate(`/edit/${selectedReceita.id}`)}>Editar</button>
                </>
            ) : (
                <p>Selecione uma receita para visualizar os detalhes.</p>
            )}
        </div>
    );
};

export default ReceitaDetails;
