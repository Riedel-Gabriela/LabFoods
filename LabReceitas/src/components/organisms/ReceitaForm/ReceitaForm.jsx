import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import './ReceitaForm.css'

import { useCookBContext } from "../../../context/CookBContext";

const ReceitaForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addReceita, updateReceita, setSelectedReceita, receitas } = useCookBContext();
    const selectedReceita = receitas.find(receita => receita.id === Number(id))
    const [formValues, setFormValues] = useState({
        title: "",
        content: "",
        prepare: "",
        restrictions: ""
    });

    useEffect(() => {
        if (selectedReceita) {
            setFormValues({
                title: selectedReceita.title,
                content: selectedReceita.content,
                prepare: selectedReceita.prepare,
                restrictions: selectedReceita.restrictions
            });
        }
    }, [selectedReceita]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedReceita) {
            updateReceita(selectedReceita.id, {
                ...selectedReceita,
                title: formValues.title,
                content: formValues.content,
                prepare: formValues.prepare,
                restrictions: formValues.restrictions
            });
            setSelectedReceita(null);
        } else {
            addReceita({
                id: Date.now(),
                title: formValues.title,
                content: formValues.content,
                prepare: formValues.prepare,
                restrictions: formValues.restrictions
            });
        }

        setFormValues({
            title: "",
            content: "",
            prepare: "",
            restrictions: ""
        });
        navigate('/')
    };
    return (
        <div className="modal">
            <div className="modal-content">
            <h2>Nova Receita</h2>
            <form onSubmit={handleSubmit}>
                Título da Receita:<br />
                <input
                    type="text"
                    placeholder="ex: bolo de chocolate da vó"
                    value={formValues.title}
                    onChange={(e) =>
                        setFormValues({ ...formValues, title: e.target.value })
                    }
                />
                <br />
                Ingredientes:<br />
                <textarea
                    placeholder="ex: 1 xc de trigo, 2 ovos (...)"
                    value={formValues.content}
                    onChange={(e) =>
                        setFormValues({ ...formValues, content: e.target.value })
                    }
                />
                <br />
                Preparo:<br />
                <textarea
                    placeholder="ex: coloque os ingredientes secos, misture com os ovos"
                    value={formValues.prepare}
                    onChange={(e) =>
                        setFormValues({ ...formValues, prepare: e.target.value })
                    }
                />
                <h3>Restrições</h3>
                <p>Se você não adicionar restrições, não tem problema!<br />Será uma receita com glúten e lactose.</p>
                <div className="radio-buttons-form">
                <input 
                type="radio" 
                name="restriction" 
                value="Glúten"
                onChange={(e) =>
                        setFormValues({ ...formValues, restrictions: e.target.value })
                    }
                />
                Sem glúten
                <br />
                <input 
                type="radio" 
                name="restriction"
                value="Lactose"
                onChange={(e) =>
                    setFormValues({ ...formValues, restrictions: e.target.value })
                }
                />
                Sem lactose
                <br />
                <input 
                type="radio" 
                name="restriction"
                value="Glúten e Lactose"
                onChange={(e) =>
                    setFormValues({ ...formValues, restrictions: e.target.value })
                }
                />
                Sem glúten e sem lactose
                <br />
                </div>

                <button type="submit">
                    {selectedReceita ? "Atualizar Receita" : "Adicionar Receita"}
                </button>
            </form>
            <button onClick={() => navigate(-1)}> Voltar </button>
            </div>
        </div>
    );
};

export default ReceitaForm;
