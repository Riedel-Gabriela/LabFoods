import { useParams } from "react-router-dom";
import { useCookBContext } from "../../../context/CookBContext";

const ReceitaDetails = () => {
    const { id } = useParams();
    const { receitas } = useCookBContext();
    const selectedReceita = receitas.find(receita => receita.id === Number(id))
    return (
        <div>
            <h2>Detalhes da Receita</h2>
            {selectedReceita ? (
                <>
                    <h4>{selectedReceita.title}</h4>
                    <h4>Ingredientes:</h4>
                    <p>{selectedReceita.content}</p>
                    <h4>Modo de preparo:</h4>
                    <p>{selectedReceita.prepare}</p>
                    {selectedReceita.restrictions ? (
                        <>
                            <h4>Contém:</h4>
                            <p>{selectedReceita.restrictions}</p>
                        </>
                    ) : (
                        <h4>Esta receita não contém glúten nem lactose.</h4>
                    )}
                </>
            ) : (
                <p>Selecione uma receita para visualizar os detalhes.</p>
            )}
        </div>
    );
};

export default ReceitaDetails;
