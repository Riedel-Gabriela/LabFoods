import { useCookBContext } from '../../../context/CookBContext'
import ReceitaItem from '../ReceitaItem/ReceitaItem';

const ReceitaList = () => {
    const { receitas } = useCookBContext();
    return (
        <div>
            <h2>Lista de Receitas</h2>
            <div className="receitas-list">
                {receitas.map((receita) => (
                    <ReceitaItem
                        key={receita.id}
                        receita={receita}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReceitaList;
